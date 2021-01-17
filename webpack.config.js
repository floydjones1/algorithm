const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules : [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
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