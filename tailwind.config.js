/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: "300px",  //360px
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "",

      BLUE: {
        _100: "#5c9ac6",
        _200: "#455cc0"
      },

      BLACK: {
        _100: "#000"
      },

      WHITE: {
        _100: "#fff",
        _200: "#fafafa"
      },

      MODAL_BACKGROUND: "rgba(11, 12, 14, 0.77)",
    }
  },
  plugins: [],
}