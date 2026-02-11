import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

interface HeroProps {
  onDemoClick?: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
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
              IA para Restaurantes ·{" "}
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
            Reservas Automáticas
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent pb-1">
              con Inteligencia Artificial
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Bot de WhatsApp y teléfono que gestiona tus reservas 24/7. Dashboard completo para controlar mesas y disponibilidad en tiempo real.
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
              Pruebalo ahora
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Automatización</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">+50</div>
              <div className="text-sm text-muted-foreground">Restaurantes</div>
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
