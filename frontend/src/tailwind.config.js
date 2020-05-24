module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Telegrama Raw"],
      body: ["Telegrama Raw"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1280px",
      lg: "900px",
    },
    extend: {},
  },
  variants: { borderStyle: ["responsive", "hover", "focus"] },
  plugins: [require("@tailwindcss/custom-forms")],
};
