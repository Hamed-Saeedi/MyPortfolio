import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-300/15 bg-[#050a18] px-5 py-8 shadow-[0_-8px_35px_rgba(37,99,235,0.07)] sm:px-8">
      {/* Top blue light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/80 to-transparent shadow-[0_0_18px_rgba(59,130,246,0.7)]" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-20 left-[15%] h-40 w-64 rounded-full bg-blue-600/[0.08] blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-64 rounded-full bg-indigo-500/[0.07] blur-[80px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-1 text-xl font-extrabold tracking-tight text-white transition duration-300 hover:text-blue-100"
        >
          hamed
          <span className="text-blue-400 transition group-hover:text-blue-200 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
            .
          </span>
        </Link>

        {/* Credit */}
        <p className="flex items-center gap-2 text-center text-xs text-slate-400 sm:text-sm">
          <Sparkles size={14} className="shrink-0 text-blue-300/70" />
          Designed &amp; built by{" "}
          <span className="font-medium text-slate-200">Hamed Saeedi</span>
        </p>

        {/* Copyright */}
        <span className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
          © {new Date().getFullYear()}
          <Link
            to="/"
            aria-label="Back to home"
            className="ml-1 rounded-lg border border-blue-300/15 p-1.5 text-slate-400 transition hover:border-blue-300/40 hover:bg-blue-400/10 hover:text-blue-200"
          >
            <ArrowUpRight size={14} />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
