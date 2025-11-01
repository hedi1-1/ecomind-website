import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, Sparkles } from "lucide-react";
import ecoMindLogo from "@/assets/ecomind-logo.jpg";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <img 
            src={ecoMindLogo} 
            alt="EcoMind Logo - Intelligence écologique" 
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EcoMind
          </span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Accueil
            </Button>
          </Link>
          
          <Link to="/dashboard">
            <Button 
              variant={isActive("/dashboard") ? "default" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          
          <Link to="/admin">
            <Button 
              variant={isActive("/admin") ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Settings className="h-4 w-4" />
              Admin
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
