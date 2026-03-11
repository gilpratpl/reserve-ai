import { Bot, LayoutDashboard, MessageSquare, Phone, Calendar, Users, BarChart3, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { getFeatureImages } from "@/config/featureImages";

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
  const { language } = useLanguage();
  const images = getFeatureImages(language);

  const copy = {
    es: {
      sectionTitleLine1: "Todo lo que necesitas para",
      sectionTitleLine2: "automatizar tus reservas",
      sectionSubtitle:
        "Solución completa con IA que combina bot conversacional y panel de gestión profesional",
      cards: [
        {
          title: "Bot Inteligente",
          description: "IA conversacional que entiende y procesa reservas naturalmente",
        },
        {
          title: "WhatsApp",
          description: "Integración nativa con WhatsApp Business y mensajería",
        },
        {
          title: "Llamadas Telefónicas",
          description: "Asistente de voz que gestiona reservas por teléfono",
        },
        {
          title: "Dashboard Completo",
          description: "Panel de control para gestionar todas tus reservas",
        },
        {
          title: "Gestión de Mesas",
          description: "Visualiza y organiza la disposición de tu restaurante",
        },
        {
          title: "Multi-restaurante",
          description: "Gestiona múltiples locales desde una sola cuenta",
        },
      ],
      whatsappBadge: "Bot WhatsApp",
      whatsappTitle: "Reservas por chat en segundos",
      whatsappBody:
        "Tu bot de IA atiende a clientes en WhatsApp y teléfono las 24 horas del día. Entiende el lenguaje natural, confirma disponibilidad y crea reservas automáticamente.",
      whatsappPoint1: "Respuestas instantáneas 24/7",
      whatsappPoint2: "Confirmaciones automáticas por WhatsApp",
      whatsappPoint3: "Recordatorios inteligentes",
      dashboardBadge: "Dashboard Web",
      dashboardTitle: "Control total de tu restaurante",
      dashboardBody:
        "Panel de gestión intuitivo donde visualizas todas las reservas, gestionas la disposición de mesas y controlas la ocupación en tiempo real.",
      dashboardPoint1: "Vista de calendario y layout de mesas",
      dashboardPoint2: "Gestión de disponibilidad en tiempo real",
      dashboardPoint3: "Estadísticas y reportes detallados",
      tablesBadge: "Gestión de Mesas",
      tablesTitle: "Diseña el layout perfecto para tu restaurante",
      tablesBody:
        "Crea y personaliza la distribución de mesas de tu restaurante con nuestro editor visual intuitivo. Arrastra y coloca mesas donde quieras, ajusta capacidades y visualiza la ocupación en tiempo real.",
      tablesItem1Title: "Editor Visual",
      tablesItem1Body: "Arrastra y configura mesas con facilidad",
      tablesItem2Title: "Tiempo Real",
      tablesItem2Body: "Monitorea la ocupación al instante",
      tablesItem3Title: "Flexible",
      tablesItem3Body: "Ajusta capacidades según necesidad",
      tablesItem4Title: "Inteligente",
      tablesItem4Body: "Sugerencias automáticas de distribución",
      statsBadge: "Estadísticas",
      statsTitle: "Analítica avanzada de tu restaurante",
      statsBody:
        "Conoce a fondo el comportamiento de tus clientes con métricas detalladas. Toma decisiones basadas en datos reales para optimizar tu servicio.",
      statsCard1Title: "Duración Media",
      statsCard1Body: "Tiempo promedio de cada reserva",
      statsCard2Title: "Retraso Medio",
      statsCard2Body: "Puntualidad de tus clientes",
      statsCard3Title: "Top 10 Clientes",
      statsCard3Body: "Tus clientes más frecuentes",
      mediaBadge: "Media",
      mediaTitle: "Comparte tu contenido con los clientes",
      mediaBody:
        "Sube y gestiona todo el contenido visual de tu restaurante: menú del día, carta, eventos especiales y promociones. Tus clientes siempre tendrán la información actualizada y podrán recibirla por WhatsApp.",
      mediaPoint1: "Menú del día actualizable al instante",
      mediaPoint2: "Carta digital con fotos y precios",
      mediaPoint3: "Promoción de eventos y ofertas especiales",
    },
    en: {
      sectionTitleLine1: "Everything you need to",
      sectionTitleLine2: "automate your reservations",
      sectionSubtitle:
        "Complete AI solution that combines a conversational bot with a professional management dashboard",
      cards: [
        {
          title: "Smart Bot",
          description: "Conversational AI that understands and processes reservations naturally",
        },
        {
          title: "WhatsApp",
          description: "Native integration with WhatsApp Business and messaging",
        },
        {
          title: "Phone Calls",
          description: "Voice assistant that manages reservations by phone",
        },
        {
          title: "Full Dashboard",
          description: "Control panel to manage all your reservations",
        },
        {
          title: "Table Management",
          description: "Visualize and organize your restaurant layout",
        },
        {
          title: "Multi-restaurant",
          description: "Manage multiple locations from a single account",
        },
      ],
      whatsappBadge: "WhatsApp Bot",
      whatsappTitle: "Chat reservations in seconds",
      whatsappBody:
        "Your AI bot serves customers on WhatsApp and by phone 24/7. It understands natural language, checks availability and creates reservations automatically.",
      whatsappPoint1: "Instant responses 24/7",
      whatsappPoint2: "Automatic confirmations via WhatsApp",
      whatsappPoint3: "Smart reminders",
      dashboardBadge: "Web Dashboard",
      dashboardTitle: "Full control of your restaurant",
      dashboardBody:
        "Intuitive management panel where you can see all reservations, manage table layout and monitor occupancy in real time.",
      dashboardPoint1: "Calendar view and table layout",
      dashboardPoint2: "Real‑time availability management",
      dashboardPoint3: "Detailed statistics and reports",
      tablesBadge: "Table Management",
      tablesTitle: "Design the perfect layout for your restaurant",
      tablesBody:
        "Create and customize your restaurant table layout with our visual editor. Drag and drop tables, adjust capacities and see occupancy in real time.",
      tablesItem1Title: "Visual Editor",
      tablesItem1Body: "Drag and configure tables easily",
      tablesItem2Title: "Real Time",
      tablesItem2Body: "Monitor occupancy instantly",
      tablesItem3Title: "Flexible",
      tablesItem3Body: "Adjust capacities as needed",
      tablesItem4Title: "Smart",
      tablesItem4Body: "Automatic layout suggestions",
      statsBadge: "Analytics",
      statsTitle: "Advanced analytics for your restaurant",
      statsBody:
        "Understand your customers’ behaviour with detailed metrics. Make data‑driven decisions to optimize your service.",
      statsCard1Title: "Average Duration",
      statsCard1Body: "Average time per reservation",
      statsCard2Title: "Average Delay",
      statsCard2Body: "Customer punctuality",
      statsCard3Title: "Top 10 Customers",
      statsCard3Body: "Your most frequent guests",
      mediaBadge: "Media",
      mediaTitle: "Share your content with customers",
      mediaBody:
        "Upload and manage all your visual content: daily menu, full menu, special events and promotions. Your customers always have the latest info and can receive it on WhatsApp.",
      mediaPoint1: "Daily menu updated in seconds",
      mediaPoint2: "Digital menu with photos and prices",
      mediaPoint3: "Promotion of events and special offers",
    },
    ca: {
      sectionTitleLine1: "Tot el que necessites per",
      sectionTitleLine2: "automatitzar les teves reserves",
      sectionSubtitle:
        "Solució completa amb IA que combina un bot conversacional i un panell de gestió professional",
      cards: [
        {
          title: "Bot Intel·ligent",
          description: "IA conversacional que entén i processa reserves de manera natural",
        },
        {
          title: "WhatsApp",
          description: "Integració nativa amb WhatsApp Business i missatgeria",
        },
        {
          title: "Trucades telefòniques",
          description: "Assistent de veu que gestiona reserves per telèfon",
        },
        {
          title: "Dashboard complet",
          description: "Panell de control per gestionar totes les reserves",
        },
        {
          title: "Gestió de taules",
          description: "Visualitza i organitza la distribució del teu restaurant",
        },
        {
          title: "Multi-restaurant",
          description: "Gestiona diversos locals des d’un sol compte",
        },
      ],
      whatsappBadge: "Bot WhatsApp",
      whatsappTitle: "Reserves per xat en segons",
      whatsappBody:
        "El teu bot d’IA atén clients per WhatsApp i telèfon 24/7. Entén el llenguatge natural, comprova disponibilitat i crea reserves automàticament.",
      whatsappPoint1: "Respostes instantànies 24/7",
      whatsappPoint2: "Confirmacions automàtiques per WhatsApp",
      whatsappPoint3: "Recordatoris intel·ligents",
      dashboardBadge: "Dashboard web",
      dashboardTitle: "Control total del teu restaurant",
      dashboardBody:
        "Panell intuïtiu on visualitzes totes les reserves, gestiones la disposició de taules i controles l’ocupació en temps real.",
      dashboardPoint1: "Vista de calendari i layout de taules",
      dashboardPoint2: "Gestió de disponibilitat en temps real",
      dashboardPoint3: "Estadístiques i informes detallats",
      tablesBadge: "Gestió de taules",
      tablesTitle: "Dissenya el layout perfecte per al teu restaurant",
      tablesBody:
        "Crea i personalitza la distribució de taules amb l’editor visual. Arrossega i deixa anar, ajusta capacitats i visualitza l’ocupació en temps real.",
      tablesItem1Title: "Editor visual",
      tablesItem1Body: "Arrossega i configura taules amb facilitat",
      tablesItem2Title: "Temps real",
      tablesItem2Body: "Monitoritza l’ocupació a l’instant",
      tablesItem3Title: "Flexible",
      tablesItem3Body: "Ajusta capacitats segons la necessitat",
      tablesItem4Title: "Intel·ligent",
      tablesItem4Body: "Suggeriments automàtics de distribució",
      statsBadge: "Estadístiques",
      statsTitle: "Analítica avançada del teu restaurant",
      statsBody:
        "Coneix a fons el comportament dels clients amb mètriques detallades. Pren decisions basades en dades reals.",
      statsCard1Title: "Durada mitjana",
      statsCard1Body: "Temps mitjà de cada reserva",
      statsCard2Title: "Retard mitjà",
      statsCard2Body: "Puntualitat dels clients",
      statsCard3Title: "Top 10 clients",
      statsCard3Body: "Els teus clients més freqüents",
      mediaBadge: "Media",
      mediaTitle: "Comparteix el teu contingut amb els clients",
      mediaBody:
        "Puja i gestiona tot el contingut visual del teu restaurant: menú del dia, carta, esdeveniments especials i promocions. Els clients sempre tindran la informació actualitzada i la podran rebre per WhatsApp.",
      mediaPoint1: "Menú del dia actualitzable a l’instant",
      mediaPoint2: "Carta digital amb fotos i preus",
      mediaPoint3: "Promoció d’esdeveniments i ofertes especials",
    },
    it: {
      sectionTitleLine1: "Tutto ciò che ti serve per",
      sectionTitleLine2: "automatizzare le prenotazioni",
      sectionSubtitle:
        "Soluzione completa con IA che combina un bot conversazionale e un pannello di gestione professionale",
      cards: [
        {
          title: "Bot intelligente",
          description: "IA conversazionale che comprende e gestisce le prenotazioni in modo naturale",
        },
        {
          title: "WhatsApp",
          description: "Integrazione nativa con WhatsApp Business e messaggistica",
        },
        {
          title: "Chiamate telefoniche",
          description: "Assistente vocale che gestisce le prenotazioni per telefono",
        },
        {
          title: "Dashboard completo",
          description: "Pannello di controllo per gestire tutte le prenotazioni",
        },
        {
          title: "Gestione tavoli",
          description: "Visualizza e organizza la disposizione del ristorante",
        },
        {
          title: "Multi-ristorante",
          description: "Gestisci più locali da un unico account",
        },
      ],
      whatsappBadge: "Bot WhatsApp",
      whatsappTitle: "Prenotazioni in chat in pochi secondi",
      whatsappBody:
        "Il tuo bot IA serve i clienti su WhatsApp e telefono 24/7. Comprende il linguaggio naturale, controlla la disponibilità e crea prenotazioni automaticamente.",
      whatsappPoint1: "Risposte istantanee 24/7",
      whatsappPoint2: "Conferme automatiche via WhatsApp",
      whatsappPoint3: "Promemorie intelligenti",
      dashboardBadge: "Dashboard web",
      dashboardTitle: "Controllo totale del tuo ristorante",
      dashboardBody:
        "Pannello intuitivo in cui visualizzi tutte le prenotazioni, gestisci la disposizione dei tavoli e controlli l’occupazione in tempo reale.",
      dashboardPoint1: "Vista calendario e layout tavoli",
      dashboardPoint2: "Gestione disponibilità in tempo reale",
      dashboardPoint3: "Statistiche e report dettagliati",
      tablesBadge: "Gestione tavoli",
      tablesTitle: "Progetta il layout perfetto per il tuo ristorante",
      tablesBody:
        "Crea e personalizza la disposizione dei tavoli con l’editor visivo. Trascina i tavoli, regola le capienze e visualizza l’occupazione in tempo reale.",
      tablesItem1Title: "Editor visivo",
      tablesItem1Body: "Configura i tavoli con facilità",
      tablesItem2Title: "Tempo reale",
      tablesItem2Body: "Monitora l’occupazione all’istante",
      tablesItem3Title: "Flessibile",
      tablesItem3Body: "Adatta le capienze alle esigenze",
      tablesItem4Title: "Intelligente",
      tablesItem4Body: "Suggerimenti automatici di disposizione",
      statsBadge: "Statistiche",
      statsTitle: "Analitica avanzata del tuo ristorante",
      statsBody:
        "Conosci a fondo il comportamento dei clienti con metriche dettagliate. Prendi decisioni basate su dati reali.",
      statsCard1Title: "Durata media",
      statsCard1Body: "Tempo medio di ogni prenotazione",
      statsCard2Title: "Ritardo medio",
      statsCard2Body: "Puntualità dei clienti",
      statsCard3Title: "Top 10 clienti",
      statsCard3Body: "I tuoi clienti più frequenti",
      mediaBadge: "Media",
      mediaTitle: "Condividi i tuoi contenuti con i clienti",
      mediaBody:
        "Carica e gestisci tutti i contenuti visivi del ristorante: menù del giorno, carta, eventi speciali e promozioni. I clienti avranno sempre informazioni aggiornate e potranno riceverle su WhatsApp.",
      mediaPoint1: "Menù del giorno aggiornabile all’istante",
      mediaPoint2: "Menù digitale con foto e prezzi",
      mediaPoint3: "Promozione di eventi e offerte speciali",
    },
  } as const;

  const t = copy[language];

  const features = [
    {
      icon: Bot,
      title: t.cards[0].title,
      description: t.cards[0].description,
    },
    {
      icon: MessageSquare,
      title: t.cards[1].title,
      description: t.cards[1].description,
    },
    {
      icon: Phone,
      title: t.cards[2].title,
      description: t.cards[2].description,
    },
    {
      icon: LayoutDashboard,
      title: t.cards[3].title,
      description: t.cards[3].description,
    },
    {
      icon: Calendar,
      title: t.cards[4].title,
      description: t.cards[4].description,
    },
    {
      icon: Users,
      title: t.cards[5].title,
      description: t.cards[5].description,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal pb-2 mb-6">
            {t.sectionTitleLine1}
            <span className="block mt-2 text-primary pb-1">
              {t.sectionTitleLine2}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.sectionSubtitle}
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
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.whatsappBadge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold pt-2">
              {t.whatsappTitle}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t.whatsappBody}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.whatsappPoint1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.whatsappPoint2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.whatsappPoint3}</span>
              </li>
            </ul>
            <ZoomableImage
              src={images.chatReal}
              alt="Sistema de gestión de reservas - Dashboard de horarios"
              className="rounded-2xl shadow-soft lg:hidden"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-3"></div>
            <ZoomableImage
              src={images.chatReal}
              alt="Sistema de gestión de reservas - Dashboard de horarios"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hidden lg:block"
            />
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20 border-t border-border/50">
          {/* En móvil va primero el texto, en desktop se invierte con lg:order-* */}
          <div className="space-y-6 lg:order-last">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <LayoutDashboard className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t.dashboardBadge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t.dashboardTitle}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t.dashboardBody}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">{t.dashboardPoint1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">{t.dashboardPoint2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">{t.dashboardPoint3}</span>
              </li>
            </ul>
          </div>
          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform -rotate-3"></div>
            <ZoomableImage
              src={images.whatsappReserva}
              alt="Conversación de WhatsApp - Reserva de restaurante"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Table Layout Management */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.tablesBadge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t.tablesTitle}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t.tablesBody}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{t.tablesItem1Title}</h4>
                <p className="text-sm text-muted-foreground">{t.tablesItem1Body}</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{t.tablesItem2Title}</h4>
                <p className="text-sm text-muted-foreground">{t.tablesItem2Body}</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <LayoutDashboard className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{t.tablesItem3Title}</h4>
                <p className="text-sm text-muted-foreground">{t.tablesItem3Body}</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{t.tablesItem4Title}</h4>
                <p className="text-sm text-muted-foreground">{t.tablesItem4Body}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-6"></div>
            <ZoomableImage
              src={images.tableLayout}
              alt="Disposición de mesas del restaurante"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20 border-t border-border/50">
          {/* En móvil va primero el texto, en desktop se invierte con lg:order-* */}
          <div className="space-y-6 lg:order-last">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t.statsBadge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t.statsTitle}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t.statsBody}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">{t.statsCard1Title}</h4>
                <p className="text-sm text-muted-foreground">{t.statsCard1Body}</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">{t.statsCard2Title}</h4>
                <p className="text-sm text-muted-foreground">{t.statsCard2Body}</p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/5 border border-border/50 text-center">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">{t.statsCard3Title}</h4>
                <p className="text-sm text-muted-foreground">{t.statsCard3Body}</p>
              </div>
            </div>
          </div>
          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform -rotate-3"></div>
            <ZoomableImage
              src={images.stats}
              alt="Dashboard de estadísticas de reservas"
              className="relative rounded-2xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Media Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20 border-t border-border/50">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Image className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.mediaBadge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t.mediaTitle}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t.mediaBody}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.mediaPoint1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.mediaPoint2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{t.mediaPoint3}</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl transform rotate-3"></div>
            <ZoomableImage
              src={images.media}
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
