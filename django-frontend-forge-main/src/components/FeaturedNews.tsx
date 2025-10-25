import { Play } from "lucide-react";
import { Badge } from "./ui/badge";

const FeaturedNews = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold leading-tight text-green-700">
        सोना एक दिन में ₹1,836 और चांदी ₹4,417 सस्ती: 7 दिन में सोने की कीमत ₹9,356 घटी, चांदी में ₹31 हजार की गिरावट
      </h2>
      
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-amber-200 to-amber-400">
        <img 
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format&fit=crop" 
          alt="Gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="rounded-full bg-white/90 p-6 cursor-pointer hover:scale-110 transition-transform">
            <Play className="h-8 w-8 fill-primary text-primary" />
          </div>
        </div>
        <Badge className="absolute bottom-3 right-3 bg-black/80 text-white border-0 px-3 py-1">
          1:05
        </Badge>
      </div>
    </div>
  );
};

export default FeaturedNews;
