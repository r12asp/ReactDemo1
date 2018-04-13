import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack from 'webpack';
import path from 'path';

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

export default {
  resolve:{
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  entry: [
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    APP_DIR + '/index.tsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {test : /\.jsx?/,include : APP_DIR,loader : 'babel-loader'},
      {test: /\.tsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},   
      { test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },   
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    // Generate an external css file with a hash in the filename
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        //collapseWhitespace: true
      },
      inject: true
    })
  ],
};

