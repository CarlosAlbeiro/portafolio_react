import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2024 - 2025",
      title: "Auxiliar de soporte TI, Desarrollador de Software",
      company: "DATEC SYSTEMS S.A.S",
      description:
        "Instalador y soporte de software empresarial, atención y soporte a usuarios finales. Implementación y mantenimiento de infraestructura tecnológica, Desarrollador de software modular para necesidades internas de la empresa.",
      technologies: [ "Python", "SQL Sever", "PHP", "JavaScript", "HTML", "CSS", "Node.js","bootstrap","WordPress"],
    },
     {
      period: "2023 - 2024",
      title: "Desarrollador",
      company: "Happy sleep",
      description:
        "Desarrollo de software corporativos, cubriendo necesidades específicas de la empresa. Aprendizaje de buenas prácticas de desarrollo y trabajo en equipo ágil.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Node.js","bootstrap","WordPress","SQL Server"],
    },
    {
      period: "2023 - 2023",
      title: "Desarrollador (pasantias)",
      company: "Happy sleep",
      description:
        "Desarrollo de software corporativos, cubriendo necesidades específicas de la empresa. Aprendizaje de buenas prácticas de desarrollo y trabajo en equipo ágil.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Node.js","bootstrap","WordPress","SQL Server"],
    },
    {
      period: "2020 - 2022",
      title: "Freelance",
      company: "",
      description:
        "Creación de software a la medida para emprendimiento y clientes, abarcando desde sitios web hasta desarrollos de software. Gestión completa del ciclo de vida del desarrollo de software.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","bootstrap"],
    },
     {
      period: "2019 - 2020",
      title: "Desarrolador Junior (pasantias)",
      company: "Institucion universitaria EAM",
      description:
        "Perfil de trabajo enfocado en el apoyo en el área de sistemas, mantenimientos de computadores, corrección y soporte en los sistemas operativos y plataformas de la universidad.",
      technologies: ["Redes", "Hardware de computadores", "Java","PHP"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Experiencia <span className="gradient-text">Laboral</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-bold text-foreground/80 mb-4">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {exp.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-secondary/50 text-secondary-foreground text-[10px] uppercase font-bold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 5 && (
                    <span className="text-[10px] text-muted-foreground font-bold self-center">
                      +{exp.technologies.length - 5}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
