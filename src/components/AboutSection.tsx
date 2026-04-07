/**
 * =====================================================
 * COMPONENTE: AboutSection.tsx
 * =====================================================
 * Sección "SOBRE NOSOTROS" que presenta toda la identidad del centro.
 *
 * Está dividida en 4 bloques:
 *
 * 1. PRESENTACIÓN: Texto introductorio explicando qué es Mente Activa.
 *
 * 2. MISIÓN Y VISIÓN: Dos tarjetas lado a lado con los objetivos del centro.
 *    - Misión (icono de diana 🎯): Lo que hace el centro día a día.
 *    - Visión (icono de ojo 👁): Lo que aspira a ser en el futuro.
 *
 * 3. ENFOQUE PEDAGÓGICO: Explica las 3 dimensiones del aprendizaje
 *    (cognitiva, emocional, creativa) y las 3 metodologías de trabajo.
 *
 * 4. PRINCIPIOS DE TRABAJO: 4 tarjetas con los valores fundamentales
 *    que guían el acompañamiento educativo.
 *
 * PARA MODIFICAR TEXTOS:
 * - Edita directamente el contenido de los <p> y <h3>.
 * - Para los principios de trabajo, edita el arreglo dentro del .map()
 * =====================================================
 */

import { Target, Eye, BookOpen, Brain, Lightbulb, Heart } from "lucide-react"; // Iconos ilustrativos

const AboutSection = () => {
  return (
    /**
     * <section id="about"> → El id="about" permite que los enlaces del menú
     * (#about) lleven directamente a esta sección al hacer clic.
     * bg-card: Fondo ligeramente distinto para diferenciar visualmente.
     */
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">

        {/* ===== BLOQUE 1: PRESENTACIÓN GENERAL ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mente Activa es un centro de acompañamiento educativo y desarrollo creativo que integra
            psicopedagogía, educación socioemocional y metodologías creativas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Su enfoque reconoce la diversidad de formas de aprender y busca fortalecer las
            capacidades personales de cada estudiante.
          </p>
        </div>

        {/* ===== BLOQUE 2: MISIÓN Y VISIÓN (dos tarjetas en grid) ===== */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">

          {/* TARJETA DE MISIÓN */}
          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow">
            {/* Icono de diana (Target) sobre fondo verde claro */}
            <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acompañar procesos educativos y de desarrollo personal en adolescentes, jóvenes y
              estudiantes universitarios, integrando herramientas de psicopedagogía, creatividad
              y educación socioemocional.
            </p>
          </div>

          {/* TARJETA DE VISIÓN */}
          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow">
            {/* Icono de ojo (Eye) sobre fondo rosa claro */}
            <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-accent" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser un espacio de referencia en el acompañamiento socioeducativo y creativo,
              promoviendo aprendizajes inclusivos y significativos.
            </p>
          </div>
        </div>

        {/* ===== BLOQUE 3: ENFOQUE PEDAGÓGICO ===== */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
            Enfoque Pedagógico
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            El aprendizaje es entendido como un proceso integral que involucra múltiples dimensiones:
          </p>

          {/* LAS 3 DIMENSIONES DEL APRENDIZAJE (tarjetas en fila) */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">

            {/* Dimensión Cognitiva */}
            <div className="bg-background rounded-2xl p-6 shadow-card text-center">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Dimensión Cognitiva</h4>
              <p className="text-sm text-muted-foreground">Desarrollo del pensamiento y las habilidades de aprendizaje</p>
            </div>

            {/* Dimensión Emocional */}
            <div className="bg-background rounded-2xl p-6 shadow-card text-center">
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent" size={24} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Dimensión Emocional</h4>
              <p className="text-sm text-muted-foreground">Bienestar socioemocional y autoconocimiento</p>
            </div>

            {/* Dimensión Creativa */}
            <div className="bg-background rounded-2xl p-6 shadow-card text-center">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Dimensión Creativa</h4>
              <p className="text-sm text-muted-foreground">Expresión artística como herramienta de desarrollo</p>
            </div>
          </div>

          {/* METODOLOGÍAS DE TRABAJO: Las 3 herramientas que se utilizan */}
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <h4 className="font-heading text-xl font-semibold text-foreground mb-4 text-center">Se trabaja mediante</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-light">
                <BookOpen className="text-primary shrink-0" size={20} />
                <span className="text-sm font-medium text-foreground">Psicopedagogía</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-accent-light">
                <Heart className="text-accent shrink-0" size={20} />
                <span className="text-sm font-medium text-foreground">Educación socioemocional</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-light">
                <Lightbulb className="text-primary shrink-0" size={20} />
                <span className="text-sm font-medium text-foreground">Metodologías creativas</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BLOQUE 4: PRINCIPIOS DE TRABAJO ===== */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
            Principios de Trabajo
          </h3>

          {/**
           * 4 tarjetas con los principios fundamentales del centro.
           * Cada una tiene un borde izquierdo verde (border-l-4 border-primary).
           * Para editar: cambia el "title" y "desc" de cada objeto.
           */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Aprendizaje significativo", desc: "Cada proceso educativo se conecta con la vida y los intereses del estudiante." },
              { title: "Diversidad de formas de aprender", desc: "Respetamos y valoramos los distintos estilos y ritmos de aprendizaje." },
              { title: "Creatividad como herramienta", desc: "La expresión creativa potencia el desarrollo integral de cada persona." },
              { title: "Acompañamiento respetuoso", desc: "Un vínculo basado en la confianza, la empatía y el respeto mutuo." },
            ].map((p) => (
              <div key={p.title} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow border-l-4 border-primary">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
