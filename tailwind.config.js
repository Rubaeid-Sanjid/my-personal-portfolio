/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#12121A",
        text: {
          primary: "#F5F5F7",
          secondary: "#9CA3AF",
        },
        accent: {
          indigo: "#4F46E5",
          blue: "#3B82F6",
          cyan: "#38BDF8",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.35)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}