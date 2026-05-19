import { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "./Reveal";

const FILTERS = ["Todos", "IA aplicada", "Back-End", "Front-End"];

const projects = [
  {
    title: "Money Server",
    category: "Back-End",
    summary:
      "API back-end com Node.js, PostgreSQL e Docker para gerenciamento de dados financeiros.",
    stack: ["Node.js", "PostgreSQL", "Docker", "SQL"],
    github: "https://github.com/afranio-dantas",
    demo: null,
  },
  {
    title: "Loja API",
    category: "Back-End",
    summary:
      "API REST desenvolvida com Java e Spring Boot contendo funcionalidades de uma loja.",
    stack: ["Java", "Spring Boot", "JPA", "REST API"],
    github: "https://github.com/afranio-dantas",
    demo: null,
  },
  {
    title: "Login Spring Security",
    category: "Back-End",
    summary:
      "API com CRUD de usuários, autenticação, login e recuperação de conta.",
    stack: ["Java", "Spring Boot", "Spring Security"],
    github: "https://github.com/afranio-dantas",
    demo: null,
  },
  {
    title: "RAG com LangChain",
    category: "IA aplicada",
    summary:
      "Pipeline de Retrieval-Augmented Generation com LangChain, PgVector e Google Cloud para Q&A sobre documentos.",
    stack: ["Python", "LangChain", "PgVector", "Google Cloud", "FastAPI"],
    github: "https://github.com/afranio-dantas",
    demo: null,
  },
  {
    title: "Automação com IA",
    category: "IA aplicada",
    summary:
      "Automações de processos internos com modelos de linguagem, integração de APIs e workflows inteligentes.",
    stack: ["Python", "FastAPI", "LLMs", "Docker"],
    github: "https://github.com/afranio-dantas",
    demo: null,
  },
  {
    title: "Portfolio Web",
    category: "Front-End",
    summary:
      "Este portfólio! Desenvolvido com React + Vite + Tailwind CSS seguindo design do Figma.",
    stack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/afranio-dantas",
    demo: "#",
  },
];

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconChevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-5 h-5"
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                    border border-[#1e3a4a] bg-[#0a1520]/80 rounded-xl p-5 flex flex-col gap-3
                    hover:border-[#00d4d8]/50 hover:scale-[1.03] transition-all duration-300
                    shadow-[0_0_0_1px_rgba(0,212,216,0.05)] min-h-[310px]"
    >
      {/* Title + icons */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[#e8e8e8] font-bold text-base leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0 text-[#4a4a4a]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00d4d8] transition-colors"
          >
            <IconGithub />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00d4d8] transition-colors"
            >
              <IconExternal />
            </a>
          )}
        </div>
      </div>

      {/* Category badge */}
      <span
        className="self-start px-2.5 py-0.5 text-[11px] font-mono text-[#00d4d8]
                       border border-[#00d4d8]/50 rounded-md bg-[#00d4d8]/5"
      >
        {project.category}
      </span>

      {/* Solução */}
      <div>
        <span className="text-xs font-mono text-[#00d4d8]">Solução:</span>
        <p className="text-[#8a8a8a] text-sm leading-relaxed mt-1">
          {project.summary}
        </p>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[11px] font-mono text-[#e8e8e8]
                                   border border-[#2a2a2a] rounded-md bg-[#111]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projetos() {
  const [filter, setFilter] = useState("Todos");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const intervalRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  const maxIndex = Math.max(0, filtered.length - visibleCount);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    setIndex(0);
  }, [filter]);
  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  useEffect(() => {
    if (paused || filtered.length <= visibleCount) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [paused, next, filtered.length, visibleCount]);

  return (
    <section id="projetos" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8e8] tracking-tight text-center mb-10">
            Projetos
          </h2>
        </Reveal>

        {/* Filter tabs */}
        <Reveal direction="up" delay={100}>
          <div className="flex justify-center gap-2 flex-wrap mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm font-mono transition-all duration-200
                ${
                  filter === f
                    ? "bg-[#00d4d8] text-[#0a0a0a] font-semibold"
                    : "border border-[#2a2a2a] text-[#8a8a8a] hover:border-[#00d4d8]/40 hover:text-[#e8e8e8]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal direction="up" delay={200}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#0a0a0a]
                       flex items-center justify-center text-[#8a8a8a]
                       hover:border-[#00d4d8]/60 hover:text-[#00d4d8] transition-all"
            >
              <IconChevron dir="left" />
            </button>

            {/* Cards window */}
            <div className="overflow-hidden py-4 -my-4">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    visibleCount === 1
                      ? `translateX(calc(-${index} * (100% + 24px)))`
                      : visibleCount === 2
                        ? `translateX(calc(-${index} * (50% + 12px)))`
                        : `translateX(calc(-${index} * (100% / 3 + 8px)))`,
                }}
              >
                {filtered.map((p, i) => (
                  <ProjectCard key={i} project={p} />
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#0a0a0a]
                       flex items-center justify-center text-[#8a8a8a]
                       hover:border-[#00d4d8]/60 hover:text-[#00d4d8] transition-all"
            >
              <IconChevron dir="right" />
            </button>
          </div>
        </Reveal>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300
                ${index === i ? "w-6 h-2 bg-[#00d4d8]" : "w-2 h-2 bg-[#2a2a2a] hover:bg-[#00d4d8]/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
