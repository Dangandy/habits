module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Telegrama Raw"],
      body: ["Telegrama Raw"],
    },
    extend: {},
  },
  variants: { borderStyle: ["responsive", "hover", "focus"] },
  plugins: [require("@tailwindcss/custom-forms")],
};
