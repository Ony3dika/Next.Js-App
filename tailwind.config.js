/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        primary: "#003eff",
        "primary-content": "#ffffff",
        "primary-dark": "#0032cc",
        "primary-light": "#3365ff",

        secondary: "#ffc100",
        "secondary-content": "#000000",
        "secondary-dark": "#cc9a00",
        "secondary-light": "#ffcd33",

        background: "#111522",
        foreground: "#191f34",
        border: "#293456",

        copy: "#fafafd",
        "copy-light": "#cbd2e6",
        "copy-lighter": "#8796c5",

  
      },
    },
  },

  plugins: [],
};
