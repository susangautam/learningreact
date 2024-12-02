/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#3762F0',
        secondary: '#E3D21B',
        tertiary:'#333333'
      }

    },
  },
  plugins: [],
}

