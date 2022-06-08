module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '^/api': {
          target: 'localhost:3080',
          changeOrigin: true
        },
      }
    }
  }
