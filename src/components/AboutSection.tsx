import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quiénes somos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mente Activa es un espacio interdisciplinario dedicado al acompañamiento educativo,
            psicopedagógico y socioemocional de adolescentes y jóvenes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow">
            <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acompañar procesos educativos y de desarrollo personal de adolescentes y jóvenes,
              brindando herramientas pedagógicas, psicopedagógicas y creativas que potencien
              su bienestar integral y autonomía.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow">
            <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-accent" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser un espacio de referencia en acompañamiento socioeducativo, reconocido por su
              enfoque inclusivo, creativo y centrado en las necesidades individuales de cada
              estudiante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
