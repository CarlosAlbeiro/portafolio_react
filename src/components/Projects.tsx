import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Luisa Restrepo - Portfolio",
      description:
        "Plataforma personal y portafolio profesional para Luisa Restrepo.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://luisa-restrepo.galeotek.site",
      githubUrl: "#",
    },
    {
      title: "Galeotek.site",
      description:
        "Ecosistema de soluciones tecnológicas integral para hogares y negocios.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Next.js", "TypeScript", "Node.js"],
      demoUrl: "https://galeotek.site",
      githubUrl: "#",
    },
    // {
    //   title: "Dashboard de Analytics",
    //   description:
    //     "Panel de control con visualización de datos en tiempo real.",
    //   image: project3,
    //   technologies: ["Vue.js", "Python", "D3.js"],
    //   demoUrl: "https://demo.example.com",
    //   githubUrl: "https://github.com",
    // },
    // {
    //   title: "E-commerce jugeteria",  
    //   description:
    //     "Tienda en línea con procesamiento de pagos avanzado.",
    //   image: project1,
    //   technologies: ["React", "tailwind-css"],
    //   demoUrl: "https://bumble-toys-quindio.galeotek.site/",
    //   githubUrl: "https://github.com",
    // },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
            >
              Mis <span className="gradient-text">Proyectos</span>
            </motion.h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 glass shadow-xl transition-all duration-500 hover:scale-[1.05] hover:border-primary/50 aspect-[4/5]"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/10 backdrop-blur-md text-white text-[8px] uppercase tracking-wider rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-xs mb-4 line-clamp-2 transition-opacity duration-500">
                    {project.description}
                  </p>

                  <div className="flex gap-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                    <Button
                      size="sm"
                      className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-8 px-4 text-xs"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        Visitar
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white gap-2 backdrop-blur-md h-8 px-4 text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
