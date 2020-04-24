const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.base.config');
const portfinder = require('portfinder') //避免端口占用
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const chalk = require('chalk');
const notifier = require('node-notifier'); //todo
const PORT  = 3000;


const devWebpackConfig = merge(baseWebpackConfig,{
	mode: 'development',
	// devtool: 'source-map',
	devServer: {
		port: 8000, //端口改为8000
		open: true, // 自动打开浏览器
		historyApiFallback: true,
		hot:true,
		quiet:false, // necessary for FriendlyErrorsPlugin 静默输出,控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
		overlay: { //在编译出错的时候，在浏览器页面上显示错误
		      warnings: true,
		      errors: true,
		},
		disableHostCheck: true,
		proxy:{ //代理
			'/api':{
				target:'https://cnodejs.org',
				secure: false, // 如果是https接口，需要配置这个参数
	   			changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
			}
		}
	},
	plugins:[
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
			    messages: [`${chalk.cyan(`You application is running here http://localhost:${PORT}`)}\n- Local ${chalk.magenta(`本地打包类型 : ${process.env.TYPE_ENV}\n编译环境 : ${process.env.BUILD_ENV}\n路径 : ${__dirname}`)}`],
			    notes: ['Some additionnal notes to be displayed unpon successful compilation']
			  },
			  clearConsole: true,
			  onErrors: (severity, errors) => {
				if (severity !== 'error') return
				const { name, file } = errors[0]
				notifier.notify({ //todo
				  title: 'Webpack error',
				  message: `${severity} : ${name}`,
				  subtitle: file || '',
				})
			  },
		}),]
})

module.exports = devWebpackConfig
// module.exports = new Promise((resolve,reject)=>{ //寻找可用端口
// 	portfinder.basePort = PORT
// 	portfinder.getPort((err, port) => {
// 		if (err) {
// 		      reject(err)
// 		}else{
// 			 devWebpackConfig.devServer.port = port
// 			 resolve(devWebpackConfig)
// 		}
// 	})
// })