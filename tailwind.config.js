/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "system-ui"],
    },
    colors: {
      primary: "#99E39E",
      white: "#FFFFFF",
      background: "#000510",
      textColor1: "#3D4139",
      textColor2: "#FFFFFFCC",
      "off-white": "#F3F0EF",
    },
    fontSize: {
      "94px": "94px",
      "44px": "44px",
      "28px": "28px",
      "24px": "24px",
      "18px": "18px",
      "17px": "17px",
      "16px": "16px",
    },
    fontWeight: {
      500: "500",
      400: "400",
      600: "600",
    },
    lineHeight: {
      "120.32px": "120.32px",
      42: "42px",
      59: "59.84px",
      36: "36.46px",
      31: "31.25px",
      28: "29.88px",
    },
    dropShadow: {},
    extend: {
      backdropBlur: {
        20: "20px",
      },
      borderRadius: {
        16: "16px",
        12: "12px",
      },
    },
  },
  plugins: [],
};
