import { Button } from "@/components/ui/button";
import { Calendar, Bot, MessageSquare, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  onDemoClick?: () => void;
}

const rotatingWords = ["WhatsApp", "Teléfono", "Web"];

const Hero = ({ onDemoClick }: HeroProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(20,14%,8%)]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(18 75% 55%), transparent 70%)",
            animation: "float-slow 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(18 90% 60%), transparent 70%)",
            animation: "float-slow 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(18 75% 65%), transparent 70%)",
            animation: "float-slow 14s ease-in-out infinite 2s",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-24 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(18,75%,55%,0.3)] bg-[hsl(18,75%,55%,0.08)] backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Potenciado por IA ·{" "}
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
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Reservas por
              <span className="relative block mt-3">
                <span
                  key={currentWord}
                  className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-fade-in"
                >
                  {rotatingWords[currentWord]}
                </span>
              </span>
              <span className="block mt-1 text-[hsl(0,0%,60%)] text-4xl md:text-5xl lg:text-6xl font-medium">
                100% automáticas
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-[hsl(0,0%,55%)] max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Un asistente de IA que atiende a tus clientes por WhatsApp, teléfono y web.
            Gestiona reservas, confirma disponibilidad y envía recordatorios — todo sin intervención humana.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-[450ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              size="lg"
              className="text-lg px-10 h-14 bg-gradient-primary hover:opacity-90 shadow-medium text-white"
              onClick={onDemoClick}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Pruébalo ahora
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 h-14 text-[hsl(0,0%,70%)] hover:text-white hover:bg-[hsl(0,0%,100%,0.05)]"
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Descubre más →
            </Button>
          </div>

          {/* Floating stat cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 max-w-3xl mx-auto transition-all duration-700 delay-[600ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="group relative p-5 rounded-2xl border border-[hsl(0,0%,100%,0.06)] bg-[hsl(0,0%,100%,0.03)] backdrop-blur-md hover:border-[hsl(18,75%,55%,0.3)] hover:bg-[hsl(18,75%,55%,0.06)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[hsl(18,75%,55%,0.1)] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
              <p className="text-sm text-[hsl(0,0%,50%)]">Tasa de automatización de reservas</p>
            </div>

            <div className="group relative p-5 rounded-2xl border border-[hsl(0,0%,100%,0.06)] bg-[hsl(0,0%,100%,0.03)] backdrop-blur-md hover:border-[hsl(18,75%,55%,0.3)] hover:bg-[hsl(18,75%,55%,0.06)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[hsl(18,75%,55%,0.1)] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-sm text-[hsl(0,0%,50%)]">Atención continua sin descanso</p>
            </div>

            <div className="group relative p-5 rounded-2xl border border-[hsl(0,0%,100%,0.06)] bg-[hsl(0,0%,100%,0.03)] backdrop-blur-md hover:border-[hsl(18,75%,55%,0.3)] hover:bg-[hsl(18,75%,55%,0.06)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[hsl(18,75%,55%,0.1)] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-white">+500</span>
              </div>
              <p className="text-sm text-[hsl(0,0%,50%)]">Restaurantes activos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[hsl(0,0%,100%,0.15)] flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
