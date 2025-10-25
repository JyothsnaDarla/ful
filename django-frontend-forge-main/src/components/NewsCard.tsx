import { Play } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface NewsCardProps {
  title: string;
  category?: string;
  image?: string;
  hasVideo?: boolean;
  videoDuration?: string;
}

const NewsCard = ({ title, category, image, hasVideo, videoDuration }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative aspect-video bg-muted overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="rounded-full bg-white/90 p-4">
              <Play className="h-6 w-6 fill-primary text-primary" />
            </div>
          </div>
        )}
        {videoDuration && (
          <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0">
            {videoDuration}
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-2">
        {category && (
          <Badge variant="secondary" className="text-xs font-semibold" style={{ color: 'hsl(var(--news-highlight))' }}>
            {category}
          </Badge>
        )}
        <h3 className="font-bold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default NewsCard;
