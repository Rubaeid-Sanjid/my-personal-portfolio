/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#17140F",
        surface: "#211D16",
        text: {
          primary: "#F2EDE4",
          secondary: "#A79C8A",
        },
        accent: {
          gold: "#E0A458",
          sage: "#6B8F71",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}