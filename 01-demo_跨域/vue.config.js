module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://search.jd.com',
        changeOrigin: false,
      }
    }
  }
}