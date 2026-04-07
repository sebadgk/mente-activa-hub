import carolinaImg from "@/assets/carolina.jpg";
import vanessaImg from "@/assets/vanessa.jpg";
import { GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    name: "Carolina Castañeda Pizarro",
    role: "Co-fundadora | Educación creativa e investigación",
    image: carolinaImg,
    bio: "Profesional enfocada en procesos educativos, investigación y desarrollo creativo. Integra metodologías artísticas, narrativas personales y reflexión crítica.",
    formation: [
      "Licenciada en Artes y Humanidades",
      "Magíster en Antropologías Latinoamericanas",
      "Estudios en Psicología (en curso)",
    ],
    areas: [
      "Acompañamiento académico y tesis",
      "Orientación vocacional",
      "Metodologías creativas",
      "Arteterapia",
    ],
  },
  {
    name: "Vanessa Díaz Marín",
    role: "Co-fundadora | Psicopedagogía y educación diferencial",
    image: vanessaImg,
    bio: "Psicopedagoga con experiencia en educación diferencial y acompañamiento a estudiantes con neurodivergencias.",
    formation: [
      "Psicopedagoga",
      "Postítulo en educación diferencial",
      "Diplomado en liderazgo",
      "Evaluadora ADOS-2 certificada",
    ],
    areas: [
      "Evaluación psicopedagógica",
      "Técnicas de estudio",
      "Apoyo a neurodivergencias",
      "Orientación a familias",
    ],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground">
            Profesionales comprometidas con el desarrollo integral de cada estudiante
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-soft hover:-translate-y-2 transition-all duration-500">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="w-full h-48 sm:h-full object-cover hover:-translate-y-1 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Formación</span>
                    </div>
                    <ul className="space-y-1">
                      {member.formation.map((f) => (
                        <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={16} className="text-accent" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Áreas</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.areas.map((a) => (
                        <span key={a} className="text-xs bg-primary-light text-primary px-2.5 py-1 rounded-full font-medium">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
