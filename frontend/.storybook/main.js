module.exports = {
	stories: ['../src/**/*.stories.[tj]sx'],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: 'react-docgen-typescript-loader',
				},
			],
		});
		config.module.rules.push({
			test: /\.(sa|sc|c)ss/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader",
			]
		});
		config.resolve.extensions.push('.ts', '.tsx', '.scss', '.css');
		return config;
	},
};
