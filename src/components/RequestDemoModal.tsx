import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { CheckCircle2 } from "lucide-react";

interface RequestDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const copy = {
  es: {
    title: "Solicita una demo",
    description: "Cuéntanos sobre tu restaurante y te contactamos en menos de 24h.",
    name: "Nombre",
    restaurant: "Nombre del restaurante",
    email: "Email",
    phone: "Teléfono (opcional)",
    message: "¿Por qué te interesa Reserbot?",
    submit: "Enviar solicitud",
    submitting: "Enviando...",
    success: "¡Gracias! Ahora puedes explorar la demo.",
  },
  en: {
    title: "Request a demo",
    description: "Tell us about your restaurant and we'll reach out within 24h.",
    name: "Name",
    restaurant: "Restaurant name",
    email: "Email",
    phone: "Phone (optional)",
    message: "Why are you interested in Reserbot?",
    submit: "Send request",
    submitting: "Sending...",
    success: "Thanks! You can now explore the demo.",
  },
  ca: {
    title: "Sol·licita una demo",
    description: "Explica'ns el teu restaurant i et contactem en menys de 24h.",
    name: "Nom",
    restaurant: "Nom del restaurant",
    email: "Correu electrònic",
    phone: "Telèfon (opcional)",
    message: "Per què t'interessa Reserbot?",
    submit: "Enviar sol·licitud",
    submitting: "Enviant...",
    success: "Gràcies! Ara pots explorar la demo.",
  },
  it: {
    title: "Richiedi una demo",
    description: "Raccontaci del tuo ristorante e ti contatteremo entro 24h.",
    name: "Nome",
    restaurant: "Nome del ristorante",
    email: "Email",
    phone: "Telefono (opzionale)",
    message: "Perché sei interessato a Reserbot?",
    submit: "Invia richiesta",
    submitting: "Invio in corso...",
    success: "Grazie! Ora puoi esplorare la demo.",
  },
} as const;

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

const RequestDemoModal = ({ open, onOpenChange, onSuccess }: RequestDemoModalProps) => {
  const { language } = useLanguage();
  const t = copy[language];
  const [state, handleSubmit] = useForm("xkoaewva");

  // First submission: show success briefly, then open credentials modal
  useEffect(() => {
    if (!state.succeeded) return;
    const timer = setTimeout(() => {
      onOpenChange(false);
      onSuccess();
    }, 1800);
    return () => clearTimeout(timer);
  }, [state.succeeded]);

  // Re-open after already submitted: skip the form and go straight to credentials
  useEffect(() => {
    if (!open || !state.succeeded) return;
    onOpenChange(false);
    onSuccess();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.title}</DialogTitle>
          <DialogDescription className="text-base">{t.description}</DialogDescription>
        </DialogHeader>

        {state.succeeded ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="w-14 h-14 text-primary" />
            <p className="text-sm text-muted-foreground">{t.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder={t.name}
                required
              />
              <ValidationError field="name" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <div>
              <input
                className={inputClass}
                type="text"
                name="restaurant"
                placeholder={t.restaurant}
                required
              />
              <ValidationError field="restaurant" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <div>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder={t.email}
                required
              />
              <ValidationError field="email" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <div>
              <input
                className={inputClass}
                type="tel"
                name="phone"
                placeholder={t.phone}
              />
            </div>

            <div>
              <textarea
                className={`${inputClass} min-h-[90px] resize-none`}
                name="message"
                placeholder={t.message}
              />
              <ValidationError field="message" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-primary hover:opacity-90 h-11 text-base shadow-soft"
            >
              {state.submitting ? t.submitting : t.submit}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoModal;
