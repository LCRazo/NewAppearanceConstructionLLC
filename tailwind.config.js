/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        charcoal: '#545557',
      },
      fontFamily: {
        georgia: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}

