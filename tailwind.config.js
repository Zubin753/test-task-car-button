/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        separatorColor: "var(--separator)",
        button: "var(--button)",
        secondText: "var(--second-text)",
        fontColor: "var(--font)"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        extend: {
          '0%': {height: '158px'},
          '90%': {height: '290px'},
          '100%': {height: '286px'},
        },
        shadow: {
          '0%': {boxShadow: '0px 1px 2px 0px rgba(0, 0, 38, 0.3)'},
          '60%': {boxShadow: '0px 2px 6px 2px rgba(0, 0, 38, 0.15)'},
          '100%': {boxShadow: '0px 1px 2px 0px rgba(0, 0, 38, 0.3)'},
        },
        close: {
          '0%': {
            height: '500px'},
          '100%': {
            height: '158px'},
          }
      },
      animation: {
        open: 'extend 300ms ease-in-out forwards alternate',
        shadow: 'shadow 300ms ease-in-out',
      },
      boxShadow: {
        'cSm': '0px 1px 2px 0px rgba(0, 0, 38, 0.3)',
        'cMd': '0px 2px 6px 2px rgba(0, 0, 38, 0.15)',
      }
    },

  },
  plugins: [],
  includeLanguages: {
    javascript: "javascript",
    html: "HTML",
  },
}

