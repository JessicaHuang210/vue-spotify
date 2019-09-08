var webpack = require("webpack");
var path = require("path");

module.exports = {
  devServer: {
    port: 8888, // 配置端口
    open: true
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-spotify/" : "/",
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
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   _M: path.resolve("./src/store/mutations.js"),
      //   moment: "moment"
      // }),
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_JSON:
            '"' + escape(JSON.stringify(require("./package.json"))) + '"'
        }
      })
    ]
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
