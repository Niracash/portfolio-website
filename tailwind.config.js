/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#0A192F",
        technology: "#142B46",
        letters: "#204850",
        terminal: "#121212",
        errorred: "#D10000",
        successgreen: "#00D107"

      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
        "source-code-pro": ["Source Code Pro", "monospace"]
        
      },
      screens: {
        sm: "624px",
        md: "768px",
      },
    },
    variants: {
      extend: {
        scrollPadding: ["responsive"],
      },
    },
  },
  plugins: [require("preline/plugin")],
}

