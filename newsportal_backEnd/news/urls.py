from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, CategoryViewSet, CommentListCreateView, me, latest_news

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('comments/<int:article_id>/', CommentListCreateView.as_view(), name='comments'),
    path('me/', me, name='me'),
    path('latest-news/', latest_news, name='latest-news'),
]
