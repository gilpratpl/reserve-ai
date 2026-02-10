import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-background" id="contact">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Tienes alguna pregunta?
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Estamos aquí para ayudarte
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Contacta con nosotros directamente y te responderemos lo antes posible.
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
                <h3 className="text-xl font-bold mb-2">Escríbenos por email</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Envíanos un correo y te responderemos lo antes posible
                </p>
                <span className="text-primary font-medium">info@ndxai.eu</span>
              </Card>
            </a>

            <a href="tel:+34651590000" className="block">
              <Card className="p-8 border-border/50 hover:shadow-medium transition-all hover:border-primary/50 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Llámanos directamente</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Habla con nuestro equipo por teléfono
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
                  <h4 className="font-semibold mb-1">Oficina</h4>
                  <p className="text-sm text-muted-foreground">Vic, Barcelona</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    Producto de{" "}
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
                  <h4 className="font-semibold mb-1">Horario de atención</h4>
                  <div className="space-y-0.5 text-sm text-muted-foreground">
                    <p>Lunes - Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
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
