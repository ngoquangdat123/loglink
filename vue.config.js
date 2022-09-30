const webpack = require('webpack');
// const path = require("path");

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    // resolve: {
    //   alias: {
    //     src: resolveSrc('src'),
    //     '@': path.resolve(__dirname, 'src'),
    //     '@apis': path.resolve(__dirname, 'src/apis'),
    //     '@assets': path.resolve(__dirname, 'src/assets'),
    //     '@components': path.resolve(__dirname, 'src/components'),
    //     '@containers': path.resolve(__dirname, 'src/containers'),
    //   },
    // },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Log Link',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
