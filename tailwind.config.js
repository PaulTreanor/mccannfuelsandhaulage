/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'black-ops': ['"black ops one"', 'sans-serif'], // Define a custom font key
      },
    },
  },
  plugins: [],
}
