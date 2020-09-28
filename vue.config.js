const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	devServer:{
		https:false,//是否启用https访问
		open:false,//配置自动启动浏览器
		proxy:{
			'api':{
				target:'http:v.juhe.cn/todayOnhistory',
				ws:true,  //是否开启websocket
				changeOrigin:true	//请求头配置，默认为false 如果是false就是浏览器发过来的host
			}
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					pxtorem({
						rootValue: 37.5,
						minPixelValue: 1,
						// rootValue: 75, //1rem为75px
						// minPixelValue: 2, //设计稿为2倍图
						propList: ['*']
					})
				]
			}
		}
	}
}
