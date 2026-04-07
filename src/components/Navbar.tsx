import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Servicios", href: "#services" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Agendar", href: "#booking" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-heading text-2xl font-bold text-primary">
          Mente Activa
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Agendar hora
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium text-center"
              >
                Agendar hora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
