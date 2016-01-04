module.exports = {
	entry: {
		app: './js/main.js'
	},
	output: {
		path: __dirname + '/dest',
		publicPath: '/dest/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{test: /\.js?$/, loader: 'babel', exclude: /node_modules/}
		]
	}
}