const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	optimization: {
		splitChunks: {},
		minimizer: [
			new UglifyJSPlugin(),
			new OptimizeCssAssetsPlugin({ //css压缩
				assetNameRegExp: /\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorOptions: {
					safe: true,
					autoprefixer: {
						disable: true
					},
					mergeLonghand: false,
					discardComments: {
						removeAll: true // 移除注释
					}
				},
				canPrint: true //表示插件能够在console中打印信息，默认值是true
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin(), //清除dist文件
		new MiniCssExtractPlugin({ //单独提取css
			filename: 'css/[name].[chunkhash:8].css',
			chunkFilename: 'css/[name].[chunkhash:8].css',
		}),
	]

})
console.error(prodWebpackConfig)
module.exports = prodWebpackConfig
