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

  const texto = "Desarrollador de \nSoftware";
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
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-foreground/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-muted-foreground/10 rounded-full blur-[120px] animate-pulse-slow [animation-delay:2s]"></div>
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              variants={contenedor}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black mb-6 tracking-tighter leading-[0.9]"
            >
              {letras.map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letra}
                  className={char === " " ? "" : "gradient-text inline-block"}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl xl:text-3xl font-light text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Arquitecto de Experiencias Digitales & <span className="font-bold text-foreground">Full Stack Developer</span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Transformo ideas complejas en interfaces intuitivas y sistemas robustos. Especializado en React, Node.js y el ecosistema Cloud.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 px-0">
              {[
                { icon: MessageCircle, href: "https://wa.me/573005183772", label: "WhatsApp", color: "hover:text-foreground" },
                { icon: Github, href: "https://github.com/CarlosAlbeiro", label: "GitHub", color: "hover:text-foreground" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-albeiro-galeano-gomez-", label: "LinkedIn", color: "hover:text-foreground" },
                { icon: Instagram, href: "https://www.instagram.com/dev.cagg", label: "Instagram", color: "hover:text-foreground" },
                { icon: Link, href: "https://beacons.ai/cagg", label: "Beacons", color: "hover:text-foreground" },
                { icon: Mail, href: "mailto:devcagg@gmail.com", label: "Email", color: "hover:text-foreground" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-all duration-300 p-3 glass rounded-2xl cursor-pointer ${social.color}`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon className="h-6 w-6 md:h-7 md:w-7" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground to-muted-foreground rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity animate-pulse"></div>
              <img
                src={profileImage}
                alt="Foto profesional"
                className="w-[200px] h-[200px] sm:w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-[3rem] lg:rounded-[4rem] mx-auto border-4 border-white/10 shadow-2xl object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
