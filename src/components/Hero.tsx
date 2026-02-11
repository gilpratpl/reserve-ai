import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeroProps {
  onDemoClick?: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
  const { language } = useLanguage();

  const copy = {
    es: {
      badge: "IA para Restaurantes",
      titleMain: "Reservas Automáticas",
      titleHighlight: "con Inteligencia Artificial",
      subtitle:
        "Bot de WhatsApp y teléfono que gestiona tus reservas 24/7. Dashboard completo para controlar mesas y disponibilidad en tiempo real.",
      cta: "Pruébalo ahora",
      statAutomation: "Automatización",
      statAvailability: "Disponibilidad",
      statRestaurants: "Restaurantes",
    },
    en: {
      badge: "AI for Restaurants",
      titleMain: "Automatic Reservations",
      titleHighlight: "with Artificial Intelligence",
      subtitle:
        "WhatsApp and phone bot that manages your bookings 24/7, with a full dashboard to control tables and real‑time availability.",
      cta: "Try it now",
      statAutomation: "Automation",
      statAvailability: "Availability",
      statRestaurants: "Restaurants",
    },
    ca: {
      badge: "IA per a Restaurants",
      titleMain: "Reserves automàtiques",
      titleHighlight: "amb Intel·ligència Artificial",
      subtitle:
        "Bot de WhatsApp i telèfon que gestiona les teves reserves 24/7. Panell complet per controlar taules i disponibilitat en temps real.",
      cta: "Prova-ho ara",
      statAutomation: "Automatització",
      statAvailability: "Disponibilitat",
      statRestaurants: "Restaurants",
    },
    it: {
      badge: "IA per Ristoranti",
      titleMain: "Prenotazioni automatiche",
      titleHighlight: "con Intelligenza Artificiale",
      subtitle:
        "Bot WhatsApp e telefonico che gestisce le tue prenotazioni 24/7. Dashboard completo per controllare tavoli e disponibilità in tempo reale.",
      cta: "Provalo ora",
      statAutomation: "Automazione",
      statAvailability: "Disponibilità",
      statRestaurants: "Ristoranti",
    },
  } as const;

  const t = copy[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-24 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t.badge} ·{" "}
              <a
                href="https://ndxai.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                NDXai
              </a>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-normal md:leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 pb-2">
            {t.titleMain}
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent pb-1">
              {t.titleHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-2"
              onClick={onDemoClick}
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">{t.statAutomation}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">{t.statAvailability}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">+50</div>
              <div className="text-sm text-muted-foreground">{t.statRestaurants}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
