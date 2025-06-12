/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', // u can also give darkMode:"class" (just copy pasted it from tailwind)
  theme: {
    extend: {},
  },
  plugins: [],
}
