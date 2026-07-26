/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#12181C',
          dark: '#0D1117',
          card: '#192229',
          border: '#2A363F',
        },
        copper: {
          DEFAULT: '#D68A3C',
          light: '#E8A053',
          dark: '#B06D28',
        },
        teal: {
          DEFAULT: '#3E7C7A',
          light: '#529E9B',
          dark: '#2A5A58',
        },
        paper: {
          DEFAULT: '#F6F4F0',
          muted: '#94A3B8',
          subtle: '#CBD5E1',
        },
        danger: '#E53E3E',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'glow-copper': '0 0 20px -5px rgba(214, 138, 60, 0.4)',
        'glow-teal': '0 0 20px -5px rgba(62, 124, 122, 0.4)',
        'glow-danger': '0 0 20px rgba(229, 62, 62, 0.6)',
        'glass-card': '0 12px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      }
    },
  },
  plugins: [],
}
