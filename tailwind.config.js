/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/BG.jpg')",
        'seller-bg':"url('/images/BG-1.jpg')"
      },
    },
  },
  plugins: [],
}
