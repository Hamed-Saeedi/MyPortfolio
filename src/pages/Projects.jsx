import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  GitFork,
  Layers3,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Community Event Planner",
    category: "Full Stack",
    number: "01",
    description:
      "A community event platform where users can explore events and submit registrations, with MongoDB storage and an admin view.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Hamed-Saeedi/cummunity-event-planner",
    demo: "https://cummunity-events-planner.netlify.app/",
    featured: true,
    visual: "cep",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "Frontend",
    number: "02",
    description:
      "A personal portfolio designed to present my skills, selected projects, and journey as a frontend developer.",
    technologies: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/Hamed-Saeedi",
    demo: "",
    featured: false,
    visual: "portfolio",
  },
  {
    id: 3,
    title: "Cafe Order Builder",
    category: "Frontend",
    number: "03",
    description:
      "A simple interactive cafe ordering experience with a menu, item availability, and order total calculation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Hamed-Saeedi",
    demo: "",
    featured: false,
    visual: "cafe",
  },
];

const filters = ["All", "Frontend", "Full Stack"];

function ProjectVisual({ type }) {
  return (
    <div className="relative flex h-full min-h-[230px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d203b] via-[#091426] to-[#050a14] p-6">
      <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-500/15 blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-sky-400/10 blur-[70px]" />

      {type === "cep" && (
        <div className="relative w-full max-w-sm -rotate-2 rounded-xl border border-sky-200/20 bg-[#0b1729] p-4 shadow-2xl transition duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-sky-400 text-xs font-black text-[#04101e]">
                C
              </span>
              <span className="text-xs font-bold text-slate-100">
                Community Events
              </span>
            </div>
            <div className="flex gap-1">
              <span className="size-1.5 rounded-full bg-red-400/70" />
              <span className="size-1.5 rounded-full bg-amber-300/70" />
              <span className="size-1.5 rounded-full bg-emerald-400/70" />
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
            Discover something new
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            Find your next event.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-sky-200/10 bg-white/[0.03] p-3">
              <div className="mb-3 h-12 rounded-md bg-sky-400/15" />
              <div className="h-2 w-4/5 rounded bg-slate-500/50" />
              <div className="mt-2 h-1.5 w-2/5 rounded bg-sky-300/60" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#050a14]">
      {/* Page heading */}
      <section className="relative overflow-hidden border-b border-sky-200/10">
        <div className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full bg-sky-500/[0.09] blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-14 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/[0.06] px-3 py-2 text-xs text-sky-200">
            <Sparkles size={14} />
            Selected work & experiments
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                A few things I've built
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Selected
                <br />
                <span className="bg-gradient-to-r from-sky-200 to-blue-500 bg-clip-text text-transparent">
                  Projects.
                </span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-8 text-slate-400 sm:text-base">
              A collection of projects where I practice, experiment, and turn
              ideas into working web experiences. Each project is another step
              in my development journey.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Layers3 size={17} className="mr-1 text-sky-300" />
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2.5 text-xs font-medium transition duration-300 ${
                  activeFilter === filter
                    ? "border-sky-300 bg-sky-400 text-[#04101e] shadow-[0_0_18px_rgba(56,189,248,0.2)]"
                    : "border-sky-200/10 bg-white/[0.02] text-slate-400 hover:border-sky-400/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-white">
              {String(visibleProjects.length).padStart(2, "0")}
            </span>{" "}
            projects
          </p>
          <p className="hidden text-xs uppercase tracking-widest text-slate-600 sm:block">
            Design · Development · Learning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-sky-200/10 bg-[#091426]/90 transition duration-500 hover:-translate-y-1.5 hover:border-sky-400/35 hover:shadow-2xl hover:shadow-blue-950/30"
            >
              <div className="relative">
                <ProjectVisual type={project.visual} number={project.number} />
                <span className="absolute left-4 top-4 rounded-full border border-sky-200/15 bg-[#050a14]/80 px-3 py-1.5 text-[10px] font-medium tracking-wide text-slate-200 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold tracking-tight text-white transition group-hover:text-sky-200">
                    {project.title}
                  </h2>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300"
                  />
                </div>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-sky-200/[0.09] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-sky-100/[0.08] pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-sky-200/15 px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-sky-300/40 hover:text-sky-200"
                  >
                    <GitFork size={15} />
                    GitHub
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 px-3 py-2.5 text-xs font-bold text-white transition hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex cursor-default items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2.5 text-xs text-slate-500">
                      Demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-sky-300/20 bg-gradient-to-br from-[#0d203a] via-[#091426] to-[#050a14] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute -right-12 -top-20 size-64 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Have an idea?
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let's build something useful.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
              I'm always learning and open to meaningful projects and
              opportunities to grow.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative mt-7 inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] lg:mt-0"
          >
            Get in Touch
            <ArrowDownRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Projects;
