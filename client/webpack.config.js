const webpack = require('webpack');

module.exports = {
    context: __dirname + '/',
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    mode: 'production',
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

