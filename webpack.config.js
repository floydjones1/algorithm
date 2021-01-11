const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs')
  },
  resolve : {
    extensions: ['.ts', '.js']
  },
  module: {
    rules : [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },

  devtool: 'source-map',

  devServer : {
    contentBase: './docs'
  }
}