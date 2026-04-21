/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#595959",
        surface: "#f7f7f7",
        accent: "#9a2c00"
      },
      fontFamily: {
        heading: ['Amaranth', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
