import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  GraduationCap,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Focused on building clean, responsive, and user-friendly web interfaces.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Improving my skills through practice, coursework, and educational projects.",
  },
  {
    icon: Layers3,
    title: "Project-Based Practice",
    description:
      "Applying what I learn by building practical projects and improving them step by step.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a18] px-5 pb-24 pt-32 text-slate-100 sm:px-8 lg:px-12">
      {/* Background Lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.16] blur-[140px]" />
        <div className="absolute right-[-180px] top-[500px] h-[400px] w-[400px] rounded-full bg-sky-400/[0.08] blur-[130px]" />
        <div className="absolute left-[-200px] top-[1000px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.10] blur-[130px]" />
        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.8)]" />
        <div className="absolute right-[15%] top-[12%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(147,197,253,0.7)]" />
        <div className="absolute right-[8%] top-[42%] h-1 w-1 rounded-full bg-sky-200 shadow-[0_0_12px_3px_rgba(125,211,252,0.8)]" />
        <div className="absolute left-[7%] top-[65%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(147,197,253,0.6)]" />
        <div className="absolute right-[20%] top-[82%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.7)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page Heading */}
        <section className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Get To Know Me
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            A little about{" "}
            <span className="bg-gradient-to-r from-blue-300 via-white to-sky-400 bg-clip-text text-transparent">
              me.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My journey in computer science, my interest in frontend development,
            and the projects that help me grow.
          </p>
        </section>

        {/* Introduction */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="group relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 shadow-[0_0_45px_rgba(30,64,175,0.08)] backdrop-blur-xl transition duration-300 hover:border-blue-300/30 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/[0.12] blur-[90px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-400/[0.10] shadow-[0_0_25px_rgba(59,130,246,0.12)]">
                <Sparkles className="text-blue-300" size={25} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Who I Am
              </p>

              <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                Computer Science Student &{" "}
                <span className="text-blue-300">Frontend Developer.</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                  I am a Computer Science student interested in frontend
                  development and creating clear, user-friendly web experiences.
                </p>

                <p>
                  I am building my skills through learning and educational
                  projects, using each project as an opportunity to practice,
                  solve problems, and improve my understanding of web
                  development.
                </p>

                <p>
                  My goal is to keep growing as a frontend developer and create
                  websites that are responsive, useful, and easy to navigate.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.18)] transition hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
                >
                  View My Projects
                  <ArrowDownRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition hover:border-blue-300/50 hover:bg-blue-400/[0.08] hover:text-blue-200"
                >
                  Contact Me
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="flex flex-col gap-4">
            <div className="group relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 backdrop-blur-xl transition duration-300 hover:border-blue-300/35 sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/[0.08] blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <GraduationCap className="text-blue-300" size={22} />
                  <h2 className="text-lg font-semibold">Education</h2>
                </div>

                <div className="border-l border-blue-400/50 pl-5">
                  <p className="text-base font-medium text-slate-100">
                    Computer Science
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    University student building a foundation in computing and
                    software development.
                  </p>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 backdrop-blur-xl transition duration-300 hover:border-blue-300/35 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Globe className="text-blue-300" size={21} />
                <h2 className="text-lg font-semibold">Language</h2>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">English</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Communication and learning
                  </p>
                </div>

                <span className="rounded-full border border-blue-300/25 bg-blue-400/[0.08] px-3 py-1.5 text-xs text-blue-200">
                  Advanced
                </span>
              </div>
            </div>

            {/* Current Focus */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 backdrop-blur-xl transition duration-300 hover:border-blue-300/35 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="text-blue-300" size={21} />
                <h2 className="text-lg font-semibold">Current Focus</h2>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                Frontend development, responsive layouts, React components, and
                practical web projects.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              What Drives Me
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              How I Keep{" "}
              <span className="bg-gradient-to-r from-blue-300 to-sky-100 bg-clip-text text-transparent">
                Growing.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-blue-300/15 bg-[#0b1428]/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_10px_35px_rgba(37,99,235,0.10)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/[0.08] blur-3xl transition group-hover:bg-blue-400/[0.15]" />

                  <div className="relative">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.08] text-blue-300 transition group-hover:border-blue-300/40 group-hover:bg-blue-400/[0.14]">
                      <Icon size={22} />
                    </div>

                    <p className="mb-3 text-xs text-slate-600">0{index + 1}</p>

                    <h3 className="text-lg font-semibold text-slate-100 transition group-hover:text-blue-200">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Meta Certificate */}
        <section className="group relative mt-20 overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#101f3d] via-[#0b1428] to-[#070b17] p-7 shadow-[0_0_50px_rgba(37,99,235,0.08)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-blue-400/[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-px w-2/3 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <GraduationCap className="text-blue-300" size={24} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Certificate
                </span>
              </div>

              <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                Meta Front-End Developer
              </h2>

              <p className="mt-3 text-sm text-slate-400 sm:text-base">
                Coursera
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Completed the Meta Front-End Developer certificate program to
                support my learning journey in web development.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center self-start rounded-2xl border border-blue-300/25 bg-blue-400/[0.08] shadow-[0_0_30px_rgba(59,130,246,0.12)] transition duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.22)] md:self-center">
              <GraduationCap size={43} className="text-blue-200" />
            </div>
          </div>
        </section>
        {/* Bottom CTA */}
        <section className="mt-16 flex flex-col justify-between gap-5 border-t border-blue-200/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Want to see what I build?</h2>
            <p className="mt-2 text-sm text-slate-400">
              Explore my educational and personal projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-blue-300 transition hover:text-sky-100"
          >
            Explore Projects
            <ArrowUpRight size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}
