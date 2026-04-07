const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-xl font-bold text-primary-foreground mb-1">
              Mente Activa
            </p>
            <p className="text-sm text-primary-foreground/60">
              Centro de acompañamiento educativo y desarrollo creativo
            </p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#about" className="hover:text-primary-foreground transition-colors">Sobre nosotros</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contacto</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Mente Activa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
