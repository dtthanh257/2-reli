// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://89.116.121.36:44385",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
