import { type Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fefae0",
        primary: "#f59e0b",
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config