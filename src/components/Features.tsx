import { Bot, LayoutDashboard, MessageSquare, Phone, Calendar, Users, BarChart3, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import whatsappImage from "@/assets/chat-real.png";
import dashboardImage from "@/assets/whatsapp-reserva.png";
import tableLayoutImage from "@/assets/table-layout.png";
import statsImage from "@/assets/stats-dashboard.png";
import mediaImage from "@/assets/media-management.png";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage = ({ src, alt, className }: ZoomableImageProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <button type="button" className="focus:outline-none">
        <img src={src} alt={alt} className={`cursor-zoom-in ${className ?? ""}`} />
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
      <img src={src} alt={alt} className="w-full h-auto rounded-2xl shadow-medium" />
    </DialogContent>
  </Dialog>
);

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Bot Inteligente",
      description: "IA conversacional que entiende y procesa reservas naturalmente"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
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

        {/* WhatsApp Bot */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Bot WhatsApp</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold pt-2">
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
            <ZoomableImage
              src={whatsappImage}
              alt="Sistema de gestión de reservas - Dashboard de horarios"
              className="rounded-2xl shadow-soft lg:hidden"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-3"></div>
            <ZoomableImage
              src={whatsappImage}
              alt="Sistema de gestión de reservas - Dashboard de horarios"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hidden lg:block"
            />
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 pt-20 border-t border-border/50">
          {/* En móvil va primero el texto, en desktop se invierte con lg:order-* */}
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
          </div>
          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform -rotate-3"></div>
            <ZoomableImage
              src={dashboardImage}
              alt="Conversación de WhatsApp - Reserva de restaurante"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Table Layout Management */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Gestión de Mesas</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Diseña el layout perfecto para tu restaurante
            </h3>
            <p className="text-lg text-muted-foreground">
              Crea y personaliza la distribución de mesas de tu restaurante con nuestro editor visual intuitivo. Arrastra y coloca mesas donde quieras, ajusta capacidades y visualiza la ocupación en tiempo real.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Editor Visual</h4>
                <p className="text-sm text-muted-foreground">Arrastra y configura mesas con facilidad</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Tiempo Real</h4>
                <p className="text-sm text-muted-foreground">Monitorea la ocupación al instante</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <LayoutDashboard className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Flexible</h4>
                <p className="text-sm text-muted-foreground">Ajusta capacidades según necesidad</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Inteligente</h4>
                <p className="text-sm text-muted-foreground">Sugerencias automáticas de distribución</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-6"></div>
            <ZoomableImage
              src={tableLayoutImage}
              alt="Disposición de mesas del restaurante"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 pt-20 border-t border-border/50">
          {/* En móvil va primero el texto, en desktop se invierte con lg:order-* */}
          <div className="space-y-6 lg:order-last">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Estadísticas</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Analítica avanzada de tu restaurante
            </h3>
            <p className="text-lg text-muted-foreground">
              Conoce a fondo el comportamiento de tus clientes con métricas detalladas. Toma decisiones basadas en datos reales para optimizar tu servicio.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Duración Media</h4>
                <p className="text-sm text-muted-foreground">Tiempo promedio de cada reserva</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Retraso Medio</h4>
                <p className="text-sm text-muted-foreground">Puntualidad de tus clientes</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Top 10 Clientes</h4>
                <p className="text-sm text-muted-foreground">Tus clientes más frecuentes</p>
              </div>
            </div>
          </div>
          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform -rotate-3"></div>
            <ZoomableImage
              src={statsImage}
              alt="Dashboard de estadísticas de reservas"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Media Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Image className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Media</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Comparte tu contenido con los clientes
            </h3>
            <p className="text-lg text-muted-foreground">
              Sube y gestiona todo el contenido visual de tu restaurante: menú del día, carta, eventos especiales y promociones. Tus clientes siempre tendrán la información actualizada y 
              podran recibirla por whatsapp.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Menú del día actualizable al instante</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Carta digital con fotos y precios</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Promoción de eventos y ofertas especiales</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-3"></div>
            <ZoomableImage
              src={mediaImage}
              alt="Gestión de contenido multimedia del restaurante"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
