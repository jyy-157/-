<template>
	<div class="zhifuye">
		<div class="zhifuye-bg">
			<div class="zhifuye-bgRow">
				<img src="../../assets/xiaohuanr.png" />
				<span>121****59</span>
			</div>
		</div>
		<div class="zhifuxianq-colunm">
			<div class="zhifuxianq">
				<div class="zhifu-svg">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zhifubao"></use>
					</svg>
					<div class="zhifu-span">付款详情</div>
				</div>
				<span class="passward">用密码支付</span>
			</div>
			<div class="zhifuxx">
				<div class="zhifuxinxi">
					<span>支付宝账号</span>
					<span>121****59</span>
				</div>
				<div class="zhifuxinxi">
					<span>订单信息 </span>
					<span>高级古风插画专业班（云良</span>
				</div>
				<div class="zhifuxinxi">
					<span>付款方式</span>
					<span> 花呗 ></span>
				</div>
			</div>
		</div>
		<van-button type="info">立即付款</van-button>
	</div>
</template>

<script>
	import '../../common/iconf/iconfont.js'
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	@import url("../../common/comm.css");

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		font-size: 26px;
	}

	.zhifuye-bg {
		width: 375px;
		height: 220px;
		background-color: #999999;
	}

	.zhifuye-bgRow {
		height: 145px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding-top: 30px;
	}

	.zhifuye-bgRow img {
		width: 95px;
	}

	.zhifuye-bgRow span {
		font-family: SimHei;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #fdfdfd;
	}

	/* 付款详情 */
	.zhifuxianq-colunm {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 170px;
	}

	.zhifuxianq {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding-left: 90px;
	}

	/* 支付图片 */
	.zhifu-svg {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	/* 付款详情 文字 */
	.zhifu-svg .zhifu-span {
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #040404;
	}

	/* 用密码支付 */
	.passward {
		font-family: SimHei;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #999999;
	}

	.zhifuxx {
		display: flex;
		width: 372px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 105px;
	}

	.zhifuxinxi {
		display: flex;
		width: 330px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		color: #666666;
	}

	.zhifuye .van-button--info {
		margin-top: 200px;
		color: #fff;
		background-color: #1989fa;
		border: 0.02667rem solid #1989fa;
		width: 350px;
		height: 40px;
	}
</style>
