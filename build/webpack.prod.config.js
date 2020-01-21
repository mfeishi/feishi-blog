const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	optimization: {
		splitChunks: {},
		minimizer: [
			new TerserPlugin({
				cache: true, // 开启缓存
				parallel: true, // 支持多进程
				// sourceMap: true, 
			}),
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
		})
	]

})

module.exports = prodWebpackConfig
