import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Send,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";

const email = "saeedidaneshyar@gmail.com";
const telegramUsername = "CyberScope1";
const whatsappNumber = "93704332296";

const whatsappMessage =
  "Hi! I found your portfolio and would like to connect with you.";

const contactMethods = [
  {
    title: "Email",
    subtitle: "For inquiries and opportunities",
    value: email,
    action: "Send an Email",
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    title: "Telegram",
    subtitle: "Let's connect on Telegram",
    value: `@${telegramUsername}`,
    action: "Message on Telegram",
    href: `https://t.me/${telegramUsername}`,
    icon: Send,
  },
  {
    title: "WhatsApp",
    subtitle: "Start a direct conversation",
    value: "+" + whatsappNumber,
    action: "Chat on WhatsApp",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    icon: MessageCircle,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a18] px-5 pb-24 pt-32 text-slate-100 sm:px-8 lg:px-12">
      {/* Background Lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.16] blur-[140px]" />
        <div className="absolute right-[-180px] top-[500px] h-[400px] w-[400px] rounded-full bg-sky-400/[0.08] blur-[130px]" />
        <div className="absolute left-[-200px] top-[1100px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.10] blur-[130px]" />
        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.8)]" />
        <div className="absolute right-[15%] top-[12%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(147,197,253,0.7)]" />
        <div className="absolute right-[8%] top-[42%] h-1 w-1 rounded-full bg-sky-200 shadow-[0_0_12px_3px_rgba(125,211,252,0.8)]" />
        <div className="absolute left-[7%] top-[65%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(147,197,253,0.6)]" />
        <div className="absolute right-[20%] top-[82%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(147,197,253,0.7)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Get In Touch
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Let's start a{" "}
                <span className="bg-gradient-to-r from-blue-300 via-white to-sky-400 bg-clip-text text-transparent">
                  conversation.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Have a question, an idea, or an opportunity to discuss? Feel
                free to reach out. I'd be happy to connect with you.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-blue-300/15 bg-[#0b1428]/80 p-5 backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/[0.10] blur-3xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.08]">
                  <Clock size={21} className="text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Open to Connections</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Questions, collaboration, and learning opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mb-20">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Contact Options
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Choose how to <span className="text-blue-300">reach me.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.title}
                  className="group relative overflow-hidden rounded-2xl border border-blue-300/15 bg-[#0b1428]/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_10px_35px_rgba(37,99,235,0.10)] sm:p-7"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/[0.07] blur-2xl transition group-hover:bg-blue-400/[0.15]" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/[0.08] transition group-hover:bg-blue-400/[0.14]">
                      <Icon size={25} className="text-blue-300" />
                    </div>
                    <span className="text-xs text-slate-600">0{index + 1}</span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {method.subtitle}
                    </p>
                    <p className="mt-5 break-all text-sm text-slate-200">
                      {method.value}
                    </p>
                  </div>

                  <a
                    href={method.href}
                    target={method.title === "Email" ? undefined : "_blank"}
                    rel={
                      method.title === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="relative mt-7 inline-flex w-full items-center justify-between gap-3 rounded-xl border border-blue-200/15 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-300/40 hover:bg-blue-400/[0.07] hover:text-blue-200"
                  >
                    {method.action}
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>

          {/* Copy Email */}
          <div className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-blue-300/15 bg-[#0b1428]/80 p-5 backdrop-blur-xl sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Mail size={19} className="shrink-0 text-blue-300" />
              <div>
                <p className="text-sm font-medium">Prefer to copy my email?</p>
                <p className="mt-1 break-all text-xs text-slate-400">{email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-blue-200/15 px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-300/40 hover:text-blue-200 sm:self-auto"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-300/15 bg-[#0b1428]/85 p-6 backdrop-blur-xl sm:p-9">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[80px]" />

            <div className="relative">
              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Send a Message
                </p>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Tell me about it.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Fill in the details below to prepare an email message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-blue-200/10 bg-[#060d1c] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-blue-200/10 bg-[#060d1c] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full rounded-xl border border-blue-200/10 bg-[#060d1c] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-xl border border-blue-200/10 bg-[#060d1c] px-4 py-3 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-blue-300/30 bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.15)] transition hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)] sm:w-auto"
                >
                  Prepare Email
                  <ArrowUpRight size={17} />
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  This form opens your email application with the message
                  prepared. It does not send or store messages on this website.
                </p>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="flex flex-col gap-5">
            <div className="group relative flex-1 overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#101f3d] via-[#0b1428] to-[#070b17] p-7 backdrop-blur-xl sm:p-9">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/[0.12] blur-[100px]" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-400/[0.08]">
                  <MessageCircle size={25} className="text-blue-300" />
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Let's Connect
                </p>

                <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                  Every good project starts with a{" "}
                  <span className="text-blue-300">conversation.</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Whether you want to discuss a web project, share an idea, or
                  simply connect, you can reach me through any of the contact
                  options on this page.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-300/30 px-5 py-3 text-sm font-medium text-blue-200 transition hover:bg-blue-400/[0.10] hover:border-blue-300/50"
                >
                  <MessageCircle size={17} />
                  Start a Conversation
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-300/15 bg-[#0b1428]/80 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.08]">
                  <MapPin size={20} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Herat, Afghanistan
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Available for online communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer CTA */}
        <section className="mt-16 flex flex-col justify-between gap-5 border-t border-blue-200/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Thanks for stopping by.</h2>
            <p className="mt-2 text-sm text-slate-400">
              I look forward to hearing from you.
            </p>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-blue-300 transition hover:text-sky-100"
          >
            Send an Email
            <ArrowDownRight size={17} />
          </a>
        </section>
      </div>
    </main>
  );
}
