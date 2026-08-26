import { navItems } from "../../data/portfolio";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md">
      <div className="container h-20 flex items-center justify-between">
        <a
          href="#top"
          className="italic text-foreground text-3xl font-heading font-medium"
        >
          H.
        </a>

        <nav className="flex items-center gap-6 text-foreground text-sm md:text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors duration-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
