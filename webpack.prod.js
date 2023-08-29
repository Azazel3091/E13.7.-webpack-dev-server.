module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {filename: "main.js"},
    stats: {
        children: false,
        modules: false
    },
    devServer: {
     static: "./dist",
     open: true
     port: 3001
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
