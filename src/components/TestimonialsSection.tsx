/**
 * =====================================================
 * COMPONENTE: TestimonialsSection.tsx
 * =====================================================
 * Sección "TESTIMONIOS" que muestra opiniones de usuarios.
 *
 * ¿Qué muestra?
 * - Tarjetas con experiencias de apoderados y estudiantes.
 * - Estrellas de calificación (⭐) en color rosa.
 * - Icono de comillas decorativo.
 * - Nombre y rol de la persona.
 *
 * PARA MODIFICAR:
 * - Edita el arreglo "testimonials" para cambiar/agregar opiniones.
 * - Cada objeto tiene: name, role, text (el testimonio), stars (1-5).
 *
 * NOTA: Estos testimonios son de ejemplo. Reemplázalos con
 * testimonios reales de usuarios de Mente Activa.
 * =====================================================
 */

import { Star, Quote } from "lucide-react"; // Iconos: estrella ⭐ y comillas ❝

/**
 * DATOS DE TESTIMONIOS
 * Cada objeto representa una opinión de un usuario.
 * - name: Nombre (puede ser inicializado por privacidad).
 * - role: Relación con el centro (apoderada, estudiante, etc.).
 * - text: El texto del testimonio entre comillas.
 * - stars: Cantidad de estrellas (1 a 5).
 */
const testimonials = [
  {
    name: "María P.",
    role: "Apoderada",
    text: "Mi hijo mejoró notablemente su rendimiento y confianza gracias al acompañamiento de Mente Activa. Un espacio cálido y profesional.",
    stars: 5,
  },
  {
    name: "Tomás R.",
    role: "Estudiante universitario",
    text: "Me ayudaron con mi tesis cuando sentía que no podía avanzar. Las sesiones fueron clave para organizarme y terminar con éxito.",
    stars: 5,
  },
  {
    name: "Andrea L.",
    role: "Apoderada",
    text: "La evaluación psicopedagógica nos dio claridad sobre las necesidades de nuestra hija. El equipo es muy empático y profesional.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencias de quienes confían en Mente Activa
          </p>
        </div>

        {/* GRID DE 3 TARJETAS DE TESTIMONIOS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow relative">

              {/* ICONO DE COMILLAS decorativo (esquina superior derecha, semi-transparente) */}
              <Quote className="text-accent/20 absolute top-6 right-6" size={32} />

              {/* ESTRELLAS DE CALIFICACIÓN: Se generan dinámicamente según t.stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* TEXTO DEL TESTIMONIO */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>

              {/* NOMBRE Y ROL del autor del testimonio */}
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
