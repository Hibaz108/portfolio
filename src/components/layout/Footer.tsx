import { socials } from "../../data/portfolio";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-foreground/10 text-sm">
      <div className="container flex justify-between">
        <p className="text-muted">&copy; 2026 HIBA</p>

        <div className="flex gap-4">
          {socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-accent transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
