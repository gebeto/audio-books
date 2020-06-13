const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const config = {
	entry: path.resolve(__dirname, "src/index.tsx"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../backend/static"),
		// path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".js", ".ts", ".tsx", ".jsx"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?/,
				loader: "babel-loader",
			},
			{
				test: /\.(sa|sc|c)ss/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			},
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.html",
			inject: false,
		}),
	],
};

module.exports = config;