/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        neg2: "-500%",
      },
      screens: {
        xsm: "0px",
      },
      animation: {
        "bounce-slow": "bounce 1s 2.55",
      },
      width: {
        120: "30rem",
        "120full": "120%",
      },
      minWidth: {
        20: "20rem",
        40: "40rem",
        60: "60rem",
      },
      height: {
        142: "142px",
        "42px": "42px",
      },
      spacing: {
        "140": "400px",
      },
      maxHeight: {
        xxs: "10rem",
        xxxs: "4rem",
        "80vh": "80vh",

        "42px": "42px",
      },
      padding: {
        1: "4px",
      },
      colors: {
        personalized: {
          50: "#f6f9fb",
          100: "#e1f1fc",
          200: "#bfddf9",
          300: "#92bbf0",
          400: "#6694e4",
          500: "#506fda",
          600: "#4153c8",
          700: "#333ea6",
          800: "#232a79",
          900: "#141a4c",
        },
      },
    },
  },
  plugins: [],
};
