/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08090E",
          subtle: "#0D111A",
        },
        surface: {
          DEFAULT: "#111827",
          card: "#121826",
          glass: "rgba(17, 24, 39, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          cyan: "#00D2FF",
          blue: "#3B82F6",
          indigo: "#6366F1",
          purple: "#8B5CF6",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        heading: ["Outfit", "Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(0, 210, 255, 0.3)",
        "glow-blue": "0 0 35px -5px rgba(59, 130, 246, 0.35)",
        "glow-purple": "0 0 35px -5px rgba(139, 92, 246, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
  },
}