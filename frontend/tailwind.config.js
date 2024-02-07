/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turkuaz': '#9fd3c7',
        'pembe': '#ffe9e3',
      },
    },
  },
  plugins: [],
}

