import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  component: Index,
});

function Section({
  id,
  title,
  children,
  alt = false,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`w-full py-24 md:py-32 ${alt ? "bg-secondary" : "bg-background"}`}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl mb-10 tracking-tight">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

const principles = [
  {
    title: "Open by default",
    body: "Research published openly, tools open-source, knowledge shared freely.",
  },
  {
    title: "Build, don't just theorize",
    body: "Every research direction produces working code, usable tools, or reproducible experiments.",
  },
  {
    title: "Accessible over impressive",
    body: "We'd rather make quantum understandable to 1,000 people than publish one paper nobody reads.",
  },
  {
    title: "Independent",
    body: "Research driven by curiosity and impact, on questions we believe matter.",
  },
];

const research = [
  {
    title: "Quantum Machine Learning",
    body: "Variational quantum circuit architectures, hybrid quantum-classical models, reinforcement learning with quantum policies, and benchmarking quantum ML against classical baselines on real hardware.",
  },
  {
    title: "NISQ-Era Applications",
    body: "Practical applications on noisy intermediate-scale quantum hardware. Noise characterization, error mitigation, and cross-platform evaluation on IBM and IQM devices.",
  },
  {
    title: "Quantum Software & Tooling",
    body: "Open-source libraries and frameworks that lower the barrier to doing quantum research. Data preprocessing pipelines, visualization packages, and platform-agnostic tooling.",
  },
  {
    title: "Quantum Computing Education",
    body: "Interactive learning resources, visual explanations, and public content that makes quantum computing intuitive and accessible.",
  },
];

const projects = [
  {
    name: "Quantum Drive",
    desc: "NISQ-era VQC reinforcement learning research targeting cross-platform evaluation on IBM and IQM hardware.",
    status: "In Development" as const,
  },
  {
    name: "QuPrep",
    desc: "Open-source Python library for classical-to-quantum dataset conversion.",
    status: "Active" as const,
  },
  {
    name: "qmldiagrams",
    desc: "LaTeX/TikZ package for hybrid quantum-classical architecture diagrams.",
    status: "In Development" as const,
  },
  {
    name: "QFabric",
    desc: "Open-source package for interactive quantum visualizations in educational content.",
    status: "In Development" as const,
  },
  {
    name: "quantumstuff.org",
    desc: "Interactive quantum computing educational platform with visual explanations and hands-on exercises.",
    status: "Active" as const,
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="mx-auto max-w-[1100px] px-6 w-full">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">
            Manin Research
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 whitespace-nowrap">
            Advancing quantum computing through open research and open-source tools.
          </p>
          <p className="text-sm text-muted-foreground max-w-[560px] text-left">
            Named after Yuri Manin (1937–2023), mathematician and pioneer of quantum computing.
          </p>
          <div className="mt-16 h-px w-24 bg-border" />
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About" alt>
        <div className="space-y-6 text-foreground/90">
          <p>
            Manin Research is an independent research organization based in Colombo,
            Sri Lanka, focused on quantum computing, quantum machine learning, and
            open-source quantum tooling.
          </p>
          <p>
            We conduct open research at the intersection of near-term quantum
            hardware and practical applications. We publish openly, build tools for
            the community, and make quantum computing approachable through
            education and outreach.
          </p>
          <p>
            We are named after Yuri Ivanovich Manin (1937–2023), a Russian mathematician who was among the first to envision quantum computing in his 1980 book <em>"Computable and Uncomputable."</em> A scholar of extraordinary breadth who published across mathematics, physics, linguistics, and philosophy, Manin exemplified intellectual curiosity, integrity, and independence. His legacy inspires our work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {principles.map((p) => (
            <div key={p.title} className="bg-secondary p-6">
              <h3 className="font-sans font-semibold text-base mb-2 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Research */}
      <Section id="research" title="Research Areas">
        <div className="divide-y divide-border">
          {research.map((r) => (
            <div key={r.title} className="py-6 first:pt-0 last:pb-0">
              <h3 className="font-sans font-semibold text-base mb-2">{r.title}</h3>
              <p className="text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" alt>
        <ul className="divide-y divide-border">
          {projects.map((p) => (
            <li key={p.name} className="py-6 first:pt-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-sans font-semibold text-base">{p.name}</h3>
                <span
                  className={`text-xs uppercase tracking-wider whitespace-nowrap ${
                    p.status === "Active" ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-muted-foreground">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <p className="text-muted-foreground">
          Publications will be listed here as preprints and papers are released.
          All research is preprinted on arXiv and accompanied by open-source code.
        </p>
      </Section>

      {/* People */}
      <Section id="people" title="People" alt>
        <div className="space-y-10">
          <div>
            <h3 className="font-sans font-semibold text-base">
              Hasarindu Perera <span className="font-normal text-muted-foreground">— Founder & Researcher</span>
            </h3>
            <p className="text-muted-foreground mt-1">
              Quantum machine learning, VQC architectures, reinforcement learning,
              quantum software tooling.
            </p>
            <p className="mt-2 text-sm">
              <a href="#">ORCID</a> · <a href="#">LinkedIn</a> ·{" "}
              <a href="#">GitHub</a>
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-base">
              Ashani Kodithuwakku <span className="font-normal text-muted-foreground">— Researcher</span>
            </h3>
            <p className="text-muted-foreground mt-1">
              Artificial intelligence. Undergraduate, University of Moratuwa.
            </p>
            <p className="mt-2 text-sm">
              <a href="#">ORCID</a> · <a href="#">LinkedIn</a> · <a href="#">GitHub</a>
            </p>
          </div>
          <p className="italic text-sm text-muted-foreground pt-4">
            We welcome collaborators — from universities and independent researchers
            alike — as research affiliates. Get in touch if you're interested in
            working together.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="text-lg mb-4">
          <a href="mailto:hello@maninresearch.org">
            hello@maninresearch.org
          </a>
        </p>
        <p className="text-sm mb-6">
          <a href="#">GitHub</a> · <a href="#">LinkedIn</a>
        </p>
        <p className="text-sm text-muted-foreground">
          Manin Research · Colombo, Sri Lanka
        </p>
      </Section>

      <footer className="border-t border-border py-8">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Manin Research · Colombo, Sri Lanka
        </p>
      </footer>
    </div>
  );
}
