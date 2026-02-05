/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cyberpunk: {
          pink: '#ff00ff',
          blue: '#00ffff',
          yellow: '#ffff00',
          black: '#0a0a0a',
        }
      },
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
        'cyber': ['"Orbitron"', 'sans-serif'],
        'industry': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { filter: 'drop-shadow(0 0 5px #ff00ff)' },
          'to': { filter: 'drop-shadow(0 0 20px #00ffff)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}