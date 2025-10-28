import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2022 - Presente",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description:
        "Liderazgo de equipo de 6 desarrolladores en la creación de una plataforma SaaS utilizada por más de 10,000 usuarios. Implementación de arquitectura de microservicios y mejora del rendimiento en un 40%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    },
    {
      period: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Corp.",
      description:
        "Desarrollo de aplicaciones web y móviles para clientes del sector financiero. Colaboración directa con stakeholders para definir requisitos y entregar soluciones de alta calidad.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "CI/CD"],
    },
    {
      period: "2018 - 2020",
      title: "Frontend Developer",
      company: "StartupHub",
      description:
        "Creación de interfaces de usuario modernas y responsivas para múltiples productos. Implementación de design systems y componentes reutilizables.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
      period: "2017 - 2018",
      title: "Junior Developer",
      company: "Web Agency Pro",
      description:
        "Desarrollo de sitios web corporativos y e-commerce. Aprendizaje de buenas prácticas de desarrollo y trabajo en equipo ágil.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
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
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
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
