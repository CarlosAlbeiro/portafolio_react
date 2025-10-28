import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      position: "CTO, Tech Innovations",
      content:
        "Excelente profesional con gran capacidad técnica y visión estratégica. Su contribución al proyecto fue fundamental para alcanzar nuestros objetivos.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      position: "Product Manager, Digital Solutions",
      content:
        "Trabajar con él fue una experiencia increíble. Siempre proactivo, comunicativo y entregando soluciones de alta calidad en tiempo récord.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      position: "CEO, StartupHub",
      content:
        "Un desarrollador excepcional que no solo cumple con los requisitos técnicos, sino que aporta ideas innovadoras que mejoran significativamente el producto final.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Testimonios
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
