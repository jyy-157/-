import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '../views/Home.vue'
// 首页 搜索
import Shearch from '../views/Shearch.vue'

// 首页 推荐区 今日热门
import tuijianqu from '../views/shoye/tuijianqu.vue'

//课表
import Kebiao from '../views/Kebiao.vue'
// 去学习
import study from '../views/kebiao/study.vue'
// 约作业
import yezuoye from '../views/kebiao/yezuoye.vue'
// 选择老师
import xuanzelaoshi from '../views/kebiao/xuanzelaoshi.vue'
// 提交作业
import tijiaoZuoye from '../views/kebiao/tijiaoZuoye.vue'
// 专业课表 详情页
import kechengXianq from '../views/zhuanyekec/kechengXianq.vue'
// 确认订单
import dingdan from '../views/zhuanyekec/dingdan.vue'
// 付款页
import zhifu from '../views/zhuanyekec/zhifu.vue'

// 社区
import shequ from '../views/shequ.vue'
// 社区 最新
import zuixin from '../views/Shqu/zuixin.vue'
// 社区 精选
import jingxuan from '../views/Shqu/jingxuan.vue'
// 社区 练习室
import lianxishi from '../views/Shqu/lianxishi.vue'
// 社区 关注
import guanzhu from '../views/Shqu/guanzhu.vue'
// 社区 问答
import wenda from '../views/Shqu/wenda.vue'

//我的
import About from '../views/About.vue'

//起始页面
import qishiye from '../views/login/qishiye.vue'
import qsygug from '../views/login/qsygug.vue'
//登录
import sign from '../views/login/sign.vue'
//注册
import zhuce from '../views/login/zhuce.vue'

// 为您推荐的图文教程详情页
import tuwenyikao from '../views/tuwen/tuwenyikao.vue'
import dialog from '../views/Dialog.vue'

Vue.use(VueRouter)

const routes = [{
		//起始页面
		path: '/',
		name: 'qishiye',
		component: qishiye
	}, {
		path: '/qsygug',
		name: 'qsygug',
		component: qsygug
	},
	{ //登录
		path: '/sign',
		name: 'sign',
		component: sign
	},
	{ //注册
		path: '/zhuce',
		name: 'zhuce',
		component: zhuce
	},
	{ //我的
		path: '/about',
		name: 'About',
		component: About
	},
	{ // 首页  导航栏页面
		path: '/home',
		name: 'Home',
		component: Home
	},
	{ // 首页  搜索
		path: '/Shearch',
		name: 'Shearch',
		component: Shearch
	},
	{ // 首页  推荐区 今日热门
		path: '/tuijianqu',
		name: 'tuijianqu',
		component: tuijianqu
	},
	{ //课表
		path: '/Kebiao',
		name: 'Kebiao',
		component: Kebiao
	},
	{ // 去学习
		path: '/study',
		name: 'study',
		component: study
	},
	{ // 约作业
		path: '/yezuoye',
		name: 'yezuoye',
		component: yezuoye
	},
	{ // 选择老师
		path: '/xuanzelaoshi',
		name: 'xuanzelaoshi',
		component: xuanzelaoshi
	},
	{ // 提交作业
		path: '/tijiaoZuoye',
		name: 'tijiaoZuoye',
		component: tijiaoZuoye
	},
	{ // 专业课表 详情页
		path: '/kechengXianq',
		name: 'kechengXianq',
		component: kechengXianq
	},
	{ // 确认订单
		path: '/dingdan',
		name: 'dingdan',
		component: dingdan
	},
	{ // 付款页
		path: '/zhifu',
		name: 'zhifu',
		component: zhifu
	},
	{ //为您推荐的图文教程详情页
		path: '/tuwenyikao',
		name: 'tuwenyikao',
		component: tuwenyikao
	},
	{ //社区 
		path: '/shequ',
		name: 'shequ',
		component: shequ,
		children: [{ //社区 最新
				path: '/shequ/zuixin',
				name: 'zuixin',
				component: zuixin
			},
			{ //社区 精选
				path: '/shequ/jingxuan',
				name: 'jingxuan',
				component: jingxuan
			},
			{ //社区 练习室
				path: '/shequ/lianxishi',
				name: 'lianxishi',
				component: lianxishi
			},
			{ //社区 关注
				path: '/shequ/guanzhu',
				name: 'guanzhu',
				component: guanzhu
			},
			{ //社区 wenda
				path: '/shequ/wenda',
				name: 'wenda',
				component: wenda
			}
		],
		redirect: '/shequ/zuixin'
	},
	{
		path: '/dialog',
		name: 'dialog',
		component: dialog
	}
]

const router = new VueRouter({
	routes
})

export default router
