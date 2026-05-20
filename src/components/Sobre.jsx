import * as SimpleIcons from "simple-icons";
import Reveal from "./Reveal";

const techStack = [
  {
    name: "Python",
    floatClass: "float-1",
    gradient:
      "radial-gradient(circle at 35% 30%, #4b8bbe 0%, #306998 55%, #1e4d6b 100%)",
    shadow: "0 16px 40px rgba(48,105,152,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.887S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.131V3.19S18.28 0 11.914 0zm-3.2 1.849a1.047 1.047 0 110 2.094 1.047 1.047 0 010-2.094z" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.133S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.131v5.342S5.72 24 12.086 24zm3.2-1.849a1.047 1.047 0 110-2.094 1.047 1.047 0 010 2.094z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    floatClass: "float-2",
    gradient:
      "radial-gradient(circle at 35% 30%, #1adfb8 0%, #009688 55%, #006b5e 100%)",
    shadow: "0 16px 40px rgba(0,150,136,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d={SimpleIcons.siFastapi.path} />
      </svg>
    ),
  },
  {
    name: "Flask",
    floatClass: "float-3",
    gradient:
      "radial-gradient(circle at 35% 30%, #555 0%, #1a1a1a 55%, #000 100%)",
    shadow: "0 16px 40px rgba(80,80,80,0.55), 0 6px 16px rgba(0,0,0,0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d={SimpleIcons.siFlask.path} />
      </svg>
    ),
  },
  {
    name: "Django",
    floatClass: "float-4",
    gradient:
      "radial-gradient(circle at 35% 30%, #2e7d52 0%, #092e1f 55%, #051a12 100%)",
    shadow: "0 16px 40px rgba(9,46,31,0.7), 0 6px 16px rgba(0,0,0,0.7)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v11.109c0 3.849-.28 5.695-1.096 7.287-.764 1.541-1.783 2.516-3.876 3.596l-3.646-1.732c2.093-1.02 3.112-1.926 3.749-3.314.638-1.414.842-3.01.842-7.261V6.06h4.027zm-4.001-5.985h4.027V4.1h-4.027V.075z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    floatClass: "float-5",
    gradient:
      "radial-gradient(circle at 35% 30%, #6bbf47 0%, #3c873a 55%, #235223 100%)",
    shadow: "0 16px 40px rgba(60,135,58,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d={SimpleIcons.siNodedotjs.path} />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    floatClass: "float-1",
    gradient:
      "radial-gradient(circle at 35% 30%, #6e9fcf 0%, #336791 55%, #1f4060 100%)",
    shadow: "0 16px 40px rgba(51,103,145,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d={SimpleIcons.siPostgresql.path} />
      </svg>
    ),
  },
  {
    name: "Docker",
    floatClass: "float-2",
    gradient:
      "radial-gradient(circle at 35% 30%, #4ab8f7 0%, #0db7ed 55%, #0986bb 100%)",
    shadow: "0 16px 40px rgba(13,183,237,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.212-.223-.443-.432-.689-.621-.953-.683-2.049-1.461-3.962-1.504-.196-1.177-.78-2.258-1.69-3.099l-.288-.278-.301.268c-.592.538-.982 1.208-1.164 2.007-.164.719-.12 1.51.136 2.285a5.17 5.17 0 01-.63.038H1.033a.188.188 0 00-.188.186 9.68 9.68 0 00.55 3.29 5.97 5.97 0 001.626 2.475 8.255 8.255 0 004.9 1.428 12.91 12.91 0 001.958-.148 8.59 8.59 0 002.728-.98 7.065 7.065 0 002.297-2.056 11.07 11.07 0 001.333-2.814 5.53 5.53 0 003.083-.501c.84-.436 1.46-1.142 1.618-2.047l.057-.31z" />
      </svg>
    ),
  },
  {
    name: "Java",
    floatClass: "float-3",
    gradient:
      "radial-gradient(circle at 35% 30%, #6b9bcf 0%, #4a7dbf 55%, #2c5a9a 100%)",
    shadow: "0 16px 40px rgba(74,125,191,0.55), 0 6px 16px rgba(0,0,0,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.891 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    ),
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <Reveal direction="left">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e8e8e8] tracking-tight">
              Sobre
            </h2>
            <div className="flex-1 h-px bg-[#1e1e1e] ml-4" />
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal direction="up" delay={150}>
          <div className="max-w-3xl mb-16">
            <p className="text-[#8a8a8a] text-base leading-relaxed mb-6">
              Sou desenvolvedor full stack com experiência no desenvolvimento de
              APIs, integrações, automações e soluções com IA aplicada. Atuo com{" "}
              <span className="text-[#e8e8e8]">
                Python, FastAPI, Node.js, Java Spring Boot, Docker, Google
                Cloud, AWS, Oracle, PostgreSQL
              </span>{" "}
              e arquiteturas baseadas em{" "}
              <span className="text-[#00d4d8]">RAG, LangChain e PgVector</span>.
            </p>
            <p className="text-[#8a8a8a] text-base leading-relaxed">
              Meu foco é criar soluções que simplificam processos, integram
              sistemas e geram valor real para o negócio.
            </p>
          </div>
        </Reveal>

        {/* Tech stack — 3D levitating icons */}
        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap justify-center gap-10">
            {techStack.map(({ name, floatClass, gradient, shadow, icon }) => (
              <div
                key={name}
                className={`flex flex-col items-center gap-3 ${floatClass}`}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{ background: gradient, boxShadow: shadow }}
                >
                  {/* specular highlight */}
                  <div
                    className="absolute top-2 left-4 w-8 h-5 rounded-full opacity-30"
                    style={{
                      background:
                        "radial-gradient(ellipse, white 0%, transparent 80%)",
                    }}
                  />
                  {icon}
                </div>
                <span className="text-xs font-mono text-[#00d4d8] tracking-widest">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
