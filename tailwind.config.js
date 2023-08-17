module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },

      colors: {
        dark: {
          950: "#e9e9ea",
          900: "#ffffff",
          800: "#C2C6DD",
          700: "#999cb4",
          600: "#4f4d55",
          500: "#333139",
          400: "#23202A",
          300: "#1E1B24",
          200: "#19181F",
          100: "#0e1012",
          150: "#3b5998",
          151: "#55acee",
          152: "#007bb5",
          140: "#dee2e6",
          130: "#004c73",
        },
        brand: {
          darkest: "#252525",
          lightest: "#ffffff",
          light: "#e5e5e5",
          dark: "#52718d",
          red: "#ff0000",
          mid: "#bbcbcd",
        },
        light: {
          950: "#0e1012",
          900: "#19181F",
          800: "#1E1B24",
          700: "#23202A",
          600: "#333139",
          500: "#4f4d55",
          400: "#999cb4",
          300: "#C2C6DD",
          200: "#d3d2d4",
          100: "#e9e9ea",
        },
        "backup-dark": {
          950: "#0e1012",
          900: "#e5e5e5",
          800: "#bbcbcd",
          700: "#52718D",
          600: "#333139",
          500: "#4f4d55",
          400: "#999cb4",
          300: "#C2C6DD",
          200: "#d3d2d4",
          100: "#e9e9ea",
        },
      },

      width: {
        18: "4.5rem",
        "9/10": "90%",
      },

      height: {
        18: "4.5rem",
      },

      inset: {
        "-25": "-6.25rem",
      },

      padding: {
        18: "4.5rem",
        "23/50": "46%",
        "11/12": "91.666667%",
        "3/2": "150%",
      },

      transitionDuration: {
        250: "250ms",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "group-hover"],
  },
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
