import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  const copy = {
    es: {
      titleLine1: "¿Tienes alguna pregunta?",
      titleLine2: "Estamos aquí para ayudarte",
      subtitle: "Contacta con nosotros directamente y te responderemos lo antes posible.",
      emailTitle: "Escríbenos por email",
      emailBody: "Envíanos un correo y te responderemos lo antes posible",
      phoneTitle: "Llámanos directamente",
      phoneBody: "Habla con nuestro equipo por teléfono",
      officeTitle: "Oficina",
      officeLocation: "Vic, Barcelona",
      officePrefix: "Producto de",
      scheduleTitle: "Horario de atención",
      scheduleLine1: "Lunes - Viernes: 9:00 - 18:00",
      scheduleLine2: "Sábados: 10:00 - 14:00",
    },
    en: {
      titleLine1: "Any questions?",
      titleLine2: "We’re here to help",
      subtitle: "Get in touch with us and we’ll reply as soon as possible.",
      emailTitle: "Write to us by email",
      emailBody: "Send us an email and we’ll get back to you shortly",
      phoneTitle: "Call us directly",
      phoneBody: "Speak with our team by phone",
      officeTitle: "Office",
      officeLocation: "Vic, Barcelona",
      officePrefix: "A product by",
      scheduleTitle: "Support hours",
      scheduleLine1: "Monday - Friday: 9:00 - 18:00",
      scheduleLine2: "Saturday: 10:00 - 14:00",
    },
    ca: {
      titleLine1: "Tens algun dubte?",
      titleLine2: "Som aquí per ajudar-te",
      subtitle: "Contacta amb nosaltres directament i et respondrem tan aviat com puguem.",
      emailTitle: "Escriu-nos per correu",
      emailBody: "Envia’ns un correu i et respondrem al més aviat possible",
      phoneTitle: "Truca’ns directament",
      phoneBody: "Parla amb el nostre equip per telèfon",
      officeTitle: "Oficina",
      officeLocation: "Vic, Barcelona",
      officePrefix: "Producte de",
      scheduleTitle: "Horari d’atenció",
      scheduleLine1: "Dilluns - Divendres: 9:00 - 18:00",
      scheduleLine2: "Dissabtes: 10:00 - 14:00",
    },
    it: {
      titleLine1: "Hai domande?",
      titleLine2: "Siamo qui per aiutarti",
      subtitle: "Contattaci direttamente e ti risponderemo il prima possibile.",
      emailTitle: "Scrivici via email",
      emailBody: "Inviaci una mail e ti risponderemo al più presto",
      phoneTitle: "Chiamaci direttamente",
      phoneBody: "Parla con il nostro team al telefono",
      officeTitle: "Ufficio",
      officeLocation: "Vic, Barcellona",
      officePrefix: "Prodotto di",
      scheduleTitle: "Orari di supporto",
      scheduleLine1: "Lunedì - Venerdì: 9:00 - 18:00",
      scheduleLine2: "Sabato: 10:00 - 14:00",
    },
  } as const;

  const t = copy[language];

  return (
    <section className="py-16 sm:py-24 px-4 bg-background" id="contact">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.titleLine1}
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              {t.titleLine2}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-6">
            <a href="mailto:info@ndxai.eu" className="block">
              <Card className="p-8 border-border/50 hover:shadow-medium transition-all hover:border-primary/50 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.emailTitle}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t.emailBody}
                </p>
                <span className="text-primary font-medium">info@ndxai.eu</span>
              </Card>
            </a>

            <a href="tel:+34651590000" className="block">
              <Card className="p-8 border-border/50 hover:shadow-medium transition-all hover:border-primary/50 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.phoneTitle}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t.phoneBody}
                </p>
                <span className="text-primary font-medium">+34 651 590 000</span>
              </Card>
            </a>
          </div>

          {/* Extra info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 border-border/50">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{t.officeTitle}</h4>
                  <p className="text-sm text-muted-foreground">{t.officeLocation}</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    {t.officePrefix}{" "}
                    <a
                      href="https://ndxai.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Neural Dynamics AI (NDXai)
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{t.scheduleTitle}</h4>
                  <div className="space-y-0.5 text-sm text-muted-foreground">
                    <p>{t.scheduleLine1}</p>
                    <p>{t.scheduleLine2}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
