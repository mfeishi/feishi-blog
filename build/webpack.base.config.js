const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require("webpackbar");
const SRCPATH = path.resolve(__dirname, '..', 'src');


const BUILD_ENV = process.env.BUILD_ENV;
module.exports = {
	entry: {
		main: [path.resolve(__dirname, '../src/main')]
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
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						//presets: ['es2015', "react", "stage-2"]
					},
				}, ]
			}, {
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
				}]
			}, {
				test: /\.(less|css)$/,
				use: [
					BUILD_ENV == 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
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
						name: 'images/[name]_[hash:7].[ext]',
						esModule: false, // 这里设置为false,遵循commonjs规范
					},
				}]
			},
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', 'json', '.ts', '.tsx'], //文件扩展名默认为.js .json
		modules: [SRCPATH, 'node_modules'],
		alias: { //别名
			'utils': path.resolve(__dirname, '../src/utils'),
			'@': SRCPATH
		}
	}



}
