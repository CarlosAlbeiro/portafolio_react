import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Link, MessageCircle, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

 const contenedor = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // retrasa cada letra
      },
    }
  }

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const texto = "Desarrollador de Software";
  const letras = texto.split("");

  const contenedor = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // retrasa cada letra
      },
    },
  };

  const letra = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

          <motion.h1 
          variants={contenedor}
          
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 text-center break-words overflow-hidden px-2"
          >
            {letras.map((char, index) => (
              <motion.span key={index} variants={letra}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

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
            <motion.a
              href="https://wa.me/573005183772"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <MessageCircle className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://github.com/CarlosAlbeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Github className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/carlos-albeiro-galeano-gomez-"
              target="_blank"
              rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Linkedin className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dev.cagg"
              target="_blank"
              rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Instagram className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://beacons.ai/cagg"
              target="_blank"
              rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Link className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="mailto:devcagg@gmail.com"
               className="text-white/70 hover:text-white transition-colors p-2 rounded-full cursor-pointer"
              whileHover={{
                scale: 1.3, // agranda el icono
                boxShadow: "0 0 25px rgba(247, 247, 247, 1)", // resplandor verde tipo WhatsApp
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Mail className="h-10 w-10" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
