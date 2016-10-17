var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './public/blocks/loader.js',
    output: {
        path: './public/bundles',
        filename: '_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                include: 'node_modules/jquery'
            },
            {
                test: /\.(styl|css)$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        // remove duplicated plugins
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({$: 'jquery'})
    ]
};
