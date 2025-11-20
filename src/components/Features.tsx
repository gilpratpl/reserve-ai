import { Bot, LayoutDashboard, MessageSquare, Phone, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import whatsappImage from "@/assets/whatsapp-bot.jpg";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Bot Inteligente",
      description: "IA conversacional que entiende y procesa reservas naturalmente"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & SMS",
      description: "Integración nativa con WhatsApp Business y mensajería"
    },
    {
      icon: Phone,
      title: "Llamadas Telefónicas",
      description: "Asistente de voz que gestiona reservas por teléfono"
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard Completo",
      description: "Panel de control para gestionar todas tus reservas"
    },
    {
      icon: Calendar,
      title: "Gestión de Mesas",
      description: "Visualiza y organiza la disposición de tu restaurante"
    },
    {
      icon: Users,
      title: "Multi-restaurante",
      description: "Gestiona múltiples locales desde una sola cuenta"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Todo lo que necesitas para
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              automatizar tus reservas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Solución completa con IA que combina bot conversacional y panel de gestión profesional
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp Bot */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Bot WhatsApp</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Reservas por chat en segundos
            </h3>
            <p className="text-lg text-muted-foreground">
              Tu bot de IA atiende a clientes en WhatsApp y teléfono las 24 horas del día. Entiende el lenguaje natural, confirma disponibilidad y crea reservas automáticamente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Respuestas instantáneas 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Confirmaciones automáticas por WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Recordatorios inteligentes</span>
              </li>
            </ul>
            <img 
              src={whatsappImage} 
              alt="WhatsApp Bot" 
              className="rounded-2xl shadow-soft lg:hidden"
            />
          </div>
          <div className="hidden lg:block">
            <img 
              src={whatsappImage} 
              alt="WhatsApp Bot" 
              className="rounded-2xl shadow-medium hover:shadow-lg transition-shadow"
            />
          </div>

          {/* Dashboard */}
          <div className="hidden lg:block lg:order-first">
            <img 
              src={dashboardImage} 
              alt="Dashboard" 
              className="rounded-2xl shadow-medium hover:shadow-lg transition-shadow"
            />
          </div>
          <div className="space-y-6 lg:order-last">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <LayoutDashboard className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Dashboard Web</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Control total de tu restaurante
            </h3>
            <p className="text-lg text-muted-foreground">
              Panel de gestión intuitivo donde visualizas todas las reservas, gestionas la disposición de mesas y controlas la ocupación en tiempo real.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Vista de calendario y layout de mesas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Gestión de disponibilidad en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Estadísticas y reportes detallados</span>
              </li>
            </ul>
            <img 
              src={dashboardImage} 
              alt="Dashboard" 
              className="rounded-2xl shadow-soft lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
