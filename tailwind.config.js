/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: '2rem', // Default padding for the container
      },
    },
  },
  plugins: [],
}
