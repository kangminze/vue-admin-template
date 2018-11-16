module.exports = {
  proxy: {
    '/api': {
      target: "http://localhost:8080/api",
      secure: false,
      changeOrigin: false,
      pathRewrite: {
        '^/api':''
      }
    }
  }
}
