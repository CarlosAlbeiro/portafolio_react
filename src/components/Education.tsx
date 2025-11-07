import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const education = [
      {
      degree: "Ingeniero de software",
      institution: "Intitucion universitaria EAM",
      period: "2025 - actualidad",
      description:
        "Estudios en curso enfocados en ingeniería de software, abarcando áreas como desarrollo de software, pruebas y aseguramiento de calidad, y gestión de proyectos.",
    },
     {
      degree: "Ingeniero de sistemas",
      institution: "Universidad del Quindio",
      period: "2022 - sin finalizar",
      description:
        "Estudios en curso enfocados en ingeniería de sistemas, abarcando áreas como desarrollo de software, redes y bases de datos.",
    },
    {
      degree: "Tecnológo en análisis y desarrollo de sistemas de información",
      institution: "SENA",
      period: "2022 - 2024",
      description:
        "Formación avanzada en desarrollo de software, análisis de sistemas y gestión de proyectos. Proyecto final enfocado en el desarrollo de una plataforma web para la gestión de informacion.",
    },
    {
      degree: "Tecnico en desarrollo de software",
      institution: "SENA",
      period: "2018 - 2019",
      description:
        "Formación integral en desarrollo de software, bases de datos y ciclo de vida del software. Proyecto final enfocado en desarrollo de una aplicación web para gestión inventarios y ventas.",
    },
  ];

  const certifications = [
     {
      name: "Domina la IA con Gemini",
      issuer: "Santader | Open academy - GOOGLE",
      year: "2025",
      preview: "src/assets/certificaciones/CERTIFICADO_DOMINA_IA_GEMINI_GOOGLE.jpg",
      pdf: "src/assets/certificaciones/CERTIFICADO_DOMINA_IA_GEMINI_GOOGLE.pdf",
    },
     {
      name: "Bootcamp Inteligencia Artificial Nivel Basico",
      issuer: "TALENTO TECH",
      year: "2025",
      preview: "src/assets/certificaciones/CERTIFICADO_INTRODUCCION_INTELIGENCIA_ARTIFICIAL_BASICO_TIC.jpg",
      pdf: "src/assets/certificaciones/CERTIFICADO_INTRODUCCION_INTELIGENCIA_ARTIFICIAL_BASICO_TIC.pdf",
    },
    {
      name: "Introducción al Despliegue de Aplicaciones",
      issuer: "PLATZI",
      year: "2023",
      preview: "src/assets/certificaciones/CERTIFICADO_INSTRODUCCION_DESPLIEGUE_APLICACIONES_PLATZI.jpg",
      pdf: "src/assets/certificaciones/CERTIFICADO_INSTRODUCCION_DESPLIEGUE_APLICACIONES_PLATZI.pdf",
    },
    {
      name: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
      issuer: "PLATZI",
      year: "2023",
      preview: "/certificados/ia_basico.jpg",
      pdf: "/certificados/ia_basico.pdf",
    },
    {
      name: "Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
      issuer: "PLATZI",
      year: "2023",
      preview: "/certificados/ia_basico.jpg",
      pdf: "/certificados/ia_basico.pdf",
    },
    {
      name: "Diseño y administracion de sitios web",
      issuer: "SENA",
      year: "2018",
      preview: "src/assets/certificaciones/CERTIFICADO_DISEÑO_ADMINISTRACION_SITIOS_WEB_SENA.jpg",
      pdf: "src/assets/certificaciones/CERTIFICADO_DISEÑO_ADMINISTRACION_SITIOS_WEB_SENA.pdf",
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


            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onMouseEnter={() => setSelectedCert(index)} // Hover en PC
          onMouseLeave={() => setSelectedCert(null)} // Sale del hover
          onClick={() => setSelectedCert(index)} // Tap en móvil
        >
          <Card className="p-5 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
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

          {/* 🖼️ Mini preview (hover en PC) */}
          <AnimatePresence>
            {selectedCert === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 hidden md:block"
              >
                <img
                  src={cert.preview}
                  alt={cert.name}
                  className="w-72 h-auto rounded-lg shadow-lg border border-white/10"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* 📱 Modal para móviles */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            key="previewModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:hidden"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-2xl max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={certifications[selectedCert].preview}
                alt={certifications[selectedCert].name}
                className="w-full h-auto"
                onClick={() =>
                  window.open(certifications[selectedCert].pdf, "_blank")
                }
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg">
                  {certifications[selectedCert].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {certifications[selectedCert].issuer} —{" "}
                  {certifications[selectedCert].year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
