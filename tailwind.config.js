/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      body: ["Albert Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          primary: "#000",
          seconday: "#fff",
          accent: "#f5b26a",
        },
      },
    },
  },
  plugins: [],
};
