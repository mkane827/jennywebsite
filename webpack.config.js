module.exports = {
    entry: './src/index.js',
    devServer: {
        inline: true,
        progress: true,
        hot: true
    },
    output: {
        path: './dist',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
     }
 };
