module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '^/api': {
          target: 'http://node-api:3080',
          changeOrigin: true
        },
      }
    }
  }
