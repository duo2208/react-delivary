const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",       // remove past build
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "public"),
        port: process.env.PORT,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ],
    },
};