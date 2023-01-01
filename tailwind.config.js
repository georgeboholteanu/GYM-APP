/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  
  plugins: [
    require('./node_modules/flowbite/plugin')
  ]
}
