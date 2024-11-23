const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // Устанавливаем алиас
      },
    },
  },
  pages: {
    index: {
      entry: "./src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
};
