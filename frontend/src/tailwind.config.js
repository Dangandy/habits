module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: { borderStyle: ["responsive", "hover", "focus"] },
  plugins: [require("@tailwindcss/custom-forms")],
};
