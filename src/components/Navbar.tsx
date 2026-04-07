/**
 * =====================================================
 * COMPONENTE: Navbar.tsx
 * =====================================================
 * La BARRA DE NAVEGACIÓN que aparece fija en la parte superior.
 *
 * ¿Qué hace?
 * - Muestra el logo "Mente Activa" a la izquierda.
 * - Muestra los enlaces de navegación a la derecha (en pantallas grandes).
 * - En celulares/tablets, muestra un botón de menú hamburguesa (☰)
 *   que abre/cierra un menú desplegable.
 * - Tiene efecto de vidrio esmerilado (backdrop-blur) para verse transparente.
 *
 * PARA MODIFICAR LOS ENLACES DEL MENÚ:
 * Edita el arreglo "navLinks" (líneas de abajo). Cada objeto tiene:
 *   - label: El texto que se muestra
 *   - href: La sección a la que lleva (debe coincidir con el id de la sección)
 * =====================================================
 */

import { useState } from "react";          // Hook para manejar estado (menú abierto/cerrado)
import { Menu, X } from "lucide-react";    // Iconos de menú hamburguesa (☰) y cerrar (✕)

/**
 * Lista de enlaces del menú de navegación.
 * Para agregar un nuevo enlace, simplemente agrega un nuevo objeto aquí.
 * El "href" debe coincidir con el "id" de la sección correspondiente.
 */
const navLinks = [
  { label: "Sobre nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Servicios", href: "#services" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Agendar", href: "#booking" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  /**
   * Estado "open": controla si el menú móvil está abierto (true) o cerrado (false).
   * - useState(false) → empieza cerrado.
   * - setOpen(true/false) → cambia el estado.
   */
  const [open, setOpen] = useState(false);

  return (
    /**
     * <nav> → Barra de navegación fija en la parte superior.
     * - fixed top-0: Siempre visible arriba al hacer scroll.
     * - z-50: Se muestra por encima de otros elementos.
     * - bg-background/80 + backdrop-blur-md: Fondo semi-transparente con efecto vidrio.
     * - border-b: Línea sutil en la parte inferior.
     */
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* LOGO: Texto "Mente Activa" que al hacer clic lleva al inicio */}
        <a href="#" className="font-heading text-2xl font-bold text-primary">
          Mente Activa
        </a>

        {/* MENÚ ESCRITORIO: Solo visible en pantallas grandes (lg = 1024px+) */}
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
          {/* Botón destacado "Agendar hora" con fondo degradado verde */}
          <li>
            <a
              href="#booking"
              className="bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Agendar hora
            </a>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA: Solo visible en celulares/tablets (menor a lg) */}
        <button
          onClick={() => setOpen(!open)}   // Al hacer clic, alterna entre abierto/cerrado
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"         // Accesibilidad: describe la función del botón
        >
          {/* Muestra ✕ si está abierto, o ☰ si está cerrado */}
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/**
       * MENÚ MÓVIL DESPLEGABLE
       * Solo se muestra cuando "open" es true (el usuario hizo clic en ☰).
       * Al hacer clic en un enlace, setOpen(false) cierra el menú automáticamente.
       */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}  // Cierra el menú al navegar
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
