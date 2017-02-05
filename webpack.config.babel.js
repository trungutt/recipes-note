import path from 'path';

export default {
	entry: path.join(__dirname, 'src/index'),
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: "./src"
	},
}
