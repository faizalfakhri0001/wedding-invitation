/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff4f8",
          100: "#ffe5ef",
          200: "#ffbdd6",
          300: "#ff8ab8",
          400: "#f9569a",
          500: "#ec407a",
          600: "#d12f65",
          700: "#a4244e",
          800: "#791a38",
          900: "#4e0f24",
        },
        champagne: {
          50: "#fdf9f3",
          100: "#f8ecdb",
          200: "#f0d3b1",
          300: "#e4b783",
          400: "#d99a5c",
          500: "#c77f3f",
          600: "#a46330",
          700: "#7b4924",
          800: "#53301a",
          900: "#301a0f",
        },
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "cinematic-gradient":
          "radial-gradient(circle at 20% 20%, rgba(255, 234, 241, 0.6), transparent 60%), radial-gradient(circle at 80% 0%, rgba(255, 215, 234, 0.55), transparent 55%), linear-gradient(180deg, rgba(255, 245, 248, 0.8) 0%, rgba(255, 250, 252, 0.95) 35%, rgba(243, 233, 239, 1) 100%)",
      },
      boxShadow: {
        ethereal: "0 20px 45px -20px rgba(233, 156, 192, 0.4)",
      },
    },
  },
  plugins: [],
};
