import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 overflow-hidden rounded-xl shadow-lg">
            <img src={logo} alt="Logo" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="text-center">
            <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-2">
              Dev.Cagg
            </p>
            <p className="text-muted-foreground/60 text-xs">
              © {new Date().getFullYear()} - Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
