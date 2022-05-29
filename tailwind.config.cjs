const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate']
  },
};

module.exports = config;
