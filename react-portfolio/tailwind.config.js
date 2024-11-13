/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
    },
    colors: {
      primaryBg: '#1A1A2E',       // Dark background
      secondaryBg: '#24243A',     // Slightly lighter for sections
      textLight: '#EAEAF4',       // Light gray text
      accent1: '#B04FA9',         // Fuchsia
      accent2: '#BCB9DB',         // Light accent color
      white: '#FFFFFF',           // White color to avoid hardcoding #FFFFFF
    },
  },
  plugins: [
    require("daisyui")
  ],
}
