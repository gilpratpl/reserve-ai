import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PricingProps {
  onDemoClick?: () => void;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

const Pricing = ({ onDemoClick }: PricingProps) => {
  const { language } = useLanguage();

  const copy = {
    es: {
      title: "Precios simples y transparentes",
      subtitle:
        "Elige el plan perfecto para tu restaurante. Sin costes ocultos, cancela cuando quieras.",
      perMonth: "/mes",
      popularTag: "Más Popular",
      plans: [
        {
          name: "Gratuito",
          description: "Para descubrir la plataforma",
          cta: "Empezar gratis",
          features: [
            "Dashboard básico",
            "Hasta 20 reservas/mes",
            "3 mesas configurables",
            "Soporte por email",
            "Bot WhatsApp conversacional",
            "Asistente telefónico",
            "Recordatorios automáticos",
          ],
        },
        {
          name: "Prueba 14 días",
          description: "Prueba todo durante 2 semanas",
          cta: "Probar gratis",
          features: [
            "Bot WhatsApp",
            "Hasta 100 reservas",
            "Dashboard completo",
            "5 mesas configurables",
            "Confirmaciones automáticas",
            "Recordatorios inteligentes",
            "Sin compromiso, sin tarjeta",
            "Asistente telefónico",
          ],
        },
        {
          name: "Professional",
          description: "Para restaurantes establecidos",
          cta: "Ver demo",
          features: [
            "Bot WhatsApp",
            "Hasta 500 reservas/mes",
            "Dashboard completo",
            "Mesas ilimitadas",
            "Soporte prioritario 24/7",
            "Confirmaciones automáticas",
            "Recordatorios inteligentes",
            "Reportes avanzados",
            "Multi-idioma",
            "Asistente telefónico",
          ],
        },
        {
          name: "Enterprise",
          description: "Para cadenas de restaurantes",
          cta: "Ver demo",
          features: [
            "Bot WhatsApp",
            "Asistente telefónico",
            "Reservas ilimitadas",
            "Multi-restaurante",
            "Dashboard completo",
            "Mesas ilimitadas",
            "Soporte prioritario 24/7",
            "Confirmaciones automáticas",
            "Recordatorios inteligentes",
            "Reportes avanzados",
            "Multi-idioma",
          ],
        },
      ],
    },
    en: {
      title: "Simple, transparent pricing",
      subtitle:
        "Choose the perfect plan for your restaurant. No hidden fees, cancel anytime.",
      perMonth: "/month",
      popularTag: "Most popular",
      plans: [
        {
          name: "Free",
          description: "To discover the platform",
          cta: "Start for free",
          features: [
            "Basic dashboard",
            "Up to 20 bookings / month",
            "3 configurable tables",
            "Email support",
            "Conversational WhatsApp bot",
            "Phone assistant",
            "Automatic reminders",
          ],
        },
        {
          name: "14‑day trial",
          description: "Test everything for 2 weeks",
          cta: "Try for free",
          features: [
            "WhatsApp bot",
            "Up to 100 bookings",
            "Full dashboard",
            "5 configurable tables",
            "Automatic confirmations",
            "Smart reminders",
            "No commitment, no card",
            "Phone assistant",
          ],
        },
        {
          name: "Professional",
          description: "For established restaurants",
          cta: "View demo",
          features: [
            "WhatsApp bot",
            "Up to 500 bookings / month",
            "Full dashboard",
            "Unlimited tables",
            "Priority support 24/7",
            "Automatic confirmations",
            "Smart reminders",
            "Advanced reports",
            "Multi‑language",
            "Phone assistant",
          ],
        },
        {
          name: "Enterprise",
          description: "For restaurant chains",
          cta: "View demo",
          features: [
            "WhatsApp bot",
            "Phone assistant",
            "Unlimited bookings",
            "Multi‑restaurant",
            "Full dashboard",
            "Unlimited tables",
            "Priority support 24/7",
            "Automatic confirmations",
            "Smart reminders",
            "Advanced reports",
            "Multi‑language",
          ],
        },
      ],
    },
    ca: {
      title: "Preus simples i transparents",
      subtitle:
        "Tria el pla perfecte per al teu restaurant. Sense costos ocults, cancel·la quan vulguis.",
      perMonth: "/mes",
      popularTag: "Més popular",
      plans: [
        {
          name: "Gratuït",
          description: "Per descobrir la plataforma",
          cta: "Començar gratis",
          features: [
            "Dashboard bàsic",
            "Fins a 20 reserves/mes",
            "3 taules configurables",
            "Suport per correu",
            "Bot de WhatsApp conversacional",
            "Assistent telefònic",
            "Recordatoris automàtics",
          ],
        },
        {
          name: "Prova 14 dies",
          description: "Prova-ho tot durant 2 setmanes",
          cta: "Provar gratis",
          features: [
            "Bot WhatsApp",
            "Fins a 100 reserves",
            "Dashboard complet",
            "5 taules configurables",
            "Confirmacions automàtiques",
            "Recordatoris intel·ligents",
            "Sense compromís ni targeta",
            "Assistent telefònic",
          ],
        },
        {
          name: "Professional",
          description: "Per a restaurants consolidats",
          cta: "Veure demo",
          features: [
            "Bot WhatsApp",
            "Fins a 500 reserves/mes",
            "Dashboard complet",
            "Taules il·limitades",
            "Suport prioritari 24/7",
            "Confirmacions automàtiques",
            "Recordatoris intel·ligents",
            "Informes avançats",
            "Multiidioma",
            "Assistent telefònic",
          ],
        },
        {
          name: "Enterprise",
          description: "Per a cadenes de restaurants",
          cta: "Veure demo",
          features: [
            "Bot WhatsApp",
            "Assistent telefònic",
            "Reserves il·limitades",
            "Multi-restaurant",
            "Dashboard complet",
            "Taules il·limitades",
            "Suport prioritari 24/7",
            "Confirmacions automàtiques",
            "Recordatoris intel·ligents",
            "Informes avançats",
            "Multiidioma",
          ],
        },
      ],
    },
    it: {
      title: "Prezzi semplici e trasparenti",
      subtitle:
        "Scegli il piano perfetto per il tuo ristorante. Nessun costo nascosto, puoi annullare quando vuoi.",
      perMonth: "/mese",
      popularTag: "Più scelto",
      plans: [
        {
          name: "Gratuito",
          description: "Per scoprire la piattaforma",
          cta: "Inizia gratis",
          features: [
            "Dashboard di base",
            "Fino a 20 prenotazioni/mese",
            "3 tavoli configurabili",
            "Supporto via email",
            "Bot WhatsApp conversazionale",
            "Assistente telefonico",
            "Promemoria automatici",
          ],
        },
        {
          name: "Prova 14 giorni",
          description: "Prova tutto per 2 settimane",
          cta: "Prova gratis",
          features: [
            "Bot WhatsApp",
            "Fino a 100 prenotazioni",
            "Dashboard completo",
            "5 tavoli configurabili",
            "Conferme automatiche",
            "Promemoria intelligenti",
            "Nessun impegno, senza carta",
            "Assistente telefonico",
          ],
        },
        {
          name: "Professional",
          description: "Per ristoranti consolidati",
          cta: "Guarda la demo",
          features: [
            "Bot WhatsApp",
            "Fino a 500 prenotazioni/mese",
            "Dashboard completo",
            "Tavoli illimitati",
            "Supporto prioritario 24/7",
            "Conferme automatiche",
            "Promemoria intelligenti",
            "Report avanzati",
            "Multi‑lingua",
            "Assistente telefonico",
          ],
        },
        {
          name: "Enterprise",
          description: "Per catene di ristoranti",
          cta: "Guarda la demo",
          features: [
            "Bot WhatsApp",
            "Assistente telefonico",
            "Prenotazioni illimitate",
            "Multi‑ristorante",
            "Dashboard completo",
            "Tavoli illimitati",
            "Supporto prioritario 24/7",
            "Conferme automatiche",
            "Promemoria intelligenti",
            "Report avanzati",
            "Multi‑lingua",
          ],
        },
      ],
    },
  } as const;

  const t = copy[language];

  const plans = [
    {
      name: t.plans[0].name,
      price: "0",
      description: t.plans[0].description,
      features: [
        { text: t.plans[0].features[0], included: true },
        { text: t.plans[0].features[1], included: true },
        { text: t.plans[0].features[2], included: true },
        { text: t.plans[0].features[3], included: true },
        { text: t.plans[0].features[4], included: false },
        { text: t.plans[0].features[5], included: false },
        { text: t.plans[0].features[6], included: false },
      ] as PlanFeature[],
      cta: t.plans[0].cta,
      popular: false
    },
    {
      name: t.plans[1].name,
      price: "0",
      description: t.plans[1].description,
      features: [
        { text: t.plans[1].features[0], included: true },
        { text: t.plans[1].features[1], included: true },
        { text: t.plans[1].features[2], included: true },
        { text: t.plans[1].features[3], included: true },
        { text: t.plans[1].features[4], included: true },
        { text: t.plans[1].features[5], included: true },
        { text: t.plans[1].features[6], included: true },
        { text: t.plans[1].features[7], included: false },
      ] as PlanFeature[],
      cta: t.plans[1].cta,
      popular: false
    },
    {
      name: t.plans[2].name,
      price: "65",
      description: t.plans[2].description,
      features: [
        { text: t.plans[2].features[0], included: true },
        { text: t.plans[2].features[1], included: true },
        { text: t.plans[2].features[2], included: true },
        { text: t.plans[2].features[3], included: true },
        { text: t.plans[2].features[4], included: true },
        { text: t.plans[2].features[5], included: true },
        { text: t.plans[2].features[6], included: true },
        { text: t.plans[2].features[7], included: true },
        { text: t.plans[2].features[8], included: true },
        { text: t.plans[2].features[9], included: false },
      ] as PlanFeature[],
      cta: t.plans[2].cta,
      popular: true
    },
    {
      name: t.plans[3].name,
      price: "150",
      description: t.plans[3].description,
      features: [
        { text: t.plans[3].features[0], included: true },
        { text: t.plans[3].features[1], included: true },
        { text: t.plans[3].features[2], included: true },
        { text: t.plans[3].features[3], included: true },
        { text: t.plans[3].features[4], included: true },
        { text: t.plans[3].features[5], included: true },
        { text: t.plans[3].features[6], included: true },
        { text: t.plans[3].features[7], included: true },
        { text: t.plans[3].features[8], included: true },
        { text: t.plans[3].features[9], included: true },
        { text: t.plans[3].features[10], included: true },
      ] as PlanFeature[],
      cta: t.plans[3].cta,
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-soft" id="pricing">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
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
                    {t.popularTag}
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
                  <span className="text-muted-foreground text-sm">{t.perMonth}</span>
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

        {/* Bottom note 
        <p className="text-center text-muted-foreground mt-12">
          Todos los planes incluyen 14 días de prueba gratuita. No se requiere tarjeta de crédito.
        </p>
        */}
      </div>
    </section>
  );
};

export default Pricing;
