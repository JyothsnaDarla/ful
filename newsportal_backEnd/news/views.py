# news/views.py

from rest_framework import viewsets, generics, permissions, status, filters
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from .models import Article, Category, Comment
from .serializers import ArticleSerializer, CategorySerializer, CommentSerializer

# For translation using googletrans (fast)
from googletrans import Translator

translator = Translator()


# --- Permission Class: Admin or Read-Only ---
class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Admins have full access.
    Normal users have read-only access.
    """

    def has_permission(self, request, view):
        if request.user and request.user.is_staff:
            return True
        if request.method in permissions.SAFE_METHODS:
            return request.user and request.user.is_authenticated
        return False


# --- Helper: Translate Text ---
def translate_text(text, target_lang="hi"):
    try:
        translated = translator.translate(text, dest=target_lang)
        return translated.text
    except Exception as e:
        return text  # fallback: return original text


# -----------------------------
# Article / News ViewSet
# -----------------------------
class NewsViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-publication_date')
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'short_description', 'detailed_description']

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated and user.is_staff:
            # Admin sees all articles
            return Article.objects.all().order_by('-publication_date')
        # Normal users see only published articles
        return Article.objects.filter(is_published=True).order_by('-publication_date')

    def perform_create(self, serializer):
        """
        Admin adds news: set creator and pre-translate content to Hindi
        """
        instance = serializer.save(created_by=self.request.user)
        if hasattr(instance, 'detailed_description'):
            # Precompute Hindi translation for fast serving
            instance.translated_content = translate_text(instance.detailed_description, target_lang="hi")
            instance.save()

    @action(detail=True, methods=["post"], permission_classes=[IsAdminUser])
    def preview_translate(self, request, pk=None):
        """
        Admin preview translation before publishing.
        POST body: {"target_lang": "hi"}
        """
        article = self.get_object()
        target = request.data.get("target_lang", "hi")
        translated = translate_text(article.detailed_description, target_lang=target)
        return Response({"translated": translated}, status=status.HTTP_200_OK)


# -----------------------------
# Category ViewSet
# -----------------------------
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]


# -----------------------------
# Comment API
# -----------------------------
class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        article_id = self.kwargs['article_id']
        return Comment.objects.filter(article__id=article_id).order_by('created_at')

    def perform_create(self, serializer):
        article = get_object_or_404(Article, pk=self.kwargs['article_id'])
        serializer.save(article=article)


# -----------------------------
# Current User Info
# -----------------------------
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    user = request.user
    return Response({
        "username": user.username,
        "email": user.email,
        "is_staff": user.is_staff,
    })


# -----------------------------
# Latest news for homepage
# -----------------------------
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def latest_news(request):
    news_qs = Article.objects.filter(is_published=True).order_by('-publication_date')[:10]
    serializer = ArticleSerializer(news_qs, many=True)
    return Response(serializer.data)
