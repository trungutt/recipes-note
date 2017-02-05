import path from 'path';

const devtool = 'inline-source-map';
const entry = path.join(__dirname, 'src/index');
const output = {
	path: __dirname,
	filename: 'bundle.js',
	publicPath: '/',
};
const devServer = {
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
};
const scriptLoader = {
	loader: 'babel-loader',
	include: path.resolve(__dirname, 'src'),
	test: /\.jsx$|\.js$/,
};
const resolve = {
	extensions: ['.js', '.jsx'],
};

export default {
	devtool,
	entry,
	output,
	devServer,
	module: { loaders: [scriptLoader] },
	resolve,
};
