/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          lavender: "#6b46c1", // darker lavender
          lemon: "#d97706",    // darker lemon
        },
        'brownNew': {
          DEFAULT: '#483c36',
        },
        lavenderNew: '#f9f4fb',
        lavenderDarkNew: '#f4eefa',
        'lavender': {
          //light: '#E6E6FA', // Light Lavender
          //light: '#e9dbf3', // Light Lavender
          light: '#e7d7f4', // Light Lavender
          DEFAULT: '#C8A2C8', // Lavender
          dark: '#967BB6',   // Darker Lavender
        },
        'lemon': {
          //light: '#FFFACD', // Lemon Chiffon
          //light: '#fcf9d4', // Lemon Chiffon
          light: '#f1edca', // Lemon Chiffon
          DEFAULT: '#FFF4BD', // Lighter Lemon
        },
        'love-pink': {
          light: '#FFB6C1', // Light Pink
          DEFAULT: '#F08080', // Light Coral (acts as a nice pink)
          //light: '#FFFFFF', // Light Pink
          //DEFAULT: '#FFFFFF', // Light Coral (acts as a nice pink)
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        parisienne: ['Parisienne', 'cursive'],
        bodoni: ['"Libre Bodoni"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}