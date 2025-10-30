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
        "Desarrollo de software corporativos, cubriendo necesidades especificas de la empresa. Aprendizaje de buenas prácticas de desarrollo y trabajo en equipo ágil.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Node.js","bootstrap","WordPress","SQL Server"],
    },
    {
      period: "2023 - 2023",
      title: "Desarrollador (pasantias)",
      company: "Happy sleep",
      description:
        "Desarrollo de software corporativos, cubriendo necesidades especificas de la empresa. Aprendizaje de buenas prácticas de desarrollo y trabajo en equipo ágil.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Node.js","bootstrap","WordPress","SQL Server"],
    },
    {
      period: "2020 - 2022",
      title: "Freelance",
      company: "",
      description:
        "Creacion de software a la medida para emprendimeinto y clientes, abarcando desde sitios web hasta desarrollos de software. Gestión completa del ciclo de vida del desarrollo de software.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","bootstrap"],
    },
     {
      period: "2019 - 2020",
      title: "Desarrolador Junior (pasantias)",
      company: "Institucion universitaria EAM",
      description:
        "Perfil de trabajo enfocado en el apoyo en el área de sistemas, mantenimientos de computadores, corrección y soporte en los sistemas operativos y plataformas de la universidad.",
      technologies: ["Redes", "Hardware de compuatdores", "Java","PHP"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experiencia Laboral
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={` relative mb-12 flex flex-col items-center md:items-start ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <Card
                    className={`p-6 shadow-card hover:shadow-hover transition-all duration-300 ${
                      index % 2 === 0
                        ? "md:mr-8 ml-8 md:ml-0"
                        : "md:ml-8 ml-8 md:mr-0"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-accent">
                        {exp.period}
                      </span>
                    </div>

                    <span className="hidden md:inline-block text-sm font-semibold text-accent mb-2">
                      {exp.period}
                    </span>

                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
