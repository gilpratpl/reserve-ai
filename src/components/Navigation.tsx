import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Utensils, Menu, X } from "lucide-react";
import { LANGUAGE_OPTIONS, useLanguage } from "@/i18n/LanguageContext";

interface NavigationProps {
  onDemoClick?: () => void;
}

const Navigation = ({ onDemoClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const copy = {
    es: {
      features: "Características",
      pricing: "Precios",
      howItWorks: "Cómo funciona",
      login: "Iniciar sesión",
      brand: "Reserbot",
    },
    en: {
      features: "Features",
      pricing: "Pricing",
      howItWorks: "How it works",
      login: "Log in",
      brand: "Reserbot",
    },
    ca: {
      features: "Característiques",
      pricing: "Preus",
      howItWorks: "Com funciona",
      login: "Inicia sessió",
      brand: "Reserbot",
    },
    it: {
      features: "Funzionalità",
      pricing: "Prezzi",
      howItWorks: "Come funziona",
      login: "Accedi",
      brand: "Reserbot",
    },
  } as const;

  const t = copy[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">{t.brand}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.features}
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.pricing}
            </a>
            <a href="#how" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.howItWorks}
            </a>

            {/* Language selector */}
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-1.5 py-0.5 text-xs">
              {LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`px-2 py-0.5 rounded-full transition-colors ${
                    option.code === language
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {option.short}
                </button>
              ))}
            </div>

            <a
              href="https://reserbot.ndxai.eu/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                {t.login}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.features}
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.pricing}
              </a>
              <a
                href="#how"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.howItWorks}
              </a>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-muted-foreground">Idioma</span>
                <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-1.5 py-0.5 text-xs">
                  {LANGUAGE_OPTIONS.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLanguage(option.code)}
                      className={`px-2 py-0.5 rounded-full transition-colors ${
                        option.code === language
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {option.short}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="https://reserbot.ndxai.eu/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  {t.login}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
