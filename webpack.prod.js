const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",

  // Optimization settings (for production)
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  // Output settings (production specific)
  output: {
    filename: "bundle.[contenthash].js", // Hashing the output for cache busting
    clean: true, // Clean dist folder before each build
  },

  // Module rules for production (e.g., extracting CSS)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  // Plugins for production (e.g., minifying CSS)
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});
