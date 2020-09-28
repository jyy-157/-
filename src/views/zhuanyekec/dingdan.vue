<template>
	<div class="dingdan">
		<div class="rgb">
			<van-sticky>
				<van-nav-bar @click-left="fanghui" title="确认订单" left-arrow class="rgb">
				</van-nav-bar>
			</van-sticky>
		</div>
		<div class="kaijiang">
			<div class="tabDanu-title">专业课程</div>
			<div class="tabDanu-row">
				<img class="tabDanu-rowImg" src="../../assets/zhuanye2.png" />
				<div class="kaijian-xinxi">
					<span class="titleName">高级古风插画师专业班(云良)</span>
					<div class="kaijian-imgName">
						<div class="natox">
							<img src="../../assets/natox.png" />
							<span>云良</span>
						</div>
						<div>￥4800.0</div>
					</div>
				</div>
			</div>
			<div class="ma-top">
				<van-radio-group v-model="radio">
					<div class="zhifu">
						<div class="zhifu-row">
							<div class="weixi">
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-wx"></use>
								</svg>
								<div class="">支付宝支付</div>
							</div>
							<van-radio name="1" checked-color="#07c160"></van-radio>
						</div>
					</div>
					<hr>
					<div class="zhifu">
						<div class="zhifu-row">
							<div class="weixi">
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-zhifubao"></use>
								</svg>
								<div class="">微信支付</div>
							</div>
							<van-radio name="2" checked-color="#07c160"></van-radio>
						</div>
					</div>
				</van-radio-group>
			</div>
			<div class="xiadan">
				<div class="goumai-red">合计： ￥4800.0</div>
				<router-link to="/zhifu">
					<div class="xiadanBuy">
						<span>立即购买</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../common/iconf/iconfont.js'
	export default {
		name: 'dingdan',
		data() {
			return {
				radio: '1'
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
	@import url("../../common/comm.css");

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		font-size: 26px;
	}

	/* 阴影 */
	.dingdan .rgb {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	.dingdan .kaijiang {
		margin-top: 50px;
		display: flex;
		height: 250px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.dingdan .tabDanu-title {
		padding-right: 250px;
		font-size: 18px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 50px;
		letter-spacing: 0px;
		color: #666666;
	}

	.dingdan .tabDanu-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 350px;
	}

	/* 图片 */
	.dingdan .tabDanu-row .tabDanu-rowImg {
		width: 120px;
	}

	/* 作者的信息 */
	.dingdan .kaijian-xinxi {
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: auto;
		color: #999999;
	}

	.dingdan .titleName {
		font-family: SimHei;
		width: 210px;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 1;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
		margin-top: -50px;
	}

	.dingdan .kaijian-imgName {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 15px;
	}

	.dingdan .natox {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	
	.ma-top{
		margin-top: 30px;
	}

	.zhifu {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 375px
	}

	.zhifu-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 345px;
		margin: -4px auto;
	}

	.weixi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
	}

	.zhifu img {
		width: 50px;
		height: 50px;
	}

	.xiadan {
		width: 375px;
		height: 60px;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		font-size: 16px;
	}

	.xiadanBuy {
		width: 100px;
		height: 36px;
		background-color: #6d82df;
		border-radius: 31px;
		line-height: 35px;
		color: #fff;
	}
</style>
