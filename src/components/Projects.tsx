import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description:
        "Desarrollo completo de una plataforma de comercio electrónico con carrito de compras, procesamiento de pagos y panel de administración.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "App de Gestión de Tareas",
      description:
        "Aplicación móvil y web para gestión de proyectos con funcionalidades de colaboración en tiempo real y notificaciones push.",
      image: project2,
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Dashboard de Analytics",
      description:
        "Panel de control con visualización de datos en tiempo real, reportes personalizables y exportación de información.",
      image: project3,
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
