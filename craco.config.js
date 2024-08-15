const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    resolve: {
      alias: {
        // Add any other aliases you need here...
        "process/browser": require.resolve("process/browser.js"), // Ensure full path with extension
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser.js", // Ensure full path with extension
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
