/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    instrumentSerif: ["InstrumentSerif", "sans-serif"],
   },
   keyframes: {
    checkMarkMargin: {
     "0%": { marginRight: "3px" },
     "50%": { marginRight: "1.5px" },
     "100%": { marginRight: "0px" },
    },
   },
   animation: {
    "checkmark": "checkMarkMargin 0.4s ease-out",
   },
  },
 },
 plugins: [],
};
