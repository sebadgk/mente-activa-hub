/**
 * =====================================================
 * COMPONENTE: HeroSection.tsx
 * =====================================================
 * La SECCIÓN PRINCIPAL (hero) que se ve al abrir la página.
 * Es lo primero que ve el visitante: una presentación impactante.
 *
 * ¿Qué contiene?
 * - Título grande "Mente Activa" con efecto de texto degradado verde.
 * - Subtítulo descriptivo del centro.
 * - Dos botones de acción: "Agendar una sesión" y "Conocer más".
 * - Una imagen ilustrativa grande a la derecha.
 * - Una tarjeta flotante animada con estadísticas (+200 estudiantes).
 * - Círculos decorativos difuminados de fondo (efecto moderno).
 *
 * PARA PERSONALIZAR:
 * - Cambiar el texto del título/subtítulo: edita directamente el contenido.
 * - Cambiar la imagen: reemplaza el archivo src/assets/hero-illustration.jpg
 * - Cambiar los botones: modifica los <a> dentro del div de botones.
 * =====================================================
 */

import heroImage from "@/assets/hero-illustration.jpg";  // Imagen principal del hero
import { Sparkles } from "lucide-react";                  // Icono de destellos ✨

const HeroSection = () => {
  return (
    /**
     * <section> → Contenedor principal del hero.
     * - min-h-screen: Ocupa al menos toda la altura de la pantalla.
     * - pt-20: Espacio superior para no quedar debajo del navbar fijo.
     * - overflow-hidden: Oculta los elementos decorativos que se salen del borde.
     */
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* CÍRCULOS DECORATIVOS DE FONDO (puramente estéticos) */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      {/**
       * GRID DE 2 COLUMNAS (en pantallas grandes):
       * - Columna izquierda: Texto, título y botones.
       * - Columna derecha: Imagen ilustrativa.
       * En celulares se apilan verticalmente.
       */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* ===== COLUMNA IZQUIERDA: TEXTO Y BOTONES ===== */}
        <div className="animate-fade-up">

          {/* Etiqueta superior con icono de destellos */}
          <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Centro de acompañamiento educativo</span>
          </div>

          {/* TÍTULO PRINCIPAL: "Mente Activa" con degradado verde */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Mente{" "}
            <span className="text-gradient-primary">Activa</span>
          </h1>

          {/* DESCRIPCIÓN: Resumen del centro */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Un espacio interdisciplinario que integra psicopedagogía, educación socioemocional
            y metodologías creativas para adolescentes, jóvenes y universitarios.
          </p>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón principal: Fondo degradado verde, lleva a la sección de agendar */}
            <a
              href="#booking"
              className="bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-soft text-center"
            >
              Agendar una sesión
            </a>
            {/* Botón secundario: Borde rosa, lleva a la sección "Sobre nosotros" */}
            <a
              href="#about"
              className="border-2 border-accent/30 text-accent px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/5 transition-colors text-center"
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* ===== COLUMNA DERECHA: IMAGEN ILUSTRATIVA ===== */}
        <div className="animate-fade-up relative" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroImage}
            alt="Estudiantes aprendiendo juntos en Mente Activa"
            width={1920}
            height={1080}
            className="rounded-2xl shadow-card object-cover w-full hover:-translate-y-2 hover:shadow-soft transition-all duration-500"
          />

          {/**
           * TARJETA FLOTANTE ANIMADA
           * Muestra "+200 estudiantes acompañados" con animación de flotar.
           * Se posiciona en la esquina inferior izquierda de la imagen.
           */}
          <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-card p-4 animate-float">
            <p className="text-sm font-semibold text-foreground">+200 estudiantes</p>
            <p className="text-xs text-muted-foreground">acompañados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
