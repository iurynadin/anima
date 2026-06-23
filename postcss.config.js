module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        '> 0.5%',
        'last 2 versions',
        'Safari >= 15',
        'iOS >= 15'
      ]
    },
  },
}
