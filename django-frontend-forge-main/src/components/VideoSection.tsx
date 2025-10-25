import { Button } from "./ui/button";
import NewsCard from "./NewsCard";

const videos = [
  {
    title: "बिहार चुनाव: महागठबंधन में सीट बंटवारे पर सस्पेंस बरकरार",
    videoDuration: "2:34",
  },
  {
    title: "क्रिकेट: भारत ने ऑस्ट्रेलिया को 5 विकेट से हराया",
    videoDuration: "1:45",
  },
  {
    title: "मौसम अपडेट: उत्तर भारत में ठंड का प्रकोप",
    videoDuration: "3:12",
  },
];

const VideoSection = () => {
  return (
    <div className="bg-card rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">वीडियो</h2>
        <Button variant="outline" size="sm">
          और देखें
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <NewsCard
            key={index}
            title={video.title}
            hasVideo
            videoDuration={video.videoDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
