/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite-ts-test/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-ts-test/plugin')
  ],
}
