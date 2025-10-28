import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Maestría en Ciencias de la Computación",
      institution: "Universidad Tecnológica Nacional",
      period: "2016 - 2018",
      description:
        "Especialización en Inteligencia Artificial y Machine Learning. Tesis sobre optimización de algoritmos de aprendizaje profundo.",
    },
    {
      degree: "Ingeniería en Sistemas",
      institution: "Instituto Politécnico Superior",
      period: "2012 - 2016",
      description:
        "Formación integral en desarrollo de software, bases de datos, redes y arquitectura de sistemas. Promedio: 9.2/10",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      year: "2022",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2021",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2020",
    },
  ];

  return (
    <section id="education" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Educación y Certificaciones
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Educación
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <span className="text-sm font-semibold text-accent">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-accent" />
              Certificaciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-5 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-accent font-semibold">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
