const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
       _: 'underscore'
    })
  ],
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
        contentBase: path.join(__dirname, "./"),
        port: 9000
  },
  module:{
    	rules:[{
    		test:/\.js$/,
    		loader:'babel-loader',
    		exclude:[/node_modules/],
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015']
			}
    	},{
    		test:/\.html$/,
    		loader:'html?attrs=false',
    		exclude:[/node_modules/]
    	}]
 }
};