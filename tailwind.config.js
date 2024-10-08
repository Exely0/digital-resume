/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        myyellow: "#ffbf00",
        myorange: "#ff7002",
        myblue: "#3a85ff",
        mygreen: "#02ff75",
        myviolet: "#7b61ff",
        mypink: "#f60195",
      },
      fontFamily: {
        "instrument-serif": ['"Instrument Serif"'],
        archivo: ["Archivo", "sans-serif"],
      },
      backgroundImage: {
        "yellow-to-violet":
          "linear-gradient(175.2deg, #ffbf00 0%, #ffbf00 48.5%, #000000 48.5%, #000000 51.5%, #7b61ff 51.5%, #7b61ff 100%);",
        "violet-to-green":
          "linear-gradient(-175.2deg, #7b61ff 0%, #7b61ff 48.5%, #000000 48.5%, #000000 51.5%, #02ff75 51.5%, #02ff75 100%);",
        "green-to-blue":
          "linear-gradient(175.2deg, #02ff75 0%, #02ff75 48.5%, #000000 48.5%, #000000 51.5%, #3a85ff 51.5%, #3a85ff 100%);",
        "blue-to-orange":
          "linear-gradient(-175.2deg, #3a85ff 0%, #3a85ff 48.5%, #000000 48.5%, #000000 51.5%, #ff7002 51.5%, #ff7002 100%);",
      },
      boxShadow: {
        neobrutalism: "6px 6px 0 0 black",
        neobrutalismHover: "12px 12px 0 0 black",
      },
      keyframes: {
        "tooltip-kf": {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "1",
            transform: "scaleX(0.2) translateX(-25%)",
          },
          "100%": {
            opacity: "1",
            transform: "scaleX(1) translateX(-25%)",
          },
        },
      },
      animation: {
        tooltip: "tooltip-kf 0.5s linear forwards",
      },
    },
  },
  plugins: [],
};
