const HeroSection = () => {
  return (
    <section id="top" className="container flex flex-col gap-8 pt-24 pb-28 ">
      <p className="w-fit uppercase border border-foreground/10 py-1 px-3 md:px-6 text-foreground/70 text-xs font-medium rounded-full">
        Currently open to new opportunities
      </p>

      <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        Hi, I'm Hiba,
        <br />
        <span className="text-accent"> a frontend developer</span>
      </h1>

      <p className="max-w-4xl text-foreground/70">
        I'm a self-taught frontend developer passionate about creating
        responsive, accessible, and user-friendly web pages.
      </p>

      <div className="flex gap-4 uppercase text-sm">
        <a
          href="#contact"
          className="h-12 w-48 flex items-center justify-center bg-foreground text-background 
        font-medium rounded-4xl hover:bg-accent hover:text-foreground transition-colors duration-500"
        >
          Get in touch
        </a>

        <a
          href="/"
          className="h-12 w-48 flex items-center justify-center text-foreground font-medium border
           border-foreground/15 rounded-4xl hover:border-foreground transition-colors duration-500"
        >
          Download cv
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
