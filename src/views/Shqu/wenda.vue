<template>
	<div class="wenda">
		<van-tabs v-model="active">
			<van-tab title="全部">
				<div class="contenr">
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/gaoxiao1@2x.png" />
								<span></span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">手的摆放无论怎么画都不对。</div>
								<span class="border-normal">画了最简单的体积，感觉也还是不对劲，怪怪的。</span>
							</div>
							<img src="../../assets/sho.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/toxiang12.png" />
								<span>敢敢不是憨憨</span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">作品分享。</div>
								<span class="border-normal">画了一个月的时间，涂涂改改，废了好些时间</span>
							</div>
							<img src="../../assets/wenda4.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/toxiang10.png" />
								<span>上北下南的东</span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">给你们看看小时候画的人物。</div>
								<span class="border-normal">哈哈哈，有意思，你们顺便看看我现在画的、 东西。看看有啥问题。</span>
							</div>
							<img src="../../assets/wenda2.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/nvto.png" />
								<span>喜欢所有的小可爱</span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">画了个小可爱，大家快来看看。</div>
								<span class="border-normal">感觉有些地方画的不是很好，希望大佬可以点评一下</span>
							</div>
							<img src="../../assets/wenda1.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/natox.png" />
								<span>云淡风轻</span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">感觉不到位，还差一点点</div>
								<span class="border-normal">画到不知道今夕是何年。 </span>
							</div>
							<img src="../../assets/wenda5.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
					<div class="contenr-border">
						<div class="border-contenr">
							<div class="gaoxiao1">
								<img class="gaoxiao1-L" src="../../assets/gufengtox.png" />
								<span>圆滚滚</span>
							</div>
							<img class="gengdo-R" src="../../assets/gengdo.png" />
						</div>
						<!-- 作品的发表 -->
						<div class="border-row">
							<div class="border-row-colunmm">
								<div class="border-bold">圆滚滚。</div>
								<span class="border-normal">手绘铅笔画</span>
							</div>
							<img src="../../assets/wenda3.png" />
						</div>
						<div class="xingwei">
							<div class="gaoxiao2">
								<van-icon name="share-o" />
								<span>转发</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="comment-o" />
								<span>回答</span>
							</div>
							<div class="gaoxiao2">
								<van-icon name="good-job-o" />
								<span>点赞</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 到底文字提示 -->
				<div class="dibutishi">--  往上拉，查看更多问题~  --</div>
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

<style >
	.wenda {
		background: #ebebeb96;
	}

	.wenda .van-tabs__nav--card {
		box-sizing: border-box;
		height: 30px;
		margin: 0 16px;
		border: 0px solid;
		border-radius: 0px;
	}

	/* 分类栏 的背景色 */
	.wenda .van-tabs__wrap {
		overflow: hidden;
		height: 42px;
		background-color: #ffff;
		/* 阴影 */
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	/* 间距 */
	.wenda .van-tabs__nav--line {
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
	.wenda .van-tabs__line {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 0;
		width: 0;
		height: 0;
		background-color: none;
	}

	/* 选中显示 */
	.wenda .van-tab--active {
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
	.wenda .van-tab {
		line-height: 50px;
		border: 1px solid;
		border-radius: 25px;
		-webkit-flex: none;
		width: 60px;
		height: 30px;
	}

	/* 内容 */
	.wenda .contenr {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		margin-top: 20px;
		height: 1300px;

	}

	/* 框框内容 */
	.contenr-border {
		width: 360px;
		height: 200px;
		background-color: #ffffff;
		border-radius: 10px;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
	}

	.contenr-border .border-contenr {
		width: 365px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	/* 头像昵称 */
	.gaoxiao1 {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	.gaoxiao1 span {
		padding-left: 10px;
	}

	/* 头像 */
	.border-contenr .gaoxiao1-L {
		width: 40px;
		height: 40px;
		padding-left: 8px;
	}

	/* 左边图标 */
	.border-contenr .gengdo-R {
		width: 30px;
		height: 30px;
	}

	/* 作品的发表 */
	.border-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		width: 350px;
		text-align: left;
	}

	/* 作品图 */
	.border-row img {
		width: 110px;
		height: 80px;
	}

	/* 作品的描述 */
	.border-row-colunmm {
		display: flex;
		flex-direction: column;
		/* justify-content: space-around; */
		align-content: center;
		font-size: 16px;
		padding-left: 10px;
	}

	/* 标题 */
	.border-bold {
		font-size: 16px;
		font-weight: bold;
		line-height: 20px;
	}

	/* 小标题 */
	.border-normal {
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 28px;
		letter-spacing: 0px;
		color: #999999;
	}

	/* 转发 回答 点赞*/
	.xingwei{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
	}
	
	.gaoxiao2{
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #999999;
	}
	
	/* 图标 的大小*/
	.wenda .xingwei .van-icon-share-o::before {
		content: '\F0E7';
		font-size: 25px;
	}

	/* 到底文字提示 */
	.dibutishi {
		color: #9E9E9E;
		margin-top: 50px;
		height: 80px;
	}
</style>
