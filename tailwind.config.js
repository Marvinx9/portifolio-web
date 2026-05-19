/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: '#141414',
          border: '#1e1e1e',
        },
        cyan: {
          accent: '#00d4d8',
          glow: '#00d4d820',
          dim: '#00d4d840',
        },
        text: {
          primary: '#e8e8e8',
          secondary: '#8a8a8a',
          muted: '#4a4a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,212,216,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,212,216,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
