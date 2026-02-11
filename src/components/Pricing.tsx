import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

interface PricingProps {
  onDemoClick?: () => void;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

const Pricing = ({ onDemoClick }: PricingProps) => {
  const plans = [
    {
      name: "Gratuito",
      price: "0",
      description: "Para descubrir la plataforma",
      features: [
        { text: "Dashboard básico", included: true },
        { text: "Hasta 20 reservas/mes", included: true },
        { text: "3 mesas configurables", included: true },
        { text: "Soporte por email", included: true },
        { text: "Bot WhatsApp conversacional", included: false },
        { text: "Asistente telefónico", included: false },
        { text: "Recordatorios automáticos", included: false },
      ] as PlanFeature[],
      cta: "Empezar Gratis",
      popular: false
    },
    {
      name: "Prueba 14 días",
      price: "0",
      description: "Prueba todo durante 2 semanas",
      features: [
        { text: "Bot WhatsApp", included: true },
        { text: "Hasta 100 reservas", included: true },
        { text: "Dashboard completo", included: true },
        { text: "5 mesas configurables", included: true },
        { text: "Confirmaciones automáticas", included: true },
        { text: "Recordatorios inteligentes", included: true },
        { text: "Sin compromiso, sin tarjeta", included: true },
        { text: "Asistente telefónico", included: false },
      ] as PlanFeature[],
      cta: "Probar Gratis",
      popular: false
    },
    {
      name: "Professional",
      price: "65",
      description: "Para restaurantes establecidos",
      features: [
        { text: "Bot WhatsApp", included: true },
        { text: "Hasta 500 reservas/mes", included: true },
        { text: "Dashboard completo", included: true },
        { text: "Mesas ilimitadas", included: true },
        { text: "Soporte prioritario 24/7", included: true },
        { text: "Confirmaciones automáticas", included: true },
        { text: "Recordatorios inteligentes", included: true },
        { text: "Reportes avanzados", included: true },
        { text: "Multi-idioma", included: true },
        { text: "Asistente telefónico", included: false },
      ] as PlanFeature[],
      cta: "Ver Demo",
      popular: true
    },
    {
      name: "Enterprise",
      price: "150",
      description: "Para cadenas de restaurantes",
      features: [
        { text: "Bot WhatsApp", included: true },
        { text: "Asistente telefónico", included: true },
        { text: "Reservas ilimitadas", included: true },
        { text: "Multi-restaurante", included: true },
        { text: "Dashboard completo", included: true },
        { text: "Mesas ilimitadas", included: true },
        { text: "Soporte prioritario 24/7", included: true },
        { text: "Confirmaciones automáticas", included: true },
        { text: "Recordatorios inteligentes", included: true },
        { text: "Reportes avanzados", included: true },
        { text: "Multi-idioma", included: true },
      ] as PlanFeature[],
      cta: "Ver Demo",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-soft" id="pricing">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Precios simples y transparentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige el plan perfecto para tu restaurante. Sin costes ocultos, cancela cuando quieras.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 ${plan.popular
                ? 'border-2 border-primary shadow-medium scale-105'
                : 'border-border/50'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full flex items-center gap-1 shadow-medium">
                    <Sparkles className="w-4 h-4" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground text-sm">/mes</span>
                </div>

                <Button
                  className={`w-full h-11 ${plan.popular
                    ? 'bg-gradient-primary hover:opacity-90 shadow-soft'
                    : ''
                    }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={onDemoClick}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-2.5 pt-3">
                  {(plan.features as PlanFeature[]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/60 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground mt-12">
          Todos los planes incluyen 14 días de prueba gratuita. No se requiere tarjeta de crédito.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
