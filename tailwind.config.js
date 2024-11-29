/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgnav: "url('./src/assets/images/more/15.jpg')",
        addCoffee: "url('./src/assets/images/more/11.png')",
        copyright: "url('./src/assets/images/more/24.jpg')",
        banner: "url('./src/assets/images/more/6.jpeg')",
        foterImg : 'url(https://i.ibb.co.com/NNhYW9X/13.jpg)'
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}