import { Utensils } from "lucide-react";

const Footer = () => {
  const links = {
    producto: [
      { name: "Características", href: "#" },
      { name: "Precios", href: "#pricing" },
      { name: "Integraciones", href: "#" },
      { name: "API", href: "#" }
    ],
    empresa: [
      { name: "Contacto", href: "#contact" }
    ],
    legal: [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Licencias", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Booksie Reservas</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              La solución de IA más avanzada para gestión de reservas en restaurantes. Automatiza, optimiza y crece.
            </p>
            <p className="text-sm text-muted-foreground/80">
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

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              {links.producto.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.empresa.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Booksie Reservas. Producto de{" "}
            <a
              href="https://ndxai.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Neural Dynamics AI (NDXai)
            </a>
            . Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
