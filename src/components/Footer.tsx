import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const copy = {
    es: {
      brandDescription:
        "La solución de IA más avanzada para gestión de reservas en restaurantes. Automatiza, optimiza y crece.",
      productLabel: "Producto",
      companyLabel: "Empresa",
      linkFeatures: "Características",
      linkPricing: "Precios",
      linkContact: "Contacto",
      bottomTextPrefix: "© 2025 Reserbot. Producto de",
      bottomTextSuffix: ". Todos los derechos reservados.",
    },
    en: {
      brandDescription:
        "The most advanced AI solution for restaurant reservations. Automate, optimize and grow.",
      productLabel: "Product",
      companyLabel: "Company",
      linkFeatures: "Features",
      linkPricing: "Pricing",
      linkContact: "Contact",
      bottomTextPrefix: "© 2025 Reserbot. A product by",
      bottomTextSuffix: ". All rights reserved.",
    },
    ca: {
      brandDescription:
        "La solució d’IA més avançada per a la gestió de reserves en restaurants. Automatitza, optimitza i creix.",
      productLabel: "Producte",
      companyLabel: "Empresa",
      linkFeatures: "Característiques",
      linkPricing: "Preus",
      linkContact: "Contacte",
      bottomTextPrefix: "© 2025 Reserbot. Producte de",
      bottomTextSuffix: ". Tots els drets reservats.",
    },
    it: {
      brandDescription:
        "La soluzione IA più avanzata per la gestione delle prenotazioni nei ristoranti. Automatizza, ottimizza e cresci.",
      productLabel: "Prodotto",
      companyLabel: "Azienda",
      linkFeatures: "Funzionalità",
      linkPricing: "Prezzi",
      linkContact: "Contatto",
      bottomTextPrefix: "© 2025 Reserbot. Prodotto di",
      bottomTextSuffix: ". Tutti i diritti riservati.",
    },
  } as const;

  const t = copy[language];

  const links = {
    producto: [
      { name: t.linkFeatures, href: "#features" },
      { name: t.linkPricing, href: "#pricing" },
    ],
    empresa: [{ name: t.linkContact, href: "#contact" }],
  };

  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Reserbot logo" className="w-14 h-14" />
              <span className="text-xl font-bold font-brand">Reserbot</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              {t.brandDescription}
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
            <h4 className="font-semibold mb-4">{t.productLabel}</h4>
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
            <h4 className="font-semibold mb-4">{t.companyLabel}</h4>
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
          {/*
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
        */}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.bottomTextPrefix}{" "}
            <a
              href="https://ndxai.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Neural Dynamics AI (NDXai)
            </a>
            {t.bottomTextSuffix}
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
