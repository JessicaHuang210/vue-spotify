module.exports = {
  devServer: {
    port: 6800, // 配置端口
    open: true
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-spotify" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@C": "@/components",
        "@L": "@/layout",
        "@V": "@/views",
        "@SCSS": "@/scss",
        "@U": "@/utils",
        "@A": "@/assets"
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        data: `
                @import "@SCSS/utils/_variables.scss";
                @import "@SCSS/utils/_mixins.scss";
              `
      }
    }
  }
};
