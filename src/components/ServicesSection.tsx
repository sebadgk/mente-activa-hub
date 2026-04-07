import { BookOpen, Brain, Compass, Palette } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Acompañamiento psicopedagógico",
    description: "Apoyo educativo y técnicas de estudio personalizadas para potenciar el aprendizaje.",
    color: "bg-primary-light text-primary",
  },
  {
    icon: Brain,
    title: "Neurodivergencias",
    description: "Apoyo especializado para TDAH, TEA y dificultades de aprendizaje con enfoque integral.",
    color: "bg-accent/15 text-accent",
  },
  {
    icon: Compass,
    title: "Orientación vocacional",
    description: "Ayuda para definir proyectos de vida y tomar decisiones informadas sobre el futuro.",
    color: "bg-primary-light text-primary",
  },
  {
    icon: Palette,
    title: "Arteterapia",
    description: "Procesos creativos como herramienta de expresión y bienestar emocional.",
    color: "bg-accent/15 text-accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales para el desarrollo educativo y personal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5`}>
                <service.icon size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
