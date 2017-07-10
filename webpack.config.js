//jshint esversion:6
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/app.js",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8081
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader',
          exclude: /node-modules/
        },

        {
          test: [/\.css$/, /\.scss$/],
          use: ExtractTextPlugin.extract ({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),

        },

      ]
    },

    plugins: [
      new ExtractTextPlugin("style.css"),
    ]
};