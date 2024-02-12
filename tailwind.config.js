/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "576px",
      },

      fontFamily: {
        "clash-display-regular": ["clash-display-regular", "sans-serif"],
        "clash-display-semibold": ["clash-display-semibold", "sans-serif"],
        "plus-jakarta": ["Plus Jakarta Sans", "sans - serif"],
      },
      colors: {
        neutralWhite: "#FFFDFF",
      },
      lineHeight: {
        17: "17.216px",
        67: "67px",
        114: "114.532px",
        160: "160px",
      },
      fontSize: {
        "4xxl": "44px",
        "8xxl": "100px",
        "9xl": "120px",
        "9xxl": "142px",
        "10xl": "165.5px",
      },
      backgroundImage: {
        header: "url('/assets/images/webp/hero_background.webp')",
        headingWhiteGradient:
          "linear-gradient(180deg, #FFFDFF 0%, rgba(255, 253, 255, 0.86) 67.19%, rgba(255, 253, 255, 0.58) 100%)",
        headingBlackGradient:
          "linear-gradient(180deg, #05010b 0%, rgba(5, 1, 12, 0.68) 100%)",
      },
    },
  },
  plugins: [],
};
