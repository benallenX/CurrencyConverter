/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(109deg, #ddd6f3,#faaca8)',
      },
      colors: {
        'custom-dark': '#6a3b58',
        'custom-light': '#eee',
        'custom-shadow': 'rgba(134, 5, 179, 0.51)',
      },
      boxShadow: {
        'input': '0 0 5px #ddd',
        'input-focus': '2px 2px 12px rgb(109, 150, 240)',
        'container': '0px 0px 25px rgb(134 5 179 / 51%)',
      },
      borderRadius: {
        'input': '8px',
        'container': '12px',
      },
    },
  },
  plugins: [],
}
