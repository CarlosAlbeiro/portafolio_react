import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-scale-in">
            <img
              src={profileImage}
              alt="Foto profesional"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Desarrollador de Software
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up [animation-delay:200ms]">
            Creando soluciones innovadoras con tecnología de vanguardia
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
            Especializado en desarrollo full-stack, arquitectura de software y
            transformación digital. Apasionado por resolver problemas complejos
            con código elegante y eficiente.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up [animation-delay:600ms]">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Ver Proyectos
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Contactar
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up [animation-delay:800ms]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
