import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="gradient-text">Devang</span>
              <span className="text-foreground">.dev</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} Devang Prajapati. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Devang2553"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/devang-prajapati-4bb793214/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:devang6314@gmail.com"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" />{" "}
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
