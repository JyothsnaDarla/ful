import { Home, Video, Search, Newspaper, FileText, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <h1 className="text-2xl font-bold">दैनिक भास्कर</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="gap-2 text-primary font-semibold">
            <Home className="h-4 w-4" />
            होम
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Video className="h-4 w-4" />
            वीडियो
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Search className="h-4 w-4" />
            सर्च
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Newspaper className="h-4 w-4" />
            वेब स्टोरीज
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            ई-पेपर
          </Button>
          <Button variant="ghost" size="icon" className="ml-2">
            <User className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
