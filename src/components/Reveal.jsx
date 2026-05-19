import { useEffect, useRef, useState } from 'react'

const INITIAL = {
  up:    'translateY(30px)',
  left:  'translateX(-30px)',
  right: 'translateX(30px)',
  scale: 'scale(0.88)',
  fade:  null,
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const init = INITIAL[direction]
  const style = {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.55s ease ${delay}ms${init ? `, transform 0.55s ease ${delay}ms` : ''}`,
  }
  if (init) style.transform = visible ? 'none' : init

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
