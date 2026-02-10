import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

interface PricingProps {
  onDemoClick?: () => void;
}

const Pricing = ({ onDemoClick }: PricingProps) => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfecto para comenzar",
      features: [
        "Bot WhatsApp incluido",
        "Hasta 100 reservas/mes",
        "Dashboard básico",
        "5 mesas configurables",
        "Soporte por email",
        "Confirmaciones automáticas"
      ],
      cta: "-",
      popular: false
    },
    {
      name: "Professional",
      price: "99",
      description: "Para restaurantes establecidos",
      features: [
        "Bot WhatsApp + Teléfono",
        "Hasta 500 reservas/mes",
        "Dashboard completo",
        "Mesas ilimitadas",
        "Soporte prioritario 24/7",
        "Confirmaciones automáticas",
        "Recordatorios inteligentes",
        "Reportes avanzados",
        "Multi-idioma"
      ],
      cta: "Agendar Demo",
      popular: true
    },
    {
      name: "Enterprise",
      price: "299",
      description: "Para cadenas de restaurantes",
      features: [
        "Todo en Professional",
        "Reservas ilimitadas",
        "Multi-restaurante",
        "API personalizada",
        "Integración con POS",
        "Gestor de cuenta dedicado",
        "Personalización completa",
        "SLA garantizado",
        "Training del equipo"
      ],
      cta: "Agendar Demo",
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
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${plan.popular
                ? 'border-2 border-primary shadow-medium scale-105 lg:scale-110'
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

              <div className="space-y-6">
                {/* Plan name */}
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>

                {plan.cta === "Agendar Demo" ? (
                  <a href="https://frontend-restaurant-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      className={`w-full h-12 ${plan.popular
                        ? 'bg-gradient-primary hover:opacity-90 shadow-soft'
                        : ''
                        }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      Probar Demo
                    </Button>
                  </a>
                ) : (
                  <Button
                    className="w-full h-12"
                    variant="outline"
                    size="lg"
                    disabled
                  >
                    Contactar
                  </Button>
                )}

                {/* Features */}
                <ul className="space-y-3 pt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
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
