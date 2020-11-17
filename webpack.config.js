let path = require('path'); //для подключения доп.библиотек
const HtmlWebPackPlugin = require('html-webpack-plugin');

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // options: { /*если сделать eslintrc
        //   formatter: require('eslint-friendly-formatter'),
        //  emitWarning: !config.dev.showEslintErrorsInOverlay,
        // configFile: '.eslintrc.js'
        // }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: '../index.html'
    }),
  ]
};

module.exports = conf;
