import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Innovadoras",
      description: "Enfoque creativo para resolver problemas complejos",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva y liderazgo de proyectos",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Metodologías ágiles y desarrollo iterativo",
    },
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-card mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy un desarrollador de software con más de 5 años de experiencia en
              el diseño y desarrollo de aplicaciones web y móviles. Mi pasión por
              la tecnología comenzó en la universidad y desde entonces he trabajado
              en proyectos que van desde startups hasta empresas Fortune 500.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Me especializo en crear soluciones escalables y eficientes utilizando
              las últimas tecnologías y mejores prácticas de la industria. Mi
              enfoque se centra en la calidad del código, la experiencia del
              usuario y la resolución de problemas reales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cuando no estoy programando, disfruto contribuir a proyectos de
              código abierto, escribir artículos técnicos y mentorear a
              desarrolladores junior.
            </p>
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
    </section>
  );
};

export default About;
