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
     <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
     
     id="about" className="p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-card mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
Soy un desarrollador de software con 4 años de experiencia en el desarrollo de software e implementación de herramientas digitales, con énfasis en JavaScript y frameworks como React y Node.js.            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
             He logrado desarrollar diferentes proyectos enfocados en necesidades puntuales de clientes, abarcando desde software empresarial y software a la medida hasta desarrollo de estrategias de marketing digital.
              Me apasiona este mundo desde mi graduación del colegio donde sabía que quería dedicarme al mundo tecnológico abarcando la mayoría de campos posibles.
            </p>
            {/* <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Me especializo en crear soluciones digitales escalables y eficientes utilizando tecnologías de acuerdo a los requerimientos presentados. 
              Mi enfoque se centra en el analisis y desarrollo de soluciones por medio de herramientas digitales y software, la experiencia del
              usuario y la resolución de problemas reales.
            </p> */}
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
    // <section id="about" className="py-20 gradient-section">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-4xl mx-auto">
    //       <div className="text-center mb-12">
    //         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    //           Sobre mí
    //         </h2>
    //         <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
    //       </div>

    //       <Card className="p-8 md:p-12 shadow-card mb-12">
    //         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    //           Soy un desarrollador de software con de 4 años de experiencia en el desarrollo de software e implementacion de herramientas digitales, especializado en JavaScript y frameworks como React y Node.js. 
    //         </p>
    //         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    //           He logrado desarrollar diferentes proyectos enfocados en necesidades puntuales de clientes, abarcando desde software empresarial y software a la medida hasta desarrollo de estrategias de marketing digital.
    //           Me apasiona este mundo desde mi graducacion del colegio donde sabia que queria dedicarme al mundo tecnologico abrancando la mayoria de campos del mismo.
    //         </p>
    //         {/* <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    //           Me especializo en crear soluciones digitales escalables y eficientes utilizando tecnologías de acuerdo a los requerimientos presentados. 
    //           Mi enfoque se centra en el analisis y desarrollo de soluciones por medio de herramientas digitales y software, la experiencia del
    //           usuario y la resolución de problemas reales.
    //         </p> */}
    //       </Card>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {highlights.map((item, index) => (
    //           <Card
    //             key={index}
    //             className="p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
    //           >
    //             <div className="flex items-start gap-4">
    //               <div className="p-3 bg-primary/10 rounded-lg">
    //                 <item.icon className="h-6 w-6 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //                 <p className="text-muted-foreground">{item.description}</p>
    //               </div>
    //             </div>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
