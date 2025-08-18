/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': {
          light: '#E6E6FA', // Light Lavender
          DEFAULT: '#C8A2C8', // Lavender
          dark: '#967BB6',   // Darker Lavender
        },
        'lemon': {
          light: '#FFFACD', // Lemon Chiffon
          DEFAULT: '#FFF4BD', // Lighter Lemon
        },
        'love-pink': {
          light: '#FFB6C1', // Light Pink
          DEFAULT: '#F08080', // Light Coral (acts as a nice pink)
        }
      },
      fontFamily: {
        // You can add custom fonts here later, e.g., a nice script font for headings
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}