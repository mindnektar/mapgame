module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './js/main.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.sass$/,
                loader: "style!css!sass?indentedSyntax"
            }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};