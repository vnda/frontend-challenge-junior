module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/scss/global.scss";',
      },
    },
  },
  outputDir: '../dist',
  publicPath: '',
};
