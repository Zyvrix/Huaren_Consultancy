import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import huarenLogo from "@/assets/huaren-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// PDF link for Union Budget - update this path as needed
const UNION_BUDGET_PDF = "/assets/UnionBudget2025.pdf";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItemsBefore = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const navItemsAfter = [
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceCategories = [
    { name: "Chartered Accounting", id: "chartered-accounting" },
    { name: "Financials", id: "financials" },
    { name: "Investing", id: "investing" },
    { name: "Tech & IT Solutions", id: "tech-it" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-8">
            <div className="flex items-center">
              <img 
                src={huarenLogo} 
                alt="Huaren Logo" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItemsBefore.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></div>
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-3 py-2 text-sm font-medium transition-colors relative bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${
                      isActive("/services")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    <Link to="/services" className="flex items-center gap-1">
                      Services
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-background">
                      <div className="space-y-2">
                        {serviceCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/services#${category.id}`}
                            className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItemsAfter.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></div>
                )}
              </Link>
            ))}
            
            {/* Union Budget PDF Link */}
            <a
              href={UNION_BUDGET_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Union Budget
            </a>
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <a
              href="tel:+917678630568"
              className="flex items-center text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">+91 76786 30568</span>
            </a>
            <Button variant="gold" size="sm" className="whitespace-nowrap">
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItemsBefore.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/services"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive("/services")
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              {navItemsAfter.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Union Budget PDF Link */}
              <a
                href={UNION_BUDGET_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Union Budget
              </a>
              
              <div className="px-3 py-2 space-y-2">
                <a
                  href="tel:+917678630568"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">+91 76786 30568</span>
                </a>
                <Button variant="gold" size="sm" className="w-full">
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;