import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAProps {
  onDemoClick?: () => void;
}

const CTA = ({ onDemoClick }: CTAProps) => {
  return (
    <section className="py-24 px-4 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 shadow-medium">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Oferta de Lanzamiento</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Empieza a automatizar tus reservas hoy mismo
              </h2>

              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Únete a más de 500 restaurantes que ya están ahorrando tiempo y aumentando sus reservas con nuestra solución de IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 bg-transparent border-2 border-white text-white hover:bg-white/10"
                  onClick={onDemoClick}
                >
                  Pruebalo ahora
                </Button>
              </div>

              <p className="text-sm text-white/80">
                Sin tarjeta de crédito • Cancelación gratuita • Soporte 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
