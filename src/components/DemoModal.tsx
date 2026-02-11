import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Lock, Copy } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DEMO_URL = "https://reserbot.ndxai.eu";
const DEMO_EMAIL = "test@ndxai.eu";
const DEMO_PASSWORD = "test123456";

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const { language } = useLanguage();

  const copy = {
    es: {
      title: "Prueba Reserbot en vivo",
      description:
        "Accede a nuestra plataforma de prueba y explora todas las funcionalidades. Puedes mirar y probar todo lo que quieras.",
      credentialsLabel: "Credenciales de acceso",
      userLabel: "Usuario",
      passwordLabel: "Contraseña",
      copyUserToast: "Usuario",
      copyPasswordToast: "Contraseña",
      cta: "Acceder a la demo",
      note: "Se abrirá en una nueva pestaña. Usa las credenciales de arriba para iniciar sesión.",
    },
    en: {
      title: "Try Reserbot live",
      description:
        "Access our demo environment and explore all the features. You can click around and test as much as you want.",
      credentialsLabel: "Access credentials",
      userLabel: "User",
      passwordLabel: "Password",
      copyUserToast: "User",
      copyPasswordToast: "Password",
      cta: "Open demo",
      note: "The demo will open in a new tab. Use the credentials above to log in.",
    },
    ca: {
      title: "Prova Reserbot en viu",
      description:
        "Accedeix al nostre entorn de prova i explora totes les funcionalitats. Pots mirar i provar tot el que vulguis.",
      credentialsLabel: "Credencials d’accés",
      userLabel: "Usuari",
      passwordLabel: "Contrasenya",
      copyUserToast: "Usuari",
      copyPasswordToast: "Contrasenya",
      cta: "Accedir a la demo",
      note: "S’obrirà en una pestanya nova. Utilitza les credencials de dalt per iniciar sessió.",
    },
    it: {
      title: "Prova Reserbot dal vivo",
      description:
        "Accedi al nostro ambiente demo ed esplora tutte le funzionalità. Puoi navigare e provare quanto vuoi.",
      credentialsLabel: "Credenziali di accesso",
      userLabel: "Utente",
      passwordLabel: "Password",
      copyUserToast: "Utente",
      copyPasswordToast: "Password",
      cta: "Accedi alla demo",
      note: "La demo si aprirà in una nuova scheda. Usa le credenziali qui sopra per effettuare il login.",
    },
  } as const;

  const t = copy[language];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    const messageByLang = {
      es: `${label} copiado al portapapeles`,
      en: `${label} copied to clipboard`,
      ca: `${label} copiat al porta-retalls`,
      it: `${label} copiato negli appunti`,
    } as const;
    toast.success(messageByLang[language]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.title}</DialogTitle>
          <DialogDescription className="text-base">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 space-y-3">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {t.credentialsLabel}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{t.userLabel}</p>
                <p className="font-mono text-sm font-medium truncate">{DEMO_EMAIL}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={() => copyToClipboard(DEMO_EMAIL, t.copyUserToast)}
              >
                <Copy className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{t.passwordLabel}</p>
                <p className="font-mono text-sm font-medium">{DEMO_PASSWORD}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={() => copyToClipboard(DEMO_PASSWORD, t.copyPasswordToast)}
              >
                <Copy className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-primary hover:opacity-90 h-12 text-base"
            onClick={() => window.open(DEMO_URL, "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {t.cta}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            {t.note}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
