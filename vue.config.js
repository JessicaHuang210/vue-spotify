module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
                    @import "src/scss/variables.scss";
                `
      }
    }
  },
  devServer: {
    port: 6800, // 配置端口
    open: true
  }
};
