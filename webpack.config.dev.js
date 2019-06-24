"use strict";
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
module.exports = {
  mode: "development",
  entry: ["./wwwroot/src/app.js"],
  output: {
    path: path.resolve(__dirname + "/wwwroot/src/", "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
