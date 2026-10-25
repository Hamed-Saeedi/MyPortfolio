import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-400/[0.12] text-blue-200 shadow-[inset_0_0_15px_rgba(59,130,246,0.05)]"
        : "text-slate-400 hover:bg-blue-400/[0.06] hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-blue-300/15 bg-[#050a18]/85 shadow-[0_8px_35px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
      {/* Top light line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-3xl" />

      <nav className="relative mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-16 xl:px-20">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Hamed Saeedi home"
        >
          <span className="relative grid size-10 place-items-center rounded-xl border border-blue-300/30 bg-gradient-to-br from-blue-400/[0.15] to-indigo-500/[0.08] text-sm font-extrabold tracking-tight text-blue-200 transition duration-300 group-hover:border-blue-200/70 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.22)]">
            HS<span className="text-white">.</span>
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-wide text-white transition group-hover:text-blue-100">
              Hamed Saeedi
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.17em] text-slate-500">
              <span className="h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_7px_#60a5fa]" />
              Frontend Developer
            </span>
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_10px_#60a5fa]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Admin Login */}
        <NavLink
          to="/login"
          className="group hidden shrink-0 items-center gap-2 rounded-xl border border-blue-300/25 bg-blue-400/[0.06] px-4 py-3 text-xs font-semibold text-blue-200 transition duration-300 hover:border-blue-200/60 hover:bg-blue-400 hover:text-[#050a18] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] md:inline-flex"
        >
          <Sparkles size={14} />
          Admin Login
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </NavLink>
        {/* Mobile / tablet menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-blue-300/20 bg-blue-400/[0.05] text-slate-200 transition hover:border-blue-300/50 hover:bg-blue-400/10 hover:text-blue-200 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile / tablet menu */}
      {menuOpen && (
        <div className="relative border-t border-blue-300/15 bg-[#050a18]/95 px-5 pb-5 pt-3 backdrop-blur-2xl sm:px-8 lg:hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm transition duration-300 ${
                    isActive
                      ? "border-blue-300/15 bg-blue-400/10 text-blue-200"
                      : "border-transparent text-slate-300 hover:border-blue-300/10 hover:bg-blue-400/[0.06] hover:text-white"
                  }`
                }
              >
                {link.name}
                <ArrowUpRight size={15} className="opacity-50" />
              </NavLink>
            ))}

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl border border-blue-300/25 bg-blue-400/[0.07] px-4 py-3.5 text-sm font-semibold text-blue-200 transition hover:bg-blue-400 hover:text-[#050a18]"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={15} />
                Admin Login
              </span>
              <ArrowUpRight size={16} />
            </NavLink>

            <p className="mt-4 px-4 text-[10px] uppercase tracking-[0.18em] text-slate-600">
              Designed &amp; built by Hamed Saeedi
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
