import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedNews from "@/components/FeaturedNews";
import NewsCard from "@/components/NewsCard";
import VideoSection from "@/components/VideoSection";

const newsArticles = [
  {
    title: "राजस्थान: जयपुर में भीषण सड़क हादसा, 5 लोगों की मौत",
    category: "राज्य-शहर",
  },
  {
    title: "शेयर बाजार: सेंसेक्स में 500 अंकों की गिरावट, निवेशकों को भारी नुकसान",
    category: "बिज़नेस",
  },
  {
    title: "IPL 2025: नीलामी में धोनी को मिली कप्तानी, 20 करोड़ में बिके",
    category: "क्रिकेट",
  },
  {
    title: "बॉलीवुड: शाहरुख खान की नई फिल्म का ट्रेलर रिलीज, रिकॉर्ड व्यूज",
    category: "बॉलीवुड",
  },
  {
    title: "शिक्षा: CBSE ने बदले 10वीं-12वीं के एग्जाम पैटर्न",
    category: "जॉब - एजुकेशन",
  },
  {
    title: "स्वास्थ्य: डॉक्टरों ने बताए सर्दियों में स्वस्थ रहने के टिप्स",
    category: "लाइफ़स्टाइल",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 container py-6 px-4 space-y-6">
          <CategoryTabs />
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured News - Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <FeaturedNews />
              
              {/* News Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {newsArticles.map((article, index) => (
                  <NewsCard
                    key={index}
                    title={article.title}
                    category={article.category}
                  />
                ))}
              </div>
            </div>
            
            {/* Video Section - Right Column */}
            <div className="lg:col-span-1">
              <VideoSection />
            </div>
          </div>
          
          {/* More News Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">और ख़बरें</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...newsArticles, ...newsArticles].map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.title}
                  category={article.category}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
