/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        accent: '#8b5cf6',
        background: '#ffffff',
        'background-alt': '#f3f4f6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
