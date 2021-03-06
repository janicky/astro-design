const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
// Loaders
    module: {
        rules: [
            {
                test: /\.sass/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(xml|webmanifest)/,
                use: ['file-loader']
            }
        ]
    },
// Development server 
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: false,
        host: '0.0.0.0',
        port: 8080
    }
}