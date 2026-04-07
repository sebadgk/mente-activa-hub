/**
 * =====================================================
 * COMPONENTE: Footer.tsx
 * =====================================================
 * PIE DE PÁGINA que aparece al final del sitio web.
 *
 * ¿Qué contiene?
 * - Logo "Mente Activa" con descripción del centro.
 * - Enlaces rápidos a las secciones principales.
 * - Texto de copyright con el año actual.
 *
 * PARA PERSONALIZAR:
 * - Cambia el año del copyright si es necesario.
 * - Agrega más enlaces en la sección de navegación del footer.
 * - El fondo oscuro (bg-foreground) invierte los colores del texto.
 * =====================================================
 */

const Footer = () => {
  return (
    /**
     * <footer> → Contenedor del pie de página.
     * - bg-foreground: Usa el color de texto como fondo (efecto oscuro invertido).
     * - Los textos usan text-primary-foreground (blanco) para contraste.
     */
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">

        {/* FILA SUPERIOR: Logo + enlaces de navegación */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo y descripción */}
          <div>
            <p className="font-heading text-xl font-bold text-primary-foreground mb-1">
              Mente Activa
            </p>
            <p className="text-sm text-primary-foreground/60">
              Centro de acompañamiento educativo y desarrollo creativo
            </p>
          </div>

          {/* Enlaces de navegación rápida */}
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#about" className="hover:text-primary-foreground transition-colors">Sobre nosotros</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contacto</a>
          </div>
        </div>

        {/* LÍNEA DIVISORIA + COPYRIGHT */}
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
