/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#161b22",
        "border-color": "#21262d",
        "text-color": "#c9d1d9",
      },
    },
  },
  plugins: [],
};
