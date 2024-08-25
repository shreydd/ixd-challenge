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
     "0%": { marginRight: "3.5px" },
     "50%": { marginRight: "1.5px" },
     "100%": { marginRight: "0px" },
    },
    "move-up": {
     "0%": { transform: "translateY(-40%)", opacity: 0 },
     "20%": { transform: "translateY(-22%)", opacity: 0.4 },
     "60%": { transform: "translateY(-15%)", opacity: 0.7 },
     "100%": { transform: "translateY(-0%)", opacity: 1 },
    },
    "move-down": {
      "0%": { transform: "translateY(40%)", opacity: 0 },
      "20%": { transform: "translateY(22%)", opacity: 0.2 },
      "60%": { transform: "translateY(15%)", opacity: 0.4 },
      "100%": { transform: "translateY(0)", opacity: 1 },
    },
   },
   animation: {
    checkmark: "checkMarkMargin 0.2s ease-out",
    moveUp: "move-up 0.4s ease-in",
    moveDown: "move-down 0.4s ease-in"
   },
  },
 },
 plugins: [],
};
