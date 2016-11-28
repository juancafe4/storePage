const webpack = require('webpack');
const path = require('path');

module.exports = {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./client/index.js'
	],
	output: {
		path: path.join(__dirname, '/build'),
		publicPath: '/',
    filename: 'bundle.js',
	},
	target: 'web',
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client'),
        loader: 'babel'
      },
		]
	}
}
