import path from 'path';

export default {
	devtool: 'inline-source-map',
	entry: path.join(__dirname, 'src/index'),
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		quiet: false,
		noInfo: false,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false,
		},
	},
};
