module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    devServer: {
     static: "./dist",
     open: true,
     hot: true,
   },
    output: {
        filename: "super.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: "eslint-loader",
        }
        ]
    }
};