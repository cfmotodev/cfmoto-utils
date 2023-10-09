const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    main: './src/main.js',
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].min.js`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  modules: 'auto',
                  "corejs": 3,
                }
              ],
            ], // 设置编译的规则
            "plugins": [
              [ 
                "@babel/plugin-transform-runtime", {
                  "corejs": 3
                }
              ]
            ]
          },
        },
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
