const { resolve } = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
// Application entry point
    entry: './src/index.js',
// Webpack mode 
    mode: 'development',
// Static output
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }, 
// Plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "[id].css"
        })
    ],
// Loaders
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}