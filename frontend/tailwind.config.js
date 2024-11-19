/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'bg-dark-main-color',  
    'text-main-color',  
    'text-dark-main-color',  
    'border-red-500',  
  ],
  theme: {
    extend: {
      colors: {
        'main-color' : '#d3e5ed',
        'dark-main-color' : '#bad1e0',
      }
    },
  },
  plugins: [],
}

