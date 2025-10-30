import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Link, MessageCircle  } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje. Te responderé pronto.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devcagg@gmail.com",
      href: "mailto:devcagg@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 300 518 3772",
      href: "https://wa.me/573005183772",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Quindio, Colombia",
      href: "#",
    },
  ];

  const socialLinks = [
     {
      icon: MessageCircle,
      label: "Mensaje",
      href: "https://wa.me/573005183772",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/CarlosAlbeiro",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carlos-albeiro-galeano-gomez-",
    },
      {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/dev.cagg",
    },
    {
      icon: Link,
      label: "Beacons",
      href: "https://beacons.ai/cagg",
    },
   
   
  ];

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? No dudes en contactarme. Estoy
              siempre abierto a discutir nuevas oportunidades y colaboraciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu mensaje"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6">Redes Sociales</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
