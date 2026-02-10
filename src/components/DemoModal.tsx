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

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DEMO_URL = "https://frontend-restaurant-rho.vercel.app";
const DEMO_EMAIL = "test@ndxai.eu";
const DEMO_PASSWORD = "test123456";

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado al portapapeles`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Prueba Booksie en vivo</DialogTitle>
          <DialogDescription className="text-base">
            Accede a nuestra plataforma de prueba y explora todas las funcionalidades. Puedes mirar y probar todo lo que quieras.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="p-4 rounded-xl bg-foreground/5 border border-border/50 space-y-3">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Credenciales de acceso</p>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Usuario</p>
                <p className="font-mono text-sm font-medium truncate">{DEMO_EMAIL}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={() => copyToClipboard(DEMO_EMAIL, "Usuario")}
              >
                <Copy className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Contraseña</p>
                <p className="font-mono text-sm font-medium">{DEMO_PASSWORD}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={() => copyToClipboard(DEMO_PASSWORD, "Contraseña")}
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
            Acceder a la Demo
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Se abrirá en una nueva pestaña. Usa las credenciales de arriba para iniciar sesión.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
