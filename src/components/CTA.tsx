import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface CTAProps {
  onDemoClick?: () => void;
}

const CTA = ({ onDemoClick }: CTAProps) => {
  const { language } = useLanguage();

  const copy = {
    es: {
      badge: "Oferta de Lanzamiento",
      title: "Empieza a automatizar tus reservas hoy mismo",
      body: "Únete a más de 50 restaurantes que ya están ahorrando tiempo y aumentando sus reservas con nuestra solución de IA.",
      cta: "Pruébalo ahora",
      footnote: "Sin tarjeta de crédito • Cancelación gratuita • Soporte 24/7",
    },
    en: {
      badge: "Launch offer",
      title: "Start automating your bookings today",
      body: "Join more than 50 restaurants already saving time and increasing reservations with our AI solution.",
      cta: "Try it now",
      footnote: "No credit card • Free cancellation • 24/7 support",
    },
    ca: {
      badge: "Oferta de Llançament",
      title: "Comença a automatitzar les teves reserves avui mateix",
      body: "Uneix-te a més de 50 restaurants que ja estalvien temps i augmenten les reserves amb la nostra solució d’IA.",
      cta: "Prova-ho ara",
      footnote: "Sense targeta de crèdit • Cancel·lació gratuïta • Suport 24/7",
    },
    it: {
      badge: "Offerta di lancio",
      title: "Inizia ad automatizzare le prenotazioni oggi stesso",
      body: "Unisciti a oltre 50 ristoranti che stanno già risparmiando tempo e aumentando le prenotazioni con la nostra soluzione IA.",
      cta: "Provalo ora",
      footnote: "Nessuna carta di credito • Annullamento gratuito • Supporto 24/7",
    },
  } as const;

  const t = copy[language];

  return (
    <section className="py-16 px-4 sm:py-20 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 sm:p-10 md:p-16 shadow-medium">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                {t.title}
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                {t.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 bg-transparent border-2 border-white text-white hover:bg-white/10"
                  onClick={onDemoClick}
                >
                  {t.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-white/80">
                {t.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
