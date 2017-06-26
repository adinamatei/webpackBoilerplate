// TODO: add babel-loader!
var path = require('path');

module.exports = {
    entry: "./app.js",
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
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
};