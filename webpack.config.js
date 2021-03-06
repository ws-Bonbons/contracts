const webpack = require("webpack");

const path = require("path");

module.exports = {
  target: 'node',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, "index.ts")
  },
  output: {
    filename: 'index.js',
    library: '@bonbons/contracts',
    libraryTarget: 'umd'
  },
  mode: "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts"]
  },
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
