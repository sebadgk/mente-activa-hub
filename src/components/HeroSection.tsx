import heroImage from "@/assets/hero-illustration.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Centro de acompañamiento educativo</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Mente{" "}
            <span className="text-gradient-primary">Activa</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Acompañamiento educativo y desarrollo creativo para adolescentes y jóvenes.
            Un espacio donde cada mente encuentra su camino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-soft text-center"
            >
              Agendar una sesión
            </a>
            <a
              href="#about"
              className="border-2 border-primary/20 text-primary px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Conocer más
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroImage}
            alt="Estudiantes aprendiendo juntos en Mente Activa"
            width={1920}
            height={1080}
            className="rounded-2xl shadow-card object-cover w-full"
          />
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 animate-float">
            <p className="text-sm font-semibold text-foreground">+200 estudiantes</p>
            <p className="text-xs text-muted-foreground">acompañados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
