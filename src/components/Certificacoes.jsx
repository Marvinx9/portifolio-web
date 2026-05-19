import Reveal from './Reveal';

const education = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Estácio',
    status: 'Em andamento',
    current: true,
  },
  {
    degree: 'Bacharelado em Engenharia Mecânica',
    institution: 'Unifanor',
    status: 'Concluído',
    current: false,
  },
]

const certifications = [
  'Java – Raro Academy',
  'Python Avançado',
  'Agentes de IA com Python, OpenAI, Hugging Face e LangChain',
  'Desenvolvimento Web com Python – Flask e Django',
  'React – Rocketseat Ignite',
  'Node.js – Rocketseat',
  'AWS Re/Start',
  'SQL para Consulta e Análise de Dados',
  'Git',
]

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  )
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

export default function Certificacoes() {
  return (
    <section id="certificacoes" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Formação */}
          <Reveal direction="left">
          <div>
            <div className="flex items-center gap-2 text-[#00d4d8] mb-8">
              <GraduationIcon />
              <h2 className="text-xl font-bold text-[#e8e8e8] tracking-tight">Formação</h2>
            </div>

            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="border border-[#1e3a4a] bg-[#0a1520]/60 rounded-xl p-5
                             hover:border-[#00d4d8]/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-[#e8e8e8] font-bold text-sm leading-snug">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="flex-shrink-0 px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded
                                       bg-[#00d4d8]/15 text-[#00d4d8] border border-[#00d4d8]/30">
                        Cursando
                      </span>
                    )}
                  </div>
                  <p className="text-[#00d4d8] text-xs font-mono mb-1">{edu.institution}</p>
                  <p className="text-[#4a4a4a] text-xs font-mono">{edu.status}</p>
                </div>
              ))}
            </div>
          </div>
          </Reveal>

          {/* Right — Cursos e Certificações */}
          <Reveal direction="right" delay={150}>
          <div>
            <div className="flex items-center gap-2 text-[#00d4d8] mb-8">
              <BadgeIcon />
              <h2 className="text-xl font-bold text-[#e8e8e8] tracking-tight">Cursos e Certificações</h2>
            </div>

            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 border border-[#1e1e1e] bg-[#0f0f0f] rounded-xl px-4 py-3
                             hover:border-[#00d4d8]/30 transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00d4d8]
                                   shadow-[0_0_6px_rgba(0,212,216,0.7)]" />
                  <span className="text-[#e8e8e8] text-sm font-mono">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
