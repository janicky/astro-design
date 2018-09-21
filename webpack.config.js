const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',

    mode: 'development',

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }, 

    module: {
        rules: [
            {
                test: /\.css/,
                loader: 'css-loader'
            }
        ]
    }
}