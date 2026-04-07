import { Star, Quote } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencias de quienes confían en Mente Activa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow relative">
              <Quote className="text-accent/20 absolute top-6 right-6" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
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
