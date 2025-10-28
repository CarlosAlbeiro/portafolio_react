import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript / JavaScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "SQL / NoSQL Databases", level: 85 },
    { name: "AWS / Cloud Services", level: 75 },
    { name: "Docker / Kubernetes", level: 70 },
    { name: "Git / CI/CD", level: 90 },
  ];

  const softSkills = [
    { name: "Liderazgo de Equipo", level: 90 },
    { name: "Comunicación", level: 95 },
    { name: "Resolución de Problemas", level: 95 },
    { name: "Gestión del Tiempo", level: 85 },
    { name: "Pensamiento Crítico", level: 90 },
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
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out skill-bar"
          style={{
            width: isVisible ? `${level}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 gradient-section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Habilidades
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Habilidades Técnicas
              </h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </Card>

            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                Habilidades Blandas
              </h3>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
