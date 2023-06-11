/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        body: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#FF5349"
        },
        dark: {
          500: "#222936"
        }
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
