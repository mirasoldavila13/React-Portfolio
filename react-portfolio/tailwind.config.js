/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryBg: '#1A1A2E',       // Dark background
        secondaryBg: '#24243A',     // Slightly lighter for sections
        textLight: '#EAEAF4',       // Light gray text
        accent1: '#B04FA9',         // Fuchsia
        accent2: '#BCB9DB',
    },
  },
  plugins: [],
}

