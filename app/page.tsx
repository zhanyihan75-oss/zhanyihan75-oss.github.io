import {
  ArrowRight,
  BriefcaseBusiness,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Sparkles,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = ["Work", "Services", "About", "Contact"];

const projects = [
  {
    name: "Atlas Studio",
    kind: "Analytics platform",
    year: "2026",
    accent: "bg-teal-500",
    description:
      "Led the redesign of a team analytics workspace with cleaner dashboards, faster filtering, and more confident decision paths.",
    stats: ["42% faster queries", "18 core flows"],
  },
  {
    name: "Northline",
    kind: "Commerce operations",
    year: "2025",
    accent: "bg-rose-500",
    description:
      "Built an operations console for inventory planning, supplier status, and exception handling across multiple regions.",
    stats: ["9 markets", "31% fewer escalations"],
  },
  {
    name: "PulseKit",
    kind: "Design system",
    year: "2024",
    accent: "bg-amber-400",
    description:
      "Created a typed component library with accessible primitives, motion tokens, and documentation for product teams.",
    stats: ["74 components", "AA contrast"],
  },
];

const services = [
  "Product strategy",
  "Interface systems",
  "Frontend architecture",
  "Prototyping",
  "Performance tuning",
  "Launch support",
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Motion",
  "Testing",
];

function ProjectPreview() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl animate-float-slow overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-4 shadow-2xl shadow-teal-900/20 dark:border-white/10">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-[#f8f7f2] text-zinc-950 dark:bg-zinc-900 dark:text-white">
        <div className="flex h-12 items-center justify-between border-b border-zinc-200 px-4 dark:border-white/10">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-teal-400" />
          </div>
          <div className="h-2 w-28 rounded-full bg-zinc-200 dark:bg-white/15" />
        </div>

        <div className="grid flex-1 grid-cols-[0.7fr_1fr] gap-4 p-4">
          <div className="flex flex-col justify-between rounded-2xl bg-zinc-100 p-4 dark:bg-white/8">
            <div>
              <div className="mb-4 h-3 w-16 rounded-full bg-teal-500" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded-full bg-zinc-300 dark:bg-white/20" />
                <div className="h-3 w-4/5 rounded-full bg-zinc-300 dark:bg-white/20" />
                <div className="h-3 w-2/3 rounded-full bg-zinc-300 dark:bg-white/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square rounded-xl bg-teal-500/20" />
              <div className="aspect-square rounded-xl bg-rose-500/20" />
            </div>
          </div>

          <div className="grid grid-rows-[1fr_0.75fr] gap-4">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-950 p-4 text-white">
              <div className="absolute inset-x-4 top-4 h-24 rounded-2xl bg-[linear-gradient(135deg,#14b8a6,#f97316)] opacity-90" />
              <div className="relative mt-28 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-xl bg-white/15" />
                <div className="h-16 rounded-xl bg-white/25" />
                <div className="h-16 rounded-xl bg-white/15" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-amber-300 p-3 text-zinc-950">
                <div className="mb-8 h-2 w-12 rounded-full bg-zinc-950/40" />
                <div className="text-2xl font-black">98</div>
              </div>
              <div className="rounded-2xl bg-teal-500 p-3 text-white">
                <div className="mb-8 h-2 w-10 rounded-full bg-white/45" />
                <div className="text-2xl font-black">24k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/10 bg-[#f7f7f4]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#10100f]/75">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-sm text-white dark:bg-white dark:text-zinc-950">
              MC
            </span>
            <span>Mira Chen</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-teal-700 dark:hover:text-teal-200">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-teal-200 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="surface-grid relative min-h-screen pt-24">
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700 backdrop-blur dark:border-white/15 dark:bg-white/8 dark:text-zinc-200">
              <MapPin size={15} />
              Available for select product teams
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-normal text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
              Product engineer for sharp, human web apps.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I design and build responsive interfaces where strategy, interaction, and production code meet with a little elegance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                View work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-6 py-3 font-semibold text-zinc-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-950 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:border-white/40"
              >
                Contact <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:160ms]">
            <ProjectPreview />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900/10 bg-zinc-950 py-4 text-white dark:border-white/10">
        <div className="flex overflow-hidden">
          <div className="flex min-w-full animate-marquee gap-8 whitespace-nowrap pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-8">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              </span>
            ))}
          </div>
          <div className="flex min-w-full animate-marquee gap-8 whitespace-nowrap pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300" aria-hidden="true">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-copy-${index}`} className="flex items-center gap-8">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                <BriefcaseBusiness size={16} /> Selected work
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
                Interfaces built for speed, clarity, and daily use.
              </h2>
            </div>
            <p className="max-w-xl text-zinc-700 dark:text-zinc-300">
              Recent projects span SaaS dashboards, operational tools, and design systems for teams moving from prototype to production.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group animate-fade-up rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-500 dark:border-white/10 dark:bg-white/7"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className={`h-3 w-12 rounded-full ${project.accent}`} />
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{project.year}</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  {project.kind}
                </p>
                <h3 className="mt-3 text-2xl font-black">{project.name}</h3>
                <p className="mt-4 min-h-28 leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-white/10 dark:text-zinc-300"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/65 px-5 py-24 dark:bg-white/5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rose-700 dark:text-rose-300">
              <Layers3 size={16} /> Services
            </p>
            <h2 className="text-4xl font-black tracking-normal sm:text-5xl">From fuzzy product bets to shipped experiences.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex min-h-20 items-center gap-4 rounded-2xl border border-zinc-200 bg-[#f7f7f4] p-5 font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-rose-400 dark:border-white/10 dark:bg-zinc-950/60"
              >
                <Sparkles className="text-rose-500" size={20} />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
              <MousePointer2 size={16} /> About
            </p>
            <h2 className="max-w-4xl text-4xl font-black tracking-normal sm:text-5xl">
              I work where design taste meets engineering leverage.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>
              My best work happens with founders and product leaders who need a thoughtful partner: someone who can clarify the interface, build the system, and keep an eye on the moments that make a product feel trustworthy.
            </p>
            <p>
              I care about fast feedback loops, durable components, clean motion, and the small details that make complex tools feel calm.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] bg-zinc-950 p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
              <Zap size={16} /> Now booking
            </p>
            <h2 className="max-w-2xl text-4xl font-black tracking-normal sm:text-5xl">
              Have a product worth making feel exceptional?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              title="Email"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              title="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              title="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
