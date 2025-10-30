
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} CAGG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
