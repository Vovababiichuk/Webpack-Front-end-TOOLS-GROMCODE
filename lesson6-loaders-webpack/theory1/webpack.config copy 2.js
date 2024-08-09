module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
  },
	module: {
		rules: [
			{
				// test: /.css$/,
				test: /.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /.(jpg|png)$/,
				use: [
					{
						use: [
							{
								loader: 'url-loader',
								options: {
									limit: 8192,
									name: '[name].[ext]',
									outputPath: 'images',
								},
							}
						]
					}
				],
			},
		],
	},
};