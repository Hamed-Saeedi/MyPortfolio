import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";
import heroImage from "../assets/hamed-hero.jpg";

const stars = [
  { top: "10%", left: "12%", size: 3 },
  { top: "17%", left: "78%", size: 2 },
  { top: "27%", left: "25%", size: 2 },
  { top: "35%", left: "90%", size: 3 },
  { top: "45%", left: "8%", size: 2 },
  { top: "55%", left: "83%", size: 2 },
  { top: "65%", left: "18%", size: 3 },
  { top: "73%", left: "92%", size: 2 },
  { top: "82%", left: "35%", size: 2 },
  { top: "90%", left: "70%", size: 3 },
  { top: "12%", left: "48%", size: 2 },
  { top: "38%", left: "65%", size: 2 },
  { top: "77%", left: "8%", size: 2 },
  { top: "93%", left: "48%", size: 2 },
];

function Home() {
  return (
    <main className="home-page relative overflow-hidden">
      <div className="home-stars" aria-hidden="true">
        {stars.map((star, index) => (
          <span
            key={index}
            className="home-star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      <div className="home-top-glow" aria-hidden="true" />
      <div className="home-blue-glow" aria-hidden="true" />

      <section className="relative z-10 grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        {/* Introduction */}
        <div className="flex items-center px-6 py-16 sm:px-12 lg:py-20 xl:px-16">
          <div className="mx-auto w-full max-w-xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-sky-300">
              <span className="size-2 rounded-full bg-sky-300 shadow-[0_0_12px_#7dd3fc]" />
              Computer Science Student
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl xl:text-7xl">
              Hey, I’m
              <br />
              <span className="home-name-glow text-sky-300">Hamed Saeedi</span>
              <br />
              <span className="text-3xl font-semibold text-slate-200 sm:text-4xl">
                Frontend Developer
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-300 sm:text-base">
              I build modern, responsive web experiences with clean code and
              thoughtful design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="home-primary-button inline-flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                Explore My Work
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-sky-200/40 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-sky-400/10 hover:text-sky-200"
              >
                Contact Me
              </Link>
            </div>

            <p className="mt-12 text-xs text-slate-400">
              Based in Herat, Afghanistan
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden px-5 py-14 sm:min-h-[600px] lg:min-h-[650px]">
          <div className="home-portrait-glow" aria-hidden="true" />

          <div className="relative flex w-full max-w-lg items-center justify-center">
            <div className="home-orbit home-orbit-one" aria-hidden="true" />
            <div className="home-orbit home-orbit-two" aria-hidden="true" />
            {/* Clean portrait without technology labels */}
            <div className="home-portrait-frame relative z-10 size-[270px] overflow-hidden rounded-full border-[3px] border-sky-100/80 bg-slate-900 shadow-[0_0_45px_rgba(56,189,248,0.18)] sm:size-[340px] lg:size-[320px] xl:size-[360px]">
              <img
                src={heroImage}
                alt="Hamed Saeedi"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Small coding icon */}
            <div className="absolute bottom-2 right-3 z-20 flex size-14 items-center justify-center rounded-2xl border border-sky-200/30 bg-sky-500 text-white shadow-[0_0_30px_rgba(56,189,248,0.45)] sm:bottom-5 sm:right-2">
              <Code2 size={28} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
