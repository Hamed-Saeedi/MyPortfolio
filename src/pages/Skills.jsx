import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Globe,
  Layers3,
  Monitor,
  Wrench,
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    symbol: "HTML",
    description: "Building the structure of web pages.",
    level: "Comfortable",
  },
  {
    name: "CSS3",
    category: "Frontend",
    symbol: "CSS",
    description: "Styling layouts and creating responsive designs.",
    level: "Comfortable",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    symbol: "JS",
    description: "Learning interactive and dynamic web development.",
    level: "Learning",
  },
  {
    name: "React",
    category: "Frontend",
    symbol: "Re",
    description: "Building user interfaces with reusable components.",
    level: "Learning",
  },
  {
    name: "Java",
    category: "Programming",
    symbol: "Ja",
    description: "Studied Java fundamentals and object-oriented programming.",
    level: "Basic",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    symbol: "Git",
    description: "Managing code and working with repositories.",
    level: "Learning",
  },
  {
    name: "VS Code",
    category: "Tools",
    symbol: "VS",
    description: "My main code editor for development.",
    level: "Comfortable",
  },
];

const filters = ["All Skills", "Frontend", "Programming", "Tools"];

const stars = [
  { top: "8%", left: "12%" },
  { top: "15%", left: "83%" },
  { top: "29%", left: "94%" },
  { top: "39%", left: "5%" },
  { top: "55%", left: "88%" },
  { top: "67%", left: "14%" },
  { top: "78%", left: "73%" },
  { top: "91%", left: "35%" },
  { top: "23%", left: "48%" },
  { top: "48%", left: "62%" },
  { top: "85%", left: "92%" },
  { top: "62%", left: "45%" },
];

function getCategoryIcon(category) {
  if (category === "Frontend") return Globe;
  if (category === "Programming") return Code2;
  return Wrench;
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All Skills");

  const filteredSkills =
    activeFilter === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a14] px-5 pb-24 pt-28 text-slate-100 sm:px-8 lg:px-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[850px] max-w-full -translate-x-1/2 rounded-full bg-blue-500/[0.16] blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-[35%] h-80 w-80 rounded-full bg-sky-500/[0.08] blur-[100px]" />

      {/* Small white stars */}
      <div className="pointer-events-none absolute inset-0">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute size-[3px] rounded-full bg-white/70 shadow-[0_0_8px_rgba(191,219,254,0.8)]"
            style={{ top: star.top, left: star.left }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page Header and Skills */}
        <section className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-300 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              My Expertise
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Skills &{" "}
                <span className="bg-gradient-to-r from-sky-200 to-blue-500 bg-clip-text text-transparent">
                  Technologies.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                The tools and technologies I use while learning and building for
                the web.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeFilter === filter
                      ? "border-sky-300/50 bg-sky-400/10 text-sky-200"
                      : "border-sky-200/10 text-slate-400 hover:border-sky-300/30 hover:text-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => {
              const CategoryIcon = getCategoryIcon(skill.category);

              return (
                <article
                  key={skill.name}
                  className="group relative overflow-hidden rounded-2xl border border-sky-200/10 bg-[#0a1424]/80 p-6 transition hover:-translate-y-1 hover:border-sky-300/30"
                >
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/[0.07] text-lg font-bold text-sky-300 transition group-hover:border-sky-300/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]">
                      {skill.symbol}
                    </div>
                    <span className="rounded-full border border-sky-200/10 px-3 py-1 text-[10px] text-slate-400">
                      {skill.category}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-xl font-semibold text-slate-100 transition group-hover:text-sky-200">
                      {skill.name}
                    </h3>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                      {skill.description}
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between border-t border-sky-100/[0.08] pt-4">
                    <div className="flex items-center gap-2">
                      <CategoryIcon size={14} className="text-sky-300" />
                      <span className="text-xs text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Learning Section */}
        <section className="relative mt-20 overflow-hidden rounded-3xl border border-sky-300/20 bg-gradient-to-br from-[#0d203a] via-[#091426] to-[#050a14] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/[0.10] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-1 w-1/3 bg-sky-300/30 blur-xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3 text-sky-300">
                <Layers3 size={20} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  My Journey
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Learning. Building.{" "}
                <span className="bg-gradient-to-r from-sky-200 to-blue-400 bg-clip-text text-transparent">
                  Improving.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                I am focused on strengthening my frontend development skills
                through practice and educational projects. Every project is an
                opportunity to learn something new and improve my code.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(37,99,235,0.2)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] md:self-center"
            >
              Explore My Projects
              <ArrowDownRight size={18} />
            </Link>
          </div>
        </section>
        {/* Bottom Link */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-sky-200/10 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Monitor size={17} className="text-sky-300" />
            <span>Focused on frontend development</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-300"
          >
            Let&apos;s Connect
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
