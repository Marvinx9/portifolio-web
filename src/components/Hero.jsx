import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const SUBTITLE = "Desenvolvedor Full-Stack + IA Aplicada";

const actionButtons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/afranionunesdantas/",
    floatClass: "float-1",
    gradient:
      "radial-gradient(circle at 35% 30%, #1a9fd8 0%, #0077b5 55%, #005a8a 100%)",
    shadow: "0 20px 50px rgba(0,119,181,0.55), 0 8px 20px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 drop-shadow-lg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Marvinx9",
    floatClass: "float-2",
    gradient:
      "radial-gradient(circle at 35% 30%, #8080e0 0%, #5c6bc0 55%, #3f4a99 100%)",
    shadow: "0 20px 50px rgba(92,107,192,0.55), 0 8px 20px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 drop-shadow-lg">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: "mailto:afraniodantas0224@gmail.com",
    floatClass: "float-3",
    gradient:
      "radial-gradient(circle at 35% 30%, #26e0cc 0%, #00b8a9 55%, #00837a 100%)",
    shadow: "0 20px 50px rgba(0,184,169,0.55), 0 8px 20px rgba(0,0,0,0.6)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7 drop-shadow-lg"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Ver Projetos",
    href: "#projetos",
    floatClass: "float-4",
    gradient:
      "radial-gradient(circle at 35% 30%, #5ce088 0%, #2ecc71 55%, #1fa355 100%)",
    shadow: "0 20px 50px rgba(46,204,113,0.55), 0 8px 20px rgba(0,0,0,0.6)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="w-7 h-7 drop-shadow-lg"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Baixar CV",
    href: "#",
    floatClass: "float-5",
    gradient:
      "radial-gradient(circle at 35% 30%, #33d6f5 0%, #00b8d4 55%, #0087a0 100%)",
    shadow: "0 20px 50px rgba(0,184,212,0.55), 0 8px 20px rgba(0,0,0,0.6)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7 drop-shadow-lg"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < SUBTITLE.length) {
        timeout = setTimeout(
          () => setDisplayed(SUBTITLE.slice(0, displayed.length + 1)),
          65,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 3500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* glow cyan sutil no lado esquerdo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,212,216,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <Reveal direction="left" delay={100}>
            <div>
              {/* Avatar circle */}
              <div
                className="mb-8 w-44 h-44 rounded-full border-2 border-[#00d4d8] relative overflow-hidden bg-[#111]"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(0,212,216,0.2), 0 0 40px rgba(0,212,216,0.12)",
                }}
              >
                <img
                  src="/avatar.jpeg"
                  alt="Afrânio Nunes Dantas"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-6xl font-bold text-[#e8e8e8] leading-tight mb-5 tracking-tight">
                Afrânio Nunes
                <br />
                <span
                  className="text-[#00d4d8]"
                  style={{ textShadow: "0 0 40px rgba(0,212,216,0.35)" }}
                >
                  Dantas
                </span>
              </h1>

              {/* Typewriter subtitle */}
              <div className="h-7 flex items-center mb-5">
                <p className="text-[#e8e8e8] font-mono text-lg">
                  {displayed}
                  <span
                    className="inline-block w-0.5 h-5 bg-[#00d4d8] ml-0.5 align-middle"
                    style={{
                      animation: "typewriter-cursor 0.9s step-end infinite",
                    }}
                  />
                </p>
              </div>

              {/* Description */}
              <p className="text-[#8a8a8a] text-base leading-relaxed mb-4">
                Construo APIs, automações e soluções com IA para resolver
                problemas reais.
              </p>

              {/* Tags */}
              <p className="text-[#4a4a4a] text-sm leading-relaxed font-mono">
                Desenvolvedor Back-End com experiência em Python, FastAPI,
                Node.js, Java/Spring Boot, Docker, GCP, AWS, RAG, LangChain e
                PgVector.
              </p>
            </div>
          </Reveal>

          {/* Right column — 3D levitating buttons */}
          <Reveal direction="right" delay={250}>
            <div className="grid grid-cols-2 gap-10 justify-items-center">
              {actionButtons.map(
                ({ label, href, floatClass, gradient, shadow, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`flex flex-col items-center gap-3 group ${floatClass}`}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden
                              transition-transform duration-300 group-hover:scale-110"
                      style={{ background: gradient, boxShadow: shadow }}
                    >
                      {/* specular highlight — simulates 3D gloss */}
                      <div
                        className="absolute top-2 left-3 w-7 h-4 rounded-full opacity-30"
                        style={{
                          background:
                            "radial-gradient(ellipse, white 0%, transparent 80%)",
                        }}
                      />
                      {icon}
                    </div>
                    <span className="text-xs font-mono text-[#00d4d8] tracking-widest">
                      {label}
                    </span>
                  </a>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
