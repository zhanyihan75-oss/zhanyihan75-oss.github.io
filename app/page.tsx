import { ArrowUpRight, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = ["Projects", "Playground", "About", "Contact"];

const featuredProjects = [
  {
    title: "Monolith House",
    type: "Identity / Art Direction",
    year: "2026",
    summary:
      "A restrained visual system for an architecture practice working between residential calm and civic scale.",
    image: "from-zinc-950 via-zinc-800 to-zinc-300",
  },
  {
    title: "Index No. 12",
    type: "Editorial / Digital Experience",
    year: "2025",
    summary:
      "A digital magazine framework built around pace, hierarchy, and image-led reading rituals.",
    image: "from-neutral-200 via-neutral-500 to-neutral-950",
  },
];

const galleryProjects = [
  {
    title: "Aster Objects",
    type: "Campaign System",
    year: "2026",
    tone: "bg-neutral-200 dark:bg-neutral-800",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Civic Type Lab",
    type: "Brand / Web",
    year: "2025",
    tone: "bg-zinc-900 dark:bg-zinc-100",
    ratio: "aspect-[3/4]",
  },
  {
    title: "Form Studies",
    type: "Experimental Print",
    year: "2025",
    tone: "bg-stone-300 dark:bg-stone-700",
    ratio: "aspect-square",
  },
  {
    title: "Parallel Archive",
    type: "Editorial System",
    year: "2024",
    tone: "bg-neutral-100 dark:bg-neutral-900",
    ratio: "aspect-[5/4]",
  },
  {
    title: "Field Notes",
    type: "Photography Direction",
    year: "2024",
    tone: "bg-zinc-300 dark:bg-zinc-800",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Quiet Index",
    type: "Portfolio System",
    year: "2023",
    tone: "bg-black dark:bg-white",
    ratio: "aspect-[3/4]",
  },
];

const experiments = [
  "Motion studies for low-friction page transitions",
  "Typographic scales for dense case-study reading",
  "Generative poster grids using constraint-based layout",
  "Image sequencing systems for launch campaigns",
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="reveal flex items-center justify-between border-t border-black/15 pt-4 text-[12px] font-light uppercase tracking-[0.18em] text-black/45 dark:border-white/15 dark:text-white/45">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}

function ProjectImage({
  gradient,
  className,
}: {
  gradient?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-neutral-200 dark:bg-neutral-900 ${className ?? ""}`}
    >
      <div
        className={`h-full w-full origin-center bg-gradient-to-br ${
          gradient ?? "from-neutral-200 via-neutral-500 to-neutral-900"
        } opacity-95 transition duration-300 ease-out group-hover:scale-[1.035] group-hover:opacity-85`}
      >
        <div className="grid h-full grid-cols-4 gap-px p-px opacity-20 mix-blend-overlay">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="bg-white/50 dark:bg-black/50" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f5f1] text-neutral-950 dark:bg-[#090909] dark:text-neutral-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f6f5f1]/82 backdrop-blur-xl dark:border-white/10 dark:bg-[#090909]/80">
        <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-6 px-5 sm:px-8 lg:grid-cols-4">
          <a
            href="#top"
            className="text-[13px] font-semibold uppercase tracking-[0.16em] transition hover:text-[#9b6a35]"
          >
            Mira Chen
          </a>
          <div className="hidden items-center gap-8 text-[12px] font-light uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400 lg:col-span-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition duration-200 ease-out hover:text-[#9b6a35]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              href="mailto:hello@example.com"
              className="hidden text-[12px] font-light uppercase tracking-[0.16em] text-neutral-500 transition hover:text-[#9b6a35] dark:text-neutral-400 sm:inline"
            >
              hello@example.com
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="px-5 pb-20 pt-28 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-4">
          <div className="reveal lg:col-span-3">
            <p className="mb-8 max-w-sm text-[12px] font-light uppercase leading-5 tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Independent designer shaping identities, editorial systems, and image-led digital experiences.
            </p>
            <h1 className="max-w-6xl text-balance text-[64px] font-bold leading-[0.88] tracking-normal sm:text-[88px] lg:text-[128px]">
              Quiet systems for bold visual stories.
            </h1>
          </div>
          <div className="reveal flex items-end lg:justify-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border-b border-neutral-950 pb-2 text-[12px] font-semibold uppercase tracking-[0.16em] transition duration-200 ease-out hover:border-[#9b6a35] hover:text-[#9b6a35] dark:border-neutral-50"
            >
              View selected work
              <ArrowUpRight
                size={16}
                className="transition duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel index="01" label="Featured Projects" />
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="group reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <ProjectImage
                  gradient={project.image}
                  className="aspect-[5/4]"
                />
                <div className="mt-5 grid gap-4 border-t border-black/15 pt-4 dark:border-white/15 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="mb-2 text-[12px] font-light uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      {project.type} / {project.year}
                    </p>
                    <h2 className="text-[32px] font-semibold leading-none tracking-normal">
                      {project.title}
                    </h2>
                  </div>
                  <p className="max-w-sm text-base leading-7 text-neutral-600 dark:text-neutral-300">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel index="02" label="Project Gallery" />
          <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {galleryProjects.map((project, index) => (
              <article
                key={project.title}
                className="group reveal"
                style={{ transitionDelay: `${(index % 4) * 60}ms` }}
              >
                <div className={`overflow-hidden ${project.ratio}`}>
                  <div
                    className={`h-full w-full transition duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-80 ${project.tone}`}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 border-t border-black/15 pt-3 dark:border-white/15">
                  <div>
                    <h3 className="text-base font-semibold tracking-normal">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[12px] font-light uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      {project.type}
                    </p>
                  </div>
                  <span className="text-[12px] font-light text-neutral-500 dark:text-neutral-400">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="playground" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-4">
          <SectionLabel index="03" label="Experimental / Playground" />
          <div className="reveal lg:col-span-3">
            <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.05] tracking-normal">
              Small studies that keep the commercial work precise, current, and alive.
            </h2>
            <div className="mt-10 grid gap-px bg-black/15 dark:bg-white/15 sm:grid-cols-2">
              {experiments.map((item) => (
                <div
                  key={item}
                  className="min-h-36 bg-[#f6f5f1] p-5 text-base leading-7 text-neutral-700 transition duration-200 ease-out hover:text-[#9b6a35] dark:bg-[#090909] dark:text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-4">
          <SectionLabel index="04" label="About" />
          <div className="reveal lg:col-span-2">
            <h2 className="text-[32px] font-semibold leading-[1.05] tracking-normal">
              I build visual systems that feel calm at first glance and richer the longer you stay.
            </h2>
          </div>
          <div className="reveal space-y-5 text-base leading-7 text-neutral-600 dark:text-neutral-300">
            <p>
              My practice sits between art direction, editorial design, and digital systems. The work is intentionally spare: fewer gestures, stronger hierarchy, and enough room for the project to breathe.
            </p>
            <p>
              I partner with studios, founders, and cultural teams who need identities and websites with clarity, restraint, and visual memory.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-[1440px] border-t border-black/15 pt-5 dark:border-white/15">
          <div className="grid gap-8 lg:grid-cols-4">
            <p className="text-[12px] font-light uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Contact
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.05] tracking-normal lg:col-span-2">
              Available for selected identity, editorial, and portfolio systems.
            </h2>
            <div className="flex items-start lg:justify-end">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-3 border-b border-neutral-950 pb-2 text-[12px] font-semibold uppercase tracking-[0.16em] transition duration-200 ease-out hover:border-[#9b6a35] hover:text-[#9b6a35] dark:border-neutral-50"
              >
                Start a conversation
                <Mail size={15} />
              </a>
            </div>
          </div>
          <p className="mt-20 text-[12px] font-light uppercase tracking-[0.18em] text-neutral-400">
            © 2026 Mira Chen. Design portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}
