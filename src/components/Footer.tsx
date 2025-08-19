import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github
    },
    {
      name: "LinkedIn", 
      href: "https://linkedin.com",
      icon: Linkedin
    },
    {
      name: "Email",
      href: "mailto:alex.johnson@example.com",
      icon: Mail
    }
  ];

  return (
    <footer className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-gradient">Tirapat Saetiao</span>
            </div>
            <p className="text-muted-foreground">
              Being a developer with a passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Tirapat Saetiao 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;