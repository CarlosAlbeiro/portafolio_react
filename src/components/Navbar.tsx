import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
     {name: "Estudios", href: "#education" },
    { name: "Experiencia", href: "#experience" },
    { name: "Habilidades", href: "#skills" },
    // { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed p-0 m-0 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-0 m-0">
        <div className="flex items-center justify-between px-2">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            // className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            className={`text-sm font-medium transition-colors p-0 m-0 ${
              !isScrolled
                ? theme === "light"
                  ? "text-white hover:text-white/80"
                  : "text-foreground/80 hover:text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            <img
              src={logo}
              alt="Logo Portafolio"
              className="h-[70px] w-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                // className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                className={`text-sm font-medium transition-colors ${
                  !isScrolled
                    ? theme === "light"
                      ? "text-white hover:text-white/80"
                      : "text-foreground/80 hover:text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              > <b>
                {item.name}
                </b>
              </a>
            ))}
          </div>

          <div className={`hidden md:flex items-center gap-4 border-border ${
                  !isScrolled
                    ? theme === "light"
                      ? "text-white hover:text-white/80"
                      : "text-foreground/80 hover:text-primary"
                    : "text-foreground/80 hover:text-primary"
          
                }`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            {/* <Button className="gap-2">
              <Download className="h-4 w-4" />
              Descargar CV
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  // className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                   className={`text-sm font-medium transition-colors ${
                    !isScrolled
                      ? theme === "light"
                        ? "text-white hover:text-white/80"
                        : "text-foreground/80 hover:text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div 
               className={`flex items-center gap-4 pt-4 border-t border-border ${
                  !isScrolled
                    ? theme === "light"
                      ? "text-white hover:text-white/80"
                      : "text-foreground/80 hover:text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
                {/* <Button className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Descargar CV
                </Button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;