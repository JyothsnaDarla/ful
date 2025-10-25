import { Flame, MapPin, Vote, Star, Trophy, Video, Film, Briefcase, ShoppingBag, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon, label, isActive }: SidebarItemProps) => {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent/10 rounded-lg",
        isActive && "bg-secondary"
      )}
    >
      <span className="text-primary">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="sticky top-16 hidden lg:block w-64 border-r bg-card h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-2 space-y-1">
        <SidebarItem icon={<Flame className="h-5 w-5" />} label="टॉप न्यूज़" isActive />
        <SidebarItem icon={<MapPin className="h-5 w-5" />} label="राज्य-शहर" />
        <SidebarItem icon={<Vote className="h-5 w-5" />} label="बिहार चुनाव" />
        <SidebarItem icon={<Star className="h-5 w-5" />} label="भास्कर ख़ास" />
        <SidebarItem icon={<Trophy className="h-5 w-5" />} label="क्रिकेट" />
        <SidebarItem icon={<Video className="h-5 w-5" />} label="DB ऑरिजिनल" />
        <SidebarItem icon={<Trophy className="h-5 w-5" />} label="स्पोर्ट्स" />
        <SidebarItem icon={<Film className="h-5 w-5" />} label="बॉलीवुड" />
        <SidebarItem icon={<Briefcase className="h-5 w-5" />} label="जॉब - एजुकेशन" />
        <SidebarItem icon={<DollarSign className="h-5 w-5" />} label="बिज़नेस" />
        <SidebarItem icon={<ShoppingBag className="h-5 w-5" />} label="लाइफ़स्टाइल" />
      </div>
    </aside>
  );
};

export default Sidebar;
