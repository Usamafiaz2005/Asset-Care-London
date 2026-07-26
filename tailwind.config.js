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
          hover: '#E29B4D',
        },
        teal: {
          DEFAULT: '#3E7C7A',
          light: '#529E9B',
        },
        paper: {
          DEFAULT: '#F6F4F0',
          muted: '#94A3B8',
          subtle: '#CBD5E1',
        },
        danger: '#E53E3E',
        success: '#38A169',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}
