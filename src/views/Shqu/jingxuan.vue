<template>
	<div class="jingxuan">
		<div class="jingxuan-tab">
			<van-tabs v-model="active">
				<van-tab title="全部">
					<div class="contenr">
						<div class="daniu-guangao">
							<img src="../../assets/guangao5.png">
						</div>
						<!-- 作品的发表 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/toxian.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/zuopin3.png" />
						</div>
						<!-- 作品的发表2 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/zuixinto4.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/zuopin4.png" />
						</div>
						<!-- 作品的发表3 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/zuixinto5.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/zuopin5.png" />
						</div>
						<!-- 作品的发表4 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/zuixinto6.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/zuopin4.png" />
						</div>
						<!-- 作品的发表5 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/gufengtox.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/rwu.png" />
						</div>
						<!-- 作品的发表6 -->
						<div class="contenr-zuoping">
							<div class="zuoping-zuoz">
								<div class="zuoz-name">
									<!-- 作者头像 -->
									<img src="../../assets/nvto.png" />
									<div class="nicheng">
										<!-- 作者昵称 -->
										<div>空白</div>
										<span>3分钟前</span>
									</div>
								</div>
								<!-- 发布的作品 -->
								<img class="zuopin-gengdo" src="../../assets/gengdo.png" />
							</div>
							<!-- 作品的发表文字 -->
							<div class="zuopin-title">
								<div class="zuopin-radius">
									作品
								</div>
								<span class="zuopin-miaos">哈哈哈，这是以前画的东西，现在拿出来，再次绘画，看看自己进步了没有。</span>
							</div>
							<img class="nangufen" src="../../assets/zuopin7.png" />
						</div>
					</div>
					<!-- 到底文字提示 -->
					<div class="dibutishi">-- 我是有底线的 --</div>
				</van-tab>
				<van-tab title="作品">内容 2</van-tab>
				<van-tab title="指绘">内容 3</van-tab>
				<van-tab title="讨论">内容 4</van-tab>
			</van-tabs>
		</div>
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
	.jingxuan {
		/* height: 1334px;
		background:#ebebeb96; */
	}

	.jingxuan-tab {}

	.jingxuan .van-tabs__nav--card {
		box-sizing: border-box;
		height: 30px;
		margin: 0 16px;
		border: 0px solid;
		border-radius: 0px;
	}

	/* 分类栏 的背景色 */
	.jingxuan .van-tabs__wrap {
		overflow: hidden;
		height: 42px;
		background-color: #ffff;
		/* 阴影 */
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	/* 间距 */
	.jingxuan .van-tabs__nav--line {
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
	.jingxuan .van-tabs__line {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 0;
		width: 0;
		height: 0;
		background-color: none;
	}

	/* 选中显示 */
	.jingxuan .van-tab--active {
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
	.jingxuan .van-tab {
		line-height: 50px;
		border: 1px solid;
		border-radius: 25px;
		-webkit-flex: none;
		width: 60px;
		height: 30px;
	}

	/* .zuixin .van-tabs__nav--card .van-tab {
		border-right: 0px solid;
	} */

	/* .zuixin .van-cell__title span {
		padding-right: 220px;
		font-size: 20px;
		font-weight: bold;
	} */

	/* 内容 */
	.contenr {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		margin-top: 20px;

	}

	/* 广告 */
	.daniu-guangao img {
		width: 360px;
		height: 100%;
	}

	/* 作品的发表 */
	.contenr-zuoping {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		margin: auto;
		height: 350px;
		margin-top: 10px;
	}

	.contenr-zuoping .nangufen {
		width: 360px;
	}

	.zuoping-zuoz {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
	}

	/* 发布的作品 */
	.zuopin-gengdo {
		width: 40px;
		height: 35px;
	}

	/* 作者昵称 头像 */
	.zuoz-name {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
		padding-right: 190px;
	}

	/* 作者头像 */
	.zuoz-name img {
		width: 45px;
		height: 45px;
	}

	/* 作者昵称 */
	.nicheng {
		font-size: 16px;
		color: #666666;
	}

	/* 作者发布了多久 */
	.nicheng span {
		font-size: 14px;
		color: #999999;
	}

	/* 作品的发表文字 */
	.zuopin-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
		font-size: 14px;
		color: #666666;
		width: 355px;
	}

	/* 作品 圆框 */
	.zuopin-radius {
		width: 70px;
		height: 20px;
		background-color: #cccccc;
		border-radius: 18px;
		border: solid 1px #cccccc;
		color: #ffffff;
		line-height: 20px;
	}

	/* 作品的发表的文字内容 */
	.zuopin-miaos {
		text-align: left;
		padding-left: 15px;
	}

	/* 到底文字提示 */
	.dibutishi {
		color: #9E9E9E;
		margin-top: 40px;
		height: 100px;
	}
</style>
