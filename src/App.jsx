import { useState } from "react";
import heroImage from "./assets/hamed-hero.jpg";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Mail,
  Menu,
  X,
  Download,
} from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and modern web interfaces.",
    level: 75,
    status: "Learning",
  },
  {
    name: "HTML",
    description: "Semantic structure, forms and accessibility basics.",
    level: 90,
    status: "Confident",
  },
  {
    name: "CSS",
    description: "Flexbox, Grid, responsive layouts and animations.",
    level: 85,
    status: "Confident",
  },
  {
    name: "JavaScript",
    description: "ES6+, arrays, DOM, events and asynchronous code.",
    level: 65,
    status: "Learning",
  },
  {
    name: "React",
    description: "Components, props, state, hooks and routing.",
    level: 60,
    status: "Learning",
  },
];

const projects = [
  {
    title: "Movie Explorer",
    category: "React Application",
    description:
      "A movie discovery interface with reusable components and navigation.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Cafe Order Builder",
    category: "JavaScript Application",
    description:
      "A responsive ordering interface with search, filters and cart logic.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Jami University",
    category: "Website Design",
    description:
      "A university website concept built with reusable React sections.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85",
    tech: ["React", "CSS"],
  },
];

const glass =
  "border border-orange-200/[0.14] bg-[#382116]/65 backdrop-blur-xl";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-orange-400 bg-gradient-to-r from-orange-300 to-orange-500 px-5 text-xs font-extrabold text-stone-950 shadow-[0_0_25px_rgba(255,135,55,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,135,55,0.4)]";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigation(id) {
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:saeedidaneshyar@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="relative mx-auto my-3 w-[calc(100%-20px)] max-w-[1240px] overflow-hidden rounded-[26px] border border-orange-200/15 bg-[#21130d]/95 px-5 text-stone-100 shadow-[0_15px_70px_rgba(0,0,0,0.4)] sm:my-6 sm:w-[calc(100%-48px)] sm:rounded-[28px] sm:px-8 lg:px-12">
      {/* Header */}
      <header className="sticky top-0 z-50 flex min-h-[76px] items-center justify-between gap-3 border-b border-orange-200/10 bg-[#21130d]/95 backdrop-blur-2xl sm:min-h-[88px] sm:gap-5">
        <button
          className="shrink-0 text-2xl font-extrabold tracking-[-1.5px]"
          onClick={() => handleNavigation("home")}
        >
          hamed<span className="text-orange-400">.</span>
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-[calc(100%+8px)] flex-col gap-1 rounded-2xl border border-orange-400/20 bg-[#2a190f] p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-1 md:rounded-full md:border-orange-200/10 md:bg-[#382116]/65 md:p-1.5 md:shadow-none`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`rounded-full px-4 py-3 text-left text-xs font-semibold transition duration-300 md:py-2.5 ${
                activeSection === item.id
                  ? "bg-orange-400/15 text-orange-300"
                  : "text-stone-300 hover:bg-orange-400/10 hover:text-orange-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="inline-flex items-center gap-2 rounded-xl border border-orange-400/50 bg-orange-400/10 px-3 py-3 text-xs font-bold text-orange-300 transition hover:bg-orange-400 hover:text-stone-950 sm:px-4"
          >
            <Download size={15} />
            <span className="hidden sm:inline">My Resume</span>
          </a>

          <button
            className={`grid size-11 place-items-center rounded-xl border border-orange-200/15 bg-[#382116]/65 md:hidden ${
              menuOpen ? "text-orange-300" : "text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="grid scroll-mt-24 items-center gap-12 py-16 sm:py-20 lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-16"
      >
        <div>
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2px] text-orange-300">
            <span className="size-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
            Computer Science Student
          </p>

          <h1 className="text-[clamp(40px,7vw,66px)] font-extrabold leading-[1.13] tracking-[-2.8px]">
            Hey, I’m <span className="text-orange-400">Hamed</span>
            <br />
            <span className="text-[0.78em] font-semibold tracking-[-1.5px]">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-8 text-stone-300">
            I build modern, responsive web experiences with clean code and
            thoughtful design.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              className={primaryButton}
              onClick={() => handleNavigation("projects")}
            >
              Explore my work <ArrowRight size={17} />
            </button>

            <button
              aria-label="Contact me"
              onClick={() => handleNavigation("contact")}
              className={`grid size-12 place-items-center rounded-xl text-orange-300 transition hover:border-orange-400 hover:bg-orange-400/15 ${glass}`}
            >
              <Mail size={19} />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 text-[11px] text-stone-400">
            <span>Based in Herat, Afghanistan</span>
            <button
              onClick={() => handleNavigation("skills")}
              className="inline-flex items-center gap-2 text-orange-300 transition hover:text-orange-200"
            >
              Discover more <ArrowDown size={14} />
            </button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative isolate mx-auto grid min-h-[390px] w-full max-w-[440px] place-items-center sm:min-h-[440px]">
          <div className="absolute -z-10 size-[85%] rounded-full bg-orange-600/30 blur-[100px]" />

          <div className="absolute size-[85%] rounded-full border border-orange-400/25 [transform:rotate(-25deg)_scaleY(.75)]" />

          <div className="absolute size-full rounded-full border border-dashed border-orange-400/15 [transform:rotate(35deg)_scaleY(.6)]" />

          <span
            className={`absolute left-0 top-[12%] z-10 rounded-xl px-4 py-3 text-xs font-extrabold text-orange-200 shadow-xl ${glass}`}
          >
            HTML
          </span>

          <span
            className={`absolute right-0 top-[27%] z-10 rounded-xl px-4 py-3 text-xs font-extrabold text-orange-200 shadow-xl ${glass}`}
          >
            CSS
          </span>

          <span
            className={`absolute bottom-[20%] left-0 z-10 rounded-xl px-4 py-3 text-xs font-extrabold text-orange-200 shadow-xl ${glass}`}
          >
            JS
          </span>

          <span
            className={`absolute bottom-[10%] right-[6%] z-10 rounded-xl px-4 py-3 text-xs font-extrabold text-orange-200 shadow-xl ${glass}`}
          >
            {"</>"}
          </span>

          <div className="relative z-0 aspect-[0.86] w-[76%] max-w-[325px] overflow-hidden rounded-t-[48%] rounded-b-3xl border border-orange-300/50 bg-gradient-to-br from-orange-900 to-[#21130d] shadow-[0_0_55px_rgba(255,135,55,0.22)]">
            <img
              src={heroImage}
              alt="Hamed Saeedi"
              className="size-full object-cover object-top transition duration-700 hover:scale-[1.04]"
            />
          </div>

          <div
            className={`absolute bottom-[1%] right-0 z-20 flex items-center gap-3 rounded-2xl p-4 shadow-2xl sm:right-[-5px] ${glass}`}
          >
            <Code2 className="text-orange-400" size={22} />
            <div>
              <strong className="block text-[11px]">Building & Learning</strong>
              <span className="mt-1 block text-[10px] text-stone-300">
                One project at a time
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-orange-200/10 py-20 sm:py-24"
      >
        <div className="mb-10 max-w-xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-orange-300">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-1.8px] sm:text-5xl">
            My <span className="text-orange-400">Skills</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-300">
            Technologies I use and skills I’m developing along the way.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className={`group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_35px_rgba(255,135,55,0.12)] ${glass}`}
            >
              <div className="absolute left-6 top-0 h-px w-14 bg-orange-400 shadow-[0_0_12px_#ff8737]" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-bold">{skill.name}</h3>

                <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1.5 text-[9px] text-orange-200">
                  {skill.status}
                </span>
              </div>
              <p className="mb-6 mt-4 min-h-10 text-xs leading-6 text-stone-300">
                {skill.description}
              </p>

              <div
                role="progressbar"
                aria-label={`${skill.name} skill level`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
                className="h-2 overflow-hidden rounded-full border border-orange-200/10 bg-[#1c110b] shadow-inner"
              >
                <div
                  style={{ width: `${skill.level}%` }}
                  className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-200 shadow-[0_0_9px_#ff8737,0_0_18px_rgba(255,135,55,0.65)]"
                >
                  <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-orange-200/10 py-20 sm:py-24"
      >
        <div className="mb-10 max-w-xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-orange-300">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-1.8px] sm:text-5xl">
            Featured <span className="text-orange-400">Projects</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-300">
            A selection of projects from my development journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-orange-400/40 hover:shadow-[0_15px_35px_rgba(255,135,55,0.10)] ${glass}`}
            >
              <div className="relative h-48 overflow-hidden bg-[#392116]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#160c07]/90 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-lg border border-orange-200/20 bg-[#21130d]/85 px-3 py-2 text-[9px] text-orange-200 backdrop-blur-lg">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold">{project.title}</h3>

                <p className="mt-3 min-h-[66px] text-xs leading-6 text-stone-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-orange-200/15 bg-[#21130d]/40 px-2.5 py-1.5 text-[9px] text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Hamed-Saeedi"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold text-orange-300 transition hover:text-orange-200"
                >
                  View on GitHub <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* About */}
      <section
        id="about"
        className="grid scroll-mt-24 items-center gap-10 border-t border-orange-200/10 py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14"
      >
        <div className="mx-auto grid aspect-square w-44 place-items-center rounded-[30%] border border-orange-400/30 bg-[radial-gradient(circle,rgba(255,135,55,0.24),transparent_70%)] text-orange-400 shadow-[0_0_55px_rgba(255,135,55,0.14)] sm:w-60">
          <Code2 size={48} />
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-orange-300">
            A LITTLE ABOUT ME
          </p>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-1.8px] sm:text-5xl">
            Learning today.
            <br />
            Building for <span className="text-orange-400">tomorrow.</span>
          </h2>

          <p className="my-6 max-w-xl text-sm leading-8 text-stone-300">
            I’m Hamed Saeedi, a Computer Science student passionate about web
            development. I enjoy turning ideas into useful, responsive
            interfaces while improving my skills through hands-on projects.
          </p>

          <button
            className={primaryButton}
            onClick={() => handleNavigation("contact")}
          >
            Let’s connect <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-orange-200/10 py-20 sm:py-24"
      >
        <div className="mb-10 max-w-xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-orange-300">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-1.8px] sm:text-5xl">
            Let’s work <span className="text-orange-400">together.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-300">
            Have a question or an idea? Send me a message.
          </p>
        </div>

        <form onSubmit={handleContactSubmit} className="grid max-w-2xl gap-5">
          <label className="grid gap-2 text-xs font-semibold text-stone-200">
            Your name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              minLength={2}
              maxLength={60}
              required
              className="rounded-xl border border-orange-200/15 bg-[#382116]/55 px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-400 focus:border-orange-400/70 focus:ring-4 focus:ring-orange-400/10"
            />
          </label>

          <label className="grid gap-2 text-xs font-semibold text-stone-200">
            Your email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="rounded-xl border border-orange-200/15 bg-[#382116]/55 px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-400 focus:border-orange-400/70 focus:ring-4 focus:ring-orange-400/10"
            />
          </label>

          <label className="grid gap-2 text-xs font-semibold text-stone-200">
            Your message
            <textarea
              name="message"
              placeholder="Tell me about your idea..."
              minLength={10}
              maxLength={2000}
              rows={5}
              required
              className="resize-y rounded-xl border border-orange-200/15 bg-[#382116]/55 px-4 py-4 text-sm text-white outline-none transition placeholder:text-stone-400 focus:border-orange-400/70 focus:ring-4 focus:ring-orange-400/10"
            />
          </label>

          <button
            type="submit"
            className={`${primaryButton} justify-self-start`}
          >
            Send message <ArrowRight size={17} />
          </button>
        </form>
        <div className="mt-8 flex gap-3">
          <a
            href="https://github.com/Hamed-Saeedi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={`grid size-11 place-items-center rounded-xl text-stone-300 transition hover:border-orange-400 hover:text-orange-300 ${glass}`}
          >
            <Code2 size={19} />
          </a>

          <a
            href="mailto:saeedidaneshyar@gmail.com"
            aria-label="Email"
            className={`grid size-11 place-items-center rounded-xl text-stone-300 transition hover:border-orange-400 hover:text-orange-300 ${glass}`}
          >
            <Mail size={19} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-orange-200/10 py-7">
        <button
          onClick={() => handleNavigation("home")}
          className="text-xl font-extrabold tracking-tight"
        >
          hamed<span className="text-orange-400">.</span>
        </button>

        <p className="text-center text-[11px] text-stone-400">
          Designed & built by Hamed Saeedi.
        </p>

        <span className="text-[11px] text-stone-400">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}

export default App;
