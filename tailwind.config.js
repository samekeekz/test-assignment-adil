
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        products: "repeat(auto-fit,minmax(320px,1fr))",
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }
    }
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { "plaintext": "javascript" }
}