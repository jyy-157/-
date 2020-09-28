<template>
	<div class="">
		<div class="">
			<van-sticky>
				<van-nav-bar @click-left="fanghui" title="高级古风插画班（云良）" left-arrow>
				</van-nav-bar>
			</van-sticky>
		</div>
		<div class="xiangqye-img">
			<img src="../../assets/xiangqye.png" />
		</div>
		<div class="xiangqye-img1">
			<img src="../../assets/xiangqy.png" />
		</div>
		<div class="xianqye2">
			<img src="../../assets/xianqye2.png" />
		</div>
		<div class="xiangqye3">
			<img src="../../assets/xiangqye3.png" />
		</div>
		<div class="goumai">
			<div class="goumai-red">￥4800.0</div>
			<div class="fangan">
				<span>制定学习方案</span>
			</div>
			<router-link to="/dingdan">
				<div class="buy">
					<span>立即购买</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'kechengXianq',
		data() {
			return {

			}
		},
		methods: {
			fanghui() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.xiangqye-img img {
		width: 100%;
	}

	.xiangqye-img1 img {
		margin-top: 20px;
		width: 100%;
	}

	.xianqye2 img {
		width: 100%;
		margin-top: -220px;
	}

	.xiangqye3 {
		height: 600px;
	}

	.xiangqye3 img {
		width: 100%;
	}

	.goumai {
		width: 375px;
		height: 60px;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
		position: fixed;
		bottom: 0;
	}

	/* 价格 */
	.goumai .goumai-red {
		color: red;
	}

	/* 制定学习方案 */
	.fangan {
		width: 130px;
		height: 30px;
		background-color: #7e8ed3;
		border-radius: 31px;
		line-height: 30px;
		color: #ffff;
	}

	/* 立即购买 */
	.buy {
		width: 90px;
		height: 30px;
		background-image: linear-gradient(90deg, #182b7c 0%, #6d82df 100%);
		border-radius: 31px;
		line-height: 30px;
		color: #fff;
	}
</style>
