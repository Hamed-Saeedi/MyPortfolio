import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  LogOut,
  FolderKanban,
  ArrowLeft,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

function Admin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          navigate("/login", { replace: true });
          return;
        }

        const data = await response.json();
        setEmail(data.admin.email);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, [navigate]);

  async function handleLogout() {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      navigate("/login", { replace: true });
    }
  }

  if (loading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050a18] px-6 text-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative flex flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-300">
            <ShieldCheck size={28} className="animate-pulse" />
          </div>

          <p className="text-sm text-blue-200/70">Checking access...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a18] px-5 pb-24 pt-28 text-white sm:px-8 sm:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="absolute -left-40 top-[40%] h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.6)]" />

        <div className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_15px_4px_rgba(96,165,250,0.5)]" />

        <div className="absolute left-[22%] top-[72%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(191,219,254,0.5)]" />

        <div className="absolute right-[12%] top-[68%] h-1 w-1 rounded-full bg-blue-200 shadow-[0_0_12px_3px_rgba(96,165,250,0.5)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-blue-200/70 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Dashboard Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-4 flex items-center gap-2 text-blue-300">
              <ShieldCheck size={22} />
              <span className="text-xs font-semibold tracking-[0.25em]">
                ADMIN AREA
              </span>
              <Sparkles size={15} className="text-blue-200/70" />
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Admin{" "}
              <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="mt-4 break-all text-sm text-slate-400">
              Welcome back, <span className="text-blue-200">{email}</span>
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-blue-300/20 bg-blue-500/5 px-5 py-3 text-sm font-medium text-blue-200 transition duration-300 hover:border-blue-300/40 hover:bg-blue-500/15 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] sm:self-center"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Dashboard Card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 shadow-[0_0_60px_rgba(37,99,235,0.08)] backdrop-blur-xl sm:mt-14 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.10)]">
              <FolderKanban size={26} />
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-bold sm:text-2xl">
                Portfolio Management
              </h2>

              <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                Admin
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Your admin dashboard is ready. Project management features can be
              added here whenever you need them.
            </p>

            <div className="mt-8 h-px bg-gradient-to-r from-blue-400/30 via-blue-300/10 to-transparent" />

            <div className="mt-6 flex items-start gap-3 text-sm text-slate-400">
              <LockKeyhole
                size={18}
                className="mt-0.5 shrink-0 text-blue-300"
              />

              <p className="leading-6">
                You are viewing the protected administration area. Your session
                is verified by the backend.
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-slate-600">
          <span className="text-blue-300/60">●</span> Secure Admin Area
        </p>
      </div>
    </main>
  );
}

export default Admin;
