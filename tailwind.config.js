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
    extend: {},
  },
  plugins: [],
};
