module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.11.56.162:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
