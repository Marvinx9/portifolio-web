import { useState } from "react";
import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "afraniodantas0224@gmail.com",
    href: "mailto:afraniodantas0224@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "/in/afranionunesdantas",
    href: "https://www.linkedin.com/in/afranionunesdantas/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "/afranio-dantas",
    href: "https://github.com/Marvinx9",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:afraniodantas0224@gmail.com?subject=Contato via Portfolio - ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8e8] tracking-tight text-center mb-16">
            Contato
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <Reveal direction="left" delay={150}>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#e8e8e8] mb-3">
                  Vamos conversar?
                </h3>
                <p className="text-[#8a8a8a] text-sm leading-relaxed">
                  Estou aberto a novas oportunidades, projetos freelance e
                  colaborações. Se você tem algo interessante em mente ou quer
                  apenas trocar uma ideia, fique à vontade para entrar em
                  contato.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4
                             border border-[#1e3a4a] bg-[#0a1520]/60 rounded-xl
                             hover:border-[#00d4d8]/50 hover:bg-[#0a1520]
                             transition-all duration-300 group"
                  >
                    <span className="text-[#00d4d8]/60 group-hover:text-[#00d4d8] transition-colors">
                      {icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono text-[#4a4a4a] uppercase tracking-widest mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm font-mono text-[#8a8a8a] group-hover:text-[#e8e8e8] transition-colors truncate">
                        {value}
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-4 h-4 text-[#2a2a2a] group-hover:text-[#00d4d8] transition-all group-hover:translate-x-1 flex-shrink-0"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal direction="right" delay={150}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                {
                  name: "name",
                  label: "Nome",
                  type: "text",
                  placeholder: "Seu nome",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "seu@email.com",
                },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-[10px] font-mono text-[#4a4a4a] uppercase tracking-widest mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-[#0a1520]/60 border border-[#1e3a4a] text-[#e8e8e8] text-sm font-mono
                             px-4 py-3 rounded-xl outline-none
                             focus:border-[#00d4d8]/50 focus:bg-[#0a1520]
                             placeholder:text-[#2a2a2a] transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-mono text-[#4a4a4a] uppercase tracking-widest mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem..."
                  required
                  rows={6}
                  className="w-full bg-[#0a1520]/60 border border-[#1e3a4a] text-[#e8e8e8] text-sm font-mono
                           px-4 py-3 rounded-xl outline-none resize-none
                           focus:border-[#00d4d8]/50 focus:bg-[#0a1520]
                           placeholder:text-[#2a2a2a] transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#00d4d8] text-[#0a0a0a] font-mono font-semibold text-sm
                         rounded-xl hover:bg-white transition-all duration-300
                         shadow-[0_0_30px_rgba(0,212,216,0.2)] hover:shadow-[0_0_40px_rgba(0,212,216,0.4)]"
              >
                {sent ? "✓ Mensagem enviada!" : "Enviar Mensagem"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-[#1e1e1e]
                      flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center"
      >
        <span className="text-xs font-mono text-[#8a8a8a]">
          © {new Date().getFullYear()} - Afrânio Nunes Dantas
        </span>
        <span className="hidden sm:block text-[#2a2a2a] select-none">·</span>
        <span className="text-xs font-mono text-[#8a8a8a]">
          Desenvolvedor Full-Stack + IA Aplicada
        </span>
        <span className="hidden sm:block text-[#2a2a2a] select-none">·</span>
        <span className="flex items-center gap-1.5 text-xs font-mono text-[#00d4d8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4d8] shadow-[0_0_5px_rgba(0,212,216,0.7)]" />
          Fortaleza - CE, Brasil
        </span>
      </div>
    </section>
  );
}
