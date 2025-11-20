import { Smartphone, Settings, Zap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Configura tu cuenta",
      description: "Crea tu cuenta en menos de 5 minutos. Conecta tu número de WhatsApp Business y configura el horario de tu restaurante."
    },
    {
      icon: Settings,
      title: "2. Personaliza tu bot",
      description: "Configura las mesas, horarios y mensajes. El bot aprende las características específicas de tu restaurante."
    },
    {
      icon: Zap,
      title: "3. Activa y automatiza",
      description: "Tu bot empieza a recibir reservas inmediatamente. Funciona 24/7 sin necesidad de supervisión."
    },
    {
      icon: TrendingUp,
      title: "4. Gestiona y optimiza",
      description: "Usa el dashboard para visualizar reservas, optimizar disponibilidad y obtener insights de tu negocio."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Implementación en
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              menos de 15 minutos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No necesitas conocimientos técnicos. Nuestro sistema se integra sin complicaciones.
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
