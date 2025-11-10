import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Espera un poco para que todo el DOM y los componentes carguen
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Education />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
