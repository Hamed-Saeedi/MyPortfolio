import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      navigate("/admin");
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to server. Make sure the backend is running."
          : err.message,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a18] px-5 pb-20 pt-28 text-white sm:px-8 sm:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -left-40 top-[35%] h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.6)]" />
        <div className="absolute right-[18%] top-[24%] h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_15px_4px_rgba(96,165,250,0.5)]" />
        <div className="absolute left-[22%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(191,219,254,0.5)]" />
        <div className="absolute right-[12%] top-[72%] h-1 w-1 rounded-full bg-blue-200 shadow-[0_0_12px_3px_rgba(96,165,250,0.5)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-blue-200/70 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/80 p-7 shadow-[0_0_60px_rgba(37,99,235,0.10)] backdrop-blur-xl sm:p-9">
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px]" />

          <div className="relative">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
              <LockKeyhole size={28} />
            </div>

            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-blue-300">
              <Sparkles size={15} />
              ADMIN ACCESS
            </div>

            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back
            </h1>

            <p className="mb-8 text-sm leading-6 text-slate-400">
              Sign in securely to access your admin dashboard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-blue-200/10 bg-[#060d1c]/80 px-4 transition focus-within:border-blue-400/60 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.08)]">
                  <Mail size={18} className="shrink-0 text-blue-300" />

                  <input
                    type="email"
                    required
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-blue-200/10 bg-[#060d1c]/80 px-4 transition focus-within:border-blue-400/60 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.08)]">
                  <LockKeyhole size={18} className="shrink-0 text-blue-300" />

                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 text-slate-500 transition hover:text-blue-200"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-sm leading-5 text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.20)] transition duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
                {!loading && (
                  <ArrowLeft
                    size={17}
                    className="rotate-180 transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>

            <div className="my-7 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-blue-300/70" />
              Authorized administrators only.
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Secure access · Admin Dashboard
        </p>
      </div>
    </main>
  );
}
