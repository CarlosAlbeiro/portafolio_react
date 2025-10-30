import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Link, MessageCircle, ArrowRight } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-scale-in">
            <img
              src={profileImage}
              alt="Foto profesional"
              className="w-[250px] h-[250px] rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Desarrollador de Software
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up [animation-delay:200ms]">
            Creando soluciones innovadoras con tecnología practicas y eficientes.
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
            Asesor, planeador y desarrollador de soluciones digitales. Apasionado por resolver problemas y necesidades
            con herramientas digitales y código de forma eficiente, versatil y escalable.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up [animation-delay:600ms]">
            {/* <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Ver Estudios
              <ArrowRight className="h-5 w-5" />
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Contactar
              <Mail className="h-7 w-7" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up [animation-delay:800ms]">
            <a
              href="https://wa.me/573005183772"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <MessageCircle className="h-10 w-10" />
            </a>
            <a
              href="https://github.com/CarlosAlbeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-10 w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-albeiro-galeano-gomez-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="h-10 w-10" />
            </a>
            <a
              href="https://www.instagram.com/dev.cagg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="h-10 w-10" />
            </a>
            <a
              href="https://beacons.ai/cagg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Link className="h-10 w-10" />
            </a>
            <a
              href="mailto:devcagg@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
