import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { label: "ट्रेंडिंग", color: "text-red-600" },
  { label: "छठ महापर्व", color: "text-foreground" },
  { label: "बिहार में घमासान", color: "text-foreground" },
  { label: "विशेष वर्ल्ड कप", color: "text-foreground" },
  { label: "हरियाणा IPS", color: "text-foreground" },
];

const CategoryTabs = () => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide border-b">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`whitespace-nowrap font-semibold ${category.color}`}
        >
          {category.label}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
