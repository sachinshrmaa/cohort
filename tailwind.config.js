/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      albert: ["var(--font-albert-sans)"],
    },
    extend: {
      colors: {
        brand: {
          primary: "#3CCF4E",
          secondary: "#FEFBF6",
          accent: "#EF5B0C",
        },
      },
    },
  },
  plugins: [],
};
