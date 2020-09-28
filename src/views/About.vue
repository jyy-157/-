<template>
	<div class="about">
		<div class="xinxi">
			<div class="xinxi-row">
				<div class="xinxi-colounm">
					<span class="title-h">买不起菜的菜包</span>
					<span class="title-h2">个人积分：0</span>
					<div class="title-h3">个人空间</div>
				</div>
				<div class="user-img">
					<img src="../assets/xiaohuanr.png" />
				</div>
			</div>
			<div class="xinxi-row2">
				<div class="xinxi-f">
					<div class="xinxi-weight">10</div>
					<div>发帖</div>
				</div>
				<div class="xinxi-f">
					<div class="xinxi-weight">02</div>
					<div>关注</div>
				</div>
				<div class="xinxi-f">
					<div class="xinxi-weight">15</div>
					<div>粉丝</div>
				</div>
			</div>
		</div>
		<div class="guangg">
			<img src="../assets/guangao.png" />
		</div>
		<div class="leibiao">
			<van-cell title="缓存列表" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/huancunliebiao.png" />
				</template>
			</van-cell>
			<van-cell title="绘画草稿" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/caogao.png" />
				</template>
			</van-cell>
			<van-cell title="我的消息" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/xiaoxi1.png" />
				</template>
			</van-cell>
			<van-cell title="联系我们" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/lianxiwomen.png" />
				</template>
			</van-cell>
			<van-cell title="隐私政策" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/yinsizhengce.png" />
				</template>
			</van-cell>
			<van-cell title="问题反馈" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/wentifankui.png" />
				</template>
			</van-cell>
			<van-cell title="设置" icon="shop-o" is-link>
				<template #icon>
					<img class="icon-img" src="../assets/shezhi.png" />
				</template>
			</van-cell>
		</div>
		<Tabers />
	</div>
</template>

<script>
	//底部导航栏
	import Tabers from '@/components/taBer.vue'

	export default {
		name: 'About',
		data() {
			return {

			}
		},
		components: {
			Tabers
		}
	};
</script>

<style scoped>
	.about {
		margin-top: 15px;
		height: 660px;
	}

	.xinxi-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	/* 头像 */
	.user-img img {
		width: 100px;
		border-radius: 50px;
	}

	.xinxi-colounm {
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	/* 名称 */
	.xinxi-colounm .title-h {
		font-family: SimHei;
		font-size: 20px;
		font-weight: bold;
		color: #040404;
		font-stretch: normal;
		letter-spacing: 0px;
	}

	/* 个人积分 */
	.xinxi-colounm .title-h2 {
		font-family: SimHei;
		font-size: 16px;
		color: #999999;
		font-weight: normal;
		line-height: 32px;
		letter-spacing: 0px;
	}

	/* 个人空间 */
	.xinxi-colounm .title-h3 {
		font-family: SimHei;
		font-size: 16px;
		color: #666666;
		font-weight: normal;
		line-height: 26px;
		letter-spacing: 0px;
		border: 1px solid #999999;
		border-radius: 20px;
		text-align: center;
		width: 100px;
	}

	/* 发帖 关注 粉丝 */
	.xinxi-row2 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
		padding: 15px 128px 10px 25px;
		text-align: left;
	}

	.xinxi-row2 .xinxi-f {
		font-size: 14px;
		width: 70px;
		border-right: solid 1px #ccc;
		text-align: center;
	}

	.xinxi-row2 .xinxi-weight {
		font-size: 18px;
		width: 25px;
		margin: auto;
		font-weight: normal;
		font-stretch: normal;
		color: #040404;
	}

	/* 签到广告 */
	.guangg {
		width: 350px;
		height: 140px;
		margin: auto;
	}

	.guangg img {
		margin: 10px auto;
		width: 345px;
		height: 110px;

	}

	.van-cell__title{
		margin-right: 235px;
	}

	/* 图标 */
	.icon-img {
		width: 20px;
		height: 18px;
		margin-top: 5px;
	}
	
	/* 文字 */
	.about .leibiao .van-cell__title{
		text-align: left;
	}

	.about .leibiao .van-cell__title span {
		margin-left: 10px;
		text-align: left;
	}
</style>
