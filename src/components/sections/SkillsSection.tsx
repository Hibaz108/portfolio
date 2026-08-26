import { skills } from "../../data/portfolio";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-[80svh] flex items-center mt-24 py-12 bg-foreground scroll-mt-24"
    >
      <div className="container flex flex-col justify-center gap-5">
        <h2 className="italic text-background text-4xl font-heading font-semibold tracking-wider ">
          <span aria-hidden="true" className="text-accent font-extrabold">
            |{" "}
          </span>
          Skills
        </h2>
        <p className="text-muted">Technologies I work with :</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* skill card */}
          {skills.map((group) => (
            <div
              key={group.id}
              className="space-y-4 p-5 bg-background/10 border border-transparent rounded-2xl 
                hover:border-accent hover:-translate-y-1.5 transition-all duration-500"
            >
              <h3 className="uppercase font-semibold text-xs text-accent">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-background/60">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-1.5 border border-background/25 rounded-2xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {/* === skill card === */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
