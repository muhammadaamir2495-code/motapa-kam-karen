/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B1B12",
        bg: "#FFF7EC",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#C1651B",
          dark: "#8F4A12",
          light: "#FBE8D3",
        },
        accent: {
          DEFAULT: "#7A2048",
          light: "#F3DEE7",
        },
        muted: "#6E5F51",
        line: "#EADFCD",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
