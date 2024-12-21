const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchFiles: ["./src/template.html"],
    port: 3000,
    hot: true, // Enables hot module replacement
    open: true, // Automatically opens the browser
  },

  // Module settings for development
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // Enable Hot Module Replacement (HMR)
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
