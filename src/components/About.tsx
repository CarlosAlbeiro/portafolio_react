import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description: "Experiencia en frontend y backend con tecnologías JavaScript.",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Innovadoras",
      description: "Enfoque creativo para resolver problemas sencillo y complejos.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva, asertiva y liderazgo de proyectos.",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Metodologías ágiles y desarrollo iterativo pactando plazos de entrega coherentes.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
            >
              Sobre <span className="gradient-text">mí</span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Soy un desarrollador de software con <span className="text-foreground font-bold italic text-glow">3 años de experiencia</span> en la creación e implementación de herramientas digitales de alto impacto.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
                  Mi enfoque se centra en el ecosistema JavaScript, dominando frameworks como <span className="text-primary font-semibold">React</span> y <span className="text-primary font-semibold">Node.js</span>. He liderado proyectos que van desde soluciones empresariales a medida hasta estrategias integrales de marketing digital.
                </p>
                
                {/* <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">4+</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Años Exp.</span>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">20+</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Proyectos</span>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">100%</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Calidad</span>
                  </div>
                </div> */}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
