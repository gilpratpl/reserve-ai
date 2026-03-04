import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useRef, useState } from "react";

interface HeroProps {
  onDemoClick?: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const copy = {
    es: {
      badge: "IA para Restaurantes",
      titleMain: "Reservas Automáticas",
      titleHighlight: "con Inteligencia Artificial",
      subtitle:
        "Bot de WhatsApp y teléfono que gestiona tus reservas 24/7. Dashboard completo para controlar mesas y disponibilidad en tiempo real.",
      cta: "Pruébalo ahora",
      watchVideo: "Ver demo",
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
      watchVideo: "Watch demo",
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
      watchVideo: "Veure demo",
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
      watchVideo: "Guarda demo",
      statAutomation: "Automazione",
      statAvailability: "Disponibilità",
      statRestaurants: "Ristoranti",
    },
  } as const;

  const t = copy[language];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Top section: centered text */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-28 pb-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t.badge} ·{" "}
              <a href="https://ndxai.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">
                NDXai
              </a>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            {t.titleMain}
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent pb-1">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
            <Button
              size="lg"
              className="text-lg px-8 h-14 bg-gradient-primary hover:opacity-90"
              onClick={onDemoClick}
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 pt-6 max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-xs text-muted-foreground">{t.statAutomation}</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">{t.statAvailability}</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">+50</div>
              <div className="text-xs text-muted-foreground">{t.statRestaurants}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: video showcase */}
      <div className="relative z-10 px-4 pb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-6 bg-gradient-primary opacity-[0.07] blur-3xl rounded-3xl" />

            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden shadow-medium border border-border/50 bg-card ring-1 ring-primary/10">
              <div className="relative group cursor-pointer" onClick={handlePlayVideo}>
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  src="/reserbot.mp4"
                  controls={isPlaying}
                  muted
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/90 backdrop-blur-sm shadow-medium group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-5 h-5 text-primary-foreground" />
                      <span className="text-sm font-semibold text-primary-foreground">{t.watchVideo}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
