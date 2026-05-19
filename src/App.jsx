import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Experiencia from './components/Experiencia'
import Projetos from './components/Projetos'
import Certificacoes from './components/Certificacoes'
import Contato from './components/Contato'

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,212,216,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,216,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Projetos />
        <Certificacoes />
        <Contato />
      </main>
    </div>
  )
}
