const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'
	const config = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.scss$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /.(jpg|png|gif)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
								name: '[name].[ext]',
								outputPath: 'images',
							},
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],

		devServer: {
			// contentBase: path.join(__dirname, 'dist'),
			// compress: true,
			port: 9000,
			hot: true,
			open: true,
		},
	}

	if (isProduction) {
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].css',
			})
		)
	}

	return config
}
