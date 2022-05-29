const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: ['cupcake', 'night']
  // },
};

module.exports = config;
