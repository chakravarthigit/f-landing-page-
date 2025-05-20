/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flavorsync-red': '#C70000',
        'flavorsync-darkmaroon': '#8B0000',
        'flavorsync-maroon': '#A52A2A',
        background: {
          DEFAULT: '#ffffff',
          dark: '#111827',
        },
        foreground: {
          DEFAULT: '#000000',
          dark: '#ffffff',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} 