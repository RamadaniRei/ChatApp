const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    alias: {},
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    configure: {
      resolve: {
        fallback: {
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          vm: require.resolve("vm-browserify"),
        },
      },
    },
  },
};
