const ngToolsWebpack = require('@ngtools/webpack');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app-lazy/main.ts',
  output: {
    filename: 'dist/bundle-webpack-lazy-loading.js'
  },
  devtool: 'source-map',
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig-webpack.json'
    }),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false, 
      output: {
        comments: false
      }, 
      mangle: {
        screw_ie8: true
      }, 
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      },
      sourceMap: true
		})
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  }
};