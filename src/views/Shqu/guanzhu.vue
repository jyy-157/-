<template>
	<div class="guanzhu">
		<van-tabs v-model="active">
			<van-tab title="全部">
				<div class="quanbu">
					<img src="../../assets/kozhuangtai.png" />
					<span class="quanbu-title">你还没有关注别人哦~</span>
					<span class="quanbu-title2">快去看看别人吧！</span>
				</div>
			</van-tab>
			<van-tab title="作品">内容 2</van-tab>
			<van-tab title="指绘">内容 3</van-tab>
			<van-tab title="讨论">内容 4</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>

<style>
	.guanzhu {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 0.37333rem;
		line-height: 1.6rem;
	}

	.guanzhu .van-tabs__nav--card {
		box-sizing: border-box;
		height: 30px;
		margin: 0 16px;
		border: 0px solid;
		border-radius: 0px;
	}

	/* 分类栏 的背景色 */
	.guanzhu .van-tabs__wrap {
		padding-right: 90px;
		overflow: hidden;
		height: 42px;
		background-color: #ffff;
		/* 阴影 */
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	/* 间距 */
	.guanzhu .van-tabs__nav--line {
		box-sizing: content-box;
		height: 100%;
		padding-bottom: 0.2rem;
		width: 280px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	/*去掉 下划线 */
	.guanzhu .van-tabs__line {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 0;
		width: 0;
		height: 0;
		background-color: none;
	}

	/* 选中显示 */
	.guanzhu .van-tab--active {
		color: #ffff;
		font-weight: 600;
		font-size: 18px;
		background-image: linear-gradient(90deg,
			#182b7c 0%,
			#6d82df 100%);
		width: 60px;
		height: 30px;
	}

	/*未选中显示 */
	.guanzhu .van-tab {
		line-height: 50px;
		border: 1px solid;
		border-radius: 25px;
		-webkit-flex: none;
		width: 60px;
		height: 30px;
	}

	/* 内容 */
	.guanzhu .quanbu {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: center;
		margin-top: 150px;
	}

	.quanbu img {
		width: 120px;
		margin: auto;
	}

	.quanbu-title {
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
		margin-top: 30px;
	}

	.quanbu-title2 {
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
	}
</style>
