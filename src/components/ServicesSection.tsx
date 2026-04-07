/**
 * =====================================================
 * COMPONENTE: ServicesSection.tsx
 * =====================================================
 * Sección "SERVICIOS" que muestra las 6 áreas de trabajo de Mente Activa.
 *
 * Cada servicio tiene:
 * - Un icono representativo (de la librería Lucide).
 * - Un título descriptivo.
 * - Una imagen ilustrativa.
 * - Una lista de sub-servicios o actividades.
 * - Un color temático (verde "primary" o rosa "accent").
 *
 * PARA MODIFICAR:
 * - Datos de servicios: Edita el arreglo "services" de abajo.
 * - Imágenes: Reemplaza los archivos en src/assets/.
 * - Agregar un servicio: Agrega un nuevo objeto al arreglo.
 * - Iconos disponibles: Busca en https://lucide.dev/icons
 * =====================================================
 */

import servicePsico from "@/assets/service-psicopedagogia.jpg";    // Imagen de psicopedagogía
import serviceNeuro from "@/assets/service-neurodivergencias.jpg";  // Imagen de neurodivergencias
import serviceTesis from "@/assets/service-tesis.jpg";              // Imagen de apoyo a tesis
import serviceCreatividad from "@/assets/service-creatividad.jpg";  // Imagen de creatividad
import { BookOpen, Brain, Compass, Palette, GraduationCap, Heart } from "lucide-react"; // Iconos

/**
 * DATOS DE LOS SERVICIOS
 * Cada objeto define un servicio con su información visual y textual.
 *
 * Propiedades:
 * - icon: Componente de icono de Lucide (se renderiza como <icon />).
 * - title: Nombre del servicio que se muestra como título.
 * - image: Imagen importada que se muestra en la parte superior de la tarjeta.
 * - items: Lista de actividades o sub-servicios (aparecen como viñetas).
 * - color: "primary" (verde) o "accent" (rosa) para el tema de colores.
 */
const services = [
  {
    icon: BookOpen,
    title: "Acompañamiento Psicopedagógico",
    image: servicePsico,
    items: ["Apoyo educativo", "Técnicas de estudio", "Acompañamiento académico"],
    color: "primary" as const,
  },
  {
    icon: Brain,
    title: "Neurodivergencias",
    image: serviceNeuro,
    items: ["TDAH y TEA", "Evaluación inicial y ADOS-2", "Estrategias personalizadas", "Orientación a familias"],
    color: "accent" as const,
  },
  {
    icon: GraduationCap,
    title: "Técnicas de Estudio",
    image: servicePsico,
    items: ["Talleres grupales", "Sesiones individuales"],
    color: "primary" as const,
  },
  {
    icon: Compass,
    title: "Apoyo a Investigación y Tesis",
    image: serviceTesis,
    items: ["Acompañamiento a tesistas universitarios"],
    color: "accent" as const,
  },
  {
    icon: Heart,
    title: "Desarrollo Socioemocional y Vocacional",
    image: serviceNeuro,
    items: ["Orientación vocacional", "Proyecto de vida", "Habilidades personales"],
    color: "primary" as const,
  },
  {
    icon: Palette,
    title: "Creatividad y Procesos Expresivos",
    image: serviceCreatividad,
    items: ["Desbloqueo creativo", "Arteterapia", "Talleres grupales", "Sesiones individuales"],
    color: "accent" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para el desarrollo educativo, socioemocional y creativo
          </p>
        </div>

        {/**
         * GRID DE TARJETAS DE SERVICIOS
         * - sm:grid-cols-2: 2 columnas en tablets.
         * - lg:grid-cols-3: 3 columnas en pantallas grandes.
         * Cada tarjeta se eleva suavemente al pasar el cursor (hover:-translate-y-2).
         */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl shadow-card hover:shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGEN SUPERIOR: Se amplía ligeramente al pasar el cursor */}
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={768}
                  height={512}
                  loading="lazy"  // Carga diferida para mejor rendimiento
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                />
              </div>

              {/* CONTENIDO DE LA TARJETA */}
              <div className="p-6">
                {/**
                 * ICONO DEL SERVICIO
                 * Se muestra sobre un cuadrado redondeado con fondo claro.
                 * -mt-10 + relative z-10: Lo posiciona parcialmente sobre la imagen.
                 * El color depende de service.color (verde o rosa).
                 */}
                <div className={`w-12 h-12 ${service.color === "primary" ? "bg-primary-light" : "bg-accent-light"} rounded-xl flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-card`}>
                  <service.icon size={22} className={service.color === "primary" ? "text-primary" : "text-accent"} />
                </div>

                {/* TÍTULO DEL SERVICIO */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* LISTA DE SUB-SERVICIOS: Viñetas con puntos de color */}
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      {/* Punto de viñeta: verde o rosa según el servicio */}
                      <span className={`w-1.5 h-1.5 rounded-full ${service.color === "primary" ? "bg-primary" : "bg-accent"} shrink-0 mt-1.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
