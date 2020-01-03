module.exports = {
  //设置跨域代理
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://120.27.19.113:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}