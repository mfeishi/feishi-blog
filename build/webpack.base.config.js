const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require("webpackbar");


const BUILD_ENV = process.env.BUILD_ENV;


module.exports = {
	entry: {
		main: [path.resolve(__dirname, '../src/main.js')]
	},
	output: {
		filename: 'js/[name]-[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		hashDigestLength: 8
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'feishiBlog',
			template: path.resolve(__dirname, '../src/index.html'),
			filename: 'index.html',
		}),
		new WebpackBar(), //webpack进度条
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({ //webpack定义全局变量
			'process.env.NODE_ENV': JSON.stringify('developmentnode1')
		}),
	],
	module: {
		rules: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader',
			}]
		}, {
			test: /\.(less|css)$/,
			use: [
				BUILD_ENV == 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
				// "style-loader",
				"css-loader",
				"less-loader"
			]
		}, {
			test: /\.(jpe?g|png|gif|svg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					// outputPath: 'images',
					// name: '[path][name].[ext]',
					name:'images/[name]_[hash:7].[ext]',
					esModule: false, // 这里设置为false,遵循commonjs规范
				},
			}]
		}, ]



	}



}
