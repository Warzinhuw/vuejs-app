module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '^/api': {
          target: 'http://nodejs-server:3080',
          changeOrigin: true
        },
      }
    }
  }
