module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "open-sans": "Open Sans, Arial, sans-serif",
    },
    letterSpacing: {
      max: "4px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
