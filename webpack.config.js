module.exports = {
    entry: [
        './src/App.js'
    ],
    output: {
        filename: './public/dist/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]   
    },
    devServer: {
        historyApiFallback: true
    }
}