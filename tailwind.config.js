/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { ink: '#1c1c1c', cream: '#fbfaf8', sage: '#dbe7de' },
      boxShadow: { soft: '0 12px 40px rgba(31, 38, 33, 0.08)' },
    },
  },
  plugins: [],
}
