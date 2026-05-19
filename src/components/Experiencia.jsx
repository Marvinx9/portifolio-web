import Reveal from "./Reveal";

const experiences = [
  {
    role: "Desenvolvedor Back-End Júnior",
    company: "ICC Saúde",
    location: "Fortaleza, CE",
    start: "Jan/2025",
    end: "Atual",
    current: true,
    description:
      "Desenvolvimento de soluções back-end com Python, FastAPI, Flask, Django e Java/Spring Boot. Atuação com IA aplicada, Google Cloud, RAG, LangChain, PgVector, automações, Docker, testes, correção de bugs críticos e reuniões com clientes.",
    stack: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "Java",
      "Spring Boot",
      "Google Cloud",
      "RAG",
      "LangChain",
      "PgVector",
      "Docker",
    ],
  },
  {
    role: "Estágio em Desenvolvimento Back-End",
    company: "Liv Saúde",
    location: "Fortaleza, CE",
    start: "Fev/2024",
    end: "Dez/2024",
    current: false,
    description:
      "Desenvolvimento de aplicações back-end com Node.js, SQL e Python/FastAPI. Integração com modelos de linguagem no Google Cloud, implementação de RAG com LangChain e PgVector, testes unitários com Vitest e uso de Git Flow.",
    stack: [
      "Node.js",
      "Python",
      "FastAPI",
      "SQL",
      "Google Cloud",
      "RAG",
      "LangChain",
      "PgVector",
      "Vitest",
      "Git Flow",
    ],
  },
];

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5"
    >
      <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header — centered */}
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8e8] tracking-tight text-center mb-20">
            Experiência
          </h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px
                          bg-gradient-to-b from-[#00d4d8]/70 via-[#00d4d8]/40 to-transparent"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} direction="up" delay={i * 150}>
                <div className="relative flex items-start">
                  {/* ── Mobile layout ── */}
                  <div className="md:hidden w-full pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-4 -translate-x-1/2 top-5 z-10 flex items-center justify-center
                                    w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#00d4d8]
                                    shadow-[0_0_10px_rgba(0,212,216,0.7)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4d8]" />
                    </div>
                    <Card exp={exp} />
                  </div>

                  {/* ── Desktop layout ── */}
                  <div className="hidden md:flex w-full items-start">
                    {/* Dot centered on the line */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-5 z-10 flex items-center justify-center
                                    w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#00d4d8]
                                    shadow-[0_0_10px_rgba(0,212,216,0.7)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4d8]" />
                    </div>

                    {isLeft ? (
                      <>
                        {/* Card on the left */}
                        <div className="w-1/2 pr-12 flex justify-end">
                          <Card exp={exp} />
                        </div>
                        {/* Connector line left→center */}
                        <div className="absolute left-[calc(50%-3rem)] top-[1.625rem] w-12 h-px bg-[#00d4d8]/30" />
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="w-1/2" />
                        {/* Connector line center→right */}
                        <div className="absolute left-1/2 top-[1.625rem] w-12 h-px bg-[#00d4d8]/30" />
                        {/* Card on the right */}
                        <div className="w-1/2 pl-12">
                          <Card exp={exp} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom terminator */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bottom-0
                          w-2 h-2 -translate-x-1/2 rounded-full bg-[#00d4d8]/30
                          shadow-[0_0_6px_rgba(0,212,216,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ exp }) {
  return (
    <div
      className="w-full max-w-md min-w-0 border border-[#1e1e1e] bg-[#0f0f0f]/90 rounded-md p-5
                    hover:border-[#00d4d8]/30 transition-all duration-300"
    >
      {/* Date + badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#00d4d8]">
          <CalendarIcon />
        </span>
        <span className="text-xs font-mono text-[#8a8a8a]">
          {exp.start} - {exp.end}
        </span>
        {exp.current && (
          <span
            className="ml-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded
                           bg-[#00d4d8]/15 text-[#00d4d8] border border-[#00d4d8]/30"
          >
            Atual
          </span>
        )}
      </div>

      {/* Role */}
      <h3 className="text-[#e8e8e8] font-bold text-base leading-snug mb-2">
        {exp.role}
      </h3>

      {/* Company */}
      <div className="flex items-center gap-1.5 text-[#00d4d8] mb-1">
        <BuildingIcon />
        <span className="text-xs font-mono">{exp.company}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[#4a4a4a] mb-4">
        <PinIcon />
        <span className="text-xs font-mono">{exp.location}</span>
      </div>

      {/* Description */}
      <p className="text-[#8a8a8a] text-xs leading-relaxed mb-4">
        {exp.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-mono text-[#8a8a8a]
                       border border-[#1e1e1e] bg-[#111] rounded-sm
                       hover:border-[#00d4d8]/30 hover:text-[#00d4d8] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
