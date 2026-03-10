import { Smartphone, Settings, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const { language } = useLanguage();

  const copy = {
    es: {
      titleLine1: "Te lo implementamos con",
      titleLine2: "nuestros expertos",
      subtitle: "Nuestro sistema se integra sin complicaciones.",
      steps: [
        {
          title: "1. Crea tu cuenta",
          description:
            "Contacta con nosotros para crear tu cuenta.",
        },
        {
          title: "2. Personaliza tu bot",
          description:
            "Configura las mesas, horarios y mensajes. El bot aprende las características específicas de tu restaurante.",
        },
        {
          title: "3. Activa y automatiza",
          description:
            "Tu bot empieza a recibir reservas inmediatamente. Funciona 24/7 sin necesidad de supervisión.",
        },
        {
          title: "4. Gestiona y optimiza",
          description:
            "Usa el dashboard para visualizar reservas, optimizar disponibilidad y obtener insights de tu negocio.",
        },
      ],
    },
    en: {
      titleLine1: "We implement it with",
      titleLine2: "our experts",
      subtitle: "Our system integrates without friction.",
      steps: [
        {
          title: "1. Create your account",
          description:
            "Contact us to create your account.",
        },
        {
          title: "2. Customize your bot",
          description:
            "Configure tables, opening hours and messages. The bot learns your restaurant’s specific rules.",
        },
        {
          title: "3. Activate and automate",
          description:
            "Your bot starts receiving reservations immediately. It works 24/7 with no supervision needed.",
        },
        {
          title: "4. Manage and optimize",
          description:
            "Use the dashboard to visualize bookings, optimize availability and get business insights.",
        },
      ],
    },
    ca: {
      titleLine1: "T'ho implementem amb",
      titleLine2: "els nostres experts",
      subtitle:
        "El nostre sistema s’integra sense complicacions.",
      steps: [
        {
          title: "1. Creació del teu compte	",
          description:
            "Contacta amb nosaltres per crear el teu compte.",
        },
        {
          title: "2. Personalitza el bot",
          description:
            "Configura taules, horaris i missatges. El bot aprèn les característiques específiques del teu restaurant.",
        },
        {
          title: "3. Activa i automatitza",
          description:
            "El bot comença a rebre reserves immediatament. Funciona 24/7 sense necessitat de supervisió.",
        },
        {
          title: "4. Gestiona i optimitza",
          description:
            "Utilitza el dashboard per visualitzar reserves, optimitzar disponibilitat i obtenir insights del negoci.",
        },
      ],
    },
    it: {
      titleLine1: "Lo implementiamo con",
      titleLine2: "i nostri esperti",
      subtitle:
        "Il sistema si integra senza complicazioni.",
      steps: [
        {
          title: "1. Crea il tuo account",
          description:
            "Contacta con noi per creare il tuo account.",
        },
        {
          title: "2. Personalizza il bot",
          description:
            "Configura tavoli, orari e messaggi. Il bot impara le regole specifiche del tuo ristorante.",
        },
        {
          title: "3. Attiva e automatizza",
          description:
            "Il bot inizia subito a ricevere prenotazioni. Funziona 24/7 senza supervisione.",
        },
        {
          title: "4. Gestisci e ottimizza",
          description:
            "Usa il dashboard per visualizzare le prenotazioni, ottimizzare la disponibilità e ottenere insight sul business.",
        },
      ],
    },
  } as const;

  const t = copy[language];

  const steps = [
    { icon: Smartphone, title: t.steps[0].title, description: t.steps[0].description },
    { icon: Settings, title: t.steps[1].title, description: t.steps[1].description },
    { icon: Zap, title: t.steps[2].title, description: t.steps[2].description },
    { icon: TrendingUp, title: t.steps[3].title, description: t.steps[3].description },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            {t.titleLine1}
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              {t.titleLine2}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative space-y-4 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
