let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			// {
		 //      test: /\.js$/,
		 //      exclude: /(node_modules|bower_components)/,
		 //      use: {
		 //        loader: 'babel-loader',
		 //      }
		 //    },
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true}
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: 'src/js/postcss.config.js'}}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true}
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: 'src/js/postcss.config.js'}}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
		})
	],
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production
					? 'source-map'
					: 'eval-sourcemap';

	return conf;
}