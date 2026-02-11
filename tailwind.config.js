/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#96E9FB",
        mintgreen: "#ABECD6",
      },
    },
  },
  plugins: [],
}
