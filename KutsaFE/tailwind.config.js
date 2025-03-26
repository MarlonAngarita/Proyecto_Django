/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        navbar: ["Poppins", "sans-serif"], // Fuente usada en el Navbar
      },
    },
  },
  plugins: [],
};
