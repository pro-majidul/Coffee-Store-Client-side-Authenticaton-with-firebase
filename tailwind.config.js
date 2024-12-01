/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgnav: "url('/15.jpg')",
        addCoffee: "url('/11.png')",
        copyright: "url('/24.jpg')",
        bannerImg: "url('/6.jpeg')",
        foterImg: 'url(https://i.ibb.co.com/NNhYW9X/13.jpg)'

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}