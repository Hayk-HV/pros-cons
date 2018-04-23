webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        bundle: __dirname + '/src/index.js',
        styles: __dirname + '/src/App.css'
    },
    output: {
        filename: '[name].js',
        path: __dirname + 'dist',
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                 'babel-loader',
                 
        ],
            },
            {
                test: /\.html$/,
                use: [
                     'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        },
        {
        watch: true
        })
    ]
};
