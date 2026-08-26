const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container min-h-[70svh] flex flex-col items-center justify-center gap-8"
    >
      <h2 className="italic font-heading font-medium text-foreground text-4xl md:text-6xl lg:text-8xl">
        Let's create <span className="text-accent">together.</span>
      </h2>

      <p className="text-center text-muted">
        I'm open to junior frontend roles, internships, and freelance
        opportunities.
      </p>

      <a
        href="mailto:hibbaa108@gmail.com"
        className="h-12 w-52 flex items-center justify-center bg-foreground rounded-4xl uppercase
         text-background font-medium hover:bg-accent hover:text-foreground transition-colors duration-500"
      >
        Get in touch
      </a>
    </section>
  );
};

export default ContactSection;
