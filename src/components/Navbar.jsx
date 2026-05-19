import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent border-b border-[#1a1a1a]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-full bg-[#00d4d8] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,212,216,0.5)] transition-all duration-300">
            <span className="text-[#0a0a0a] font-bold text-sm font-mono tracking-tighter leading-none">
              AD
            </span>
          </div>
          <span className="text-[#00d4d8] font-mono text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
            Afrânio Dantas
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-200 rounded relative group ${
                    isActive
                      ? 'text-[#00d4d8]'
                      : 'text-[#8a8a8a] hover:text-[#e8e8e8]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-px bg-[#00d4d8] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#8a8a8a] hover:text-[#00d4d8] transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 border-b border-[#1e1e1e]' : 'max-h-0'
        }`}
      >
        <ul className="px-6 pb-4 flex flex-col gap-1 bg-[#0a0a0a]/95 backdrop-blur-md">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-3 py-2.5 text-sm font-mono text-[#8a8a8a] hover:text-[#00d4d8] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#00d4d8] mr-2">{'>'}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
