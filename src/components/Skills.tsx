import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "React / Next.js", level: 65 },
    { name: "TypeScript / JavaScript", level: 85 },
    { name: "Node.js / Express", level: 75 },
    { name: "Python", level: 55 },
    { name: "SQL / Databases", level: 70 },
    { name: "Git ", level: 65 },
    { name: "HTML ", level: 75 },
    { name: "CSS ", level: 75 },
  ];

  const softSkills = [
    { name: "Liderazgo de Equipo", level: 70 },
    { name: "Comunicación", level: 95 },
    { name: "Resolución de Problemas", level: 96 },
    { name: "Gestión del Tiempo", level: 70 },
    { name: "Pensamiento Crítico", level: 95 },
    { name: "Adaptabilidad", level: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6 group">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors">{name}</span>
        <span className="text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2.5 bg-white/5 border border-white/10 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
            >
              Mis <span className="gradient-text">Habilidades</span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-3 h-10 bg-primary rounded-full"></div>
                Stack Tecnológico
              </h3>
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-3 h-10 bg-pink-500 rounded-full"></div>
                Soft Skills
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
