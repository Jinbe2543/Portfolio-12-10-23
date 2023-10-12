/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        anni1: "url('/src/assets/picture/anni1.webp')",
        tagikung: "url('/src/assets/picture/tagikung1.jpg')"
      },
    },
  },
  plugins: [],
}

