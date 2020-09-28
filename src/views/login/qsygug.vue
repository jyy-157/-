<template>
	<div class="qsygug">
		<div class="swpImg">
			<van-swipe :loop="false">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :v-lazy="image" :src="image.img" />
					<div class="swptitle">
						<span>{{image.title1}}</span>
						<p>{{image.title2}}</p>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/qishiy4.png">
					<div class="swptitle">
						<span>多种教程，我们提供</span>
						<p>多种教程随心搭配，我们不仅仅一种选择</p>
					</div>
					<van-button  to="/sign" style="width: 180px;font-size: 20px;background-color: #6D82DF;" type="info">开始体验</van-button>
				</van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'qsygug',
		data() {
			return {
				images: [{
						img: require('../../assets/qishiy2.png'),
						title1: '勤快是最快的捷径',
						title2: '有目标的勤快，才会事半功倍'
					},
					{
						img: require('../../assets/qishiy3.png'),
						title1: '兴趣是学习最好的老师',
						title2: '没有兴趣的带领，学习只会枯燥无味'
					}
				],
			};
		},
	};
</script>

<style>
	.qsygug .swpImg {
		margin: auto;
	}
	
	.qsygug .van-swipe-item img {
		margin: 38px  auto;
		width: 240px;
		height: 240px;
	}
	
	.qsygug .van-swipe {
		height: 610px;
	}
	
	/* 文字 */
	.qsygug .swptitle {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 18px;
	}
	
	.swptitle span {
		font-size: 20px;
		color: #000;
		font-weight: 900;
	}
	
	/* 轮播的小圆点 */
	.qsygug .van-swipe__indicator {
		width: 16px;
		height: 16px;
		background-color: #3878e1;
	}
	
	.qsygug .van-swipe__indicator:not(:last-child) {
		margin-right: 18px;
	}
</style>
