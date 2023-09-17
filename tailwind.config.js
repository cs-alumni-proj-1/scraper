/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montaga: ["montaga"],
      montserrat: ["Montserrat"],
      nats: ["nats"],
    },
    colors: {
      linkFill: "#FAFAFA",
      linkBorder: "#999494",
      navColor: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
};
