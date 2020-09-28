<template>
	<div class="study">
		<div class="rgb">
			<van-nav-bar @click-left="fanghui" title="学习" left-arrow class="rgb">
			</van-nav-bar>
		</div>
		<div class="xuexi">
			<div class="xuexi1">
				<div class="xuexi-title">
					<div class="xuexi-biaoti">直播课程</div>
					<span>拿好小本本，开始学习充能！</span>
				</div>
			</div>
			<div class="xuexi1">
				<div class="xuexi-title">
					<div class="xuexi-biaoti">课程引导</div>
					<span>学习课前知识点</span>
				</div>
			</div>
			<div class="xuexi1">
				<div class="xuexi-title">
				<router-link to="./yezuoye">
					<div class="xuexi-biaoti">作业约课</div>
					<span class="xuexi-item">快来查缺补漏吧！</span>
				</router-link>
				</div>
			</div>
			<div class="xuexi1">
				<div class="xuexi-title">
					<div class="xuexi-biaoti">同学作业</div>
					<span >看看其他小伙伴的作业吧！</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'study',
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
	/* 阴影 */
	.rgb {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}

	.xuexi {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 435px;
	}

	.xuexi1 {
		width: 350px;
		height: 84px;
		border: 1px solid blue;
		margin: auto;
		text-align: center;
		border-radius: 6px;
	}

	.xuexi-title {
		margin: 16px auto;
		line-height: 25px;
		text-align: left;
		padding-left: 20px;
		font-size: 14px;
	}

	.xuexi-title .xuexi-biaoti {
		font-size: 18px;
		font-weight: bold;
		color: #040404;
	}
	
	.xuexi-title .xuexi-item{
		font-size: 15px;
		color: #666666;
	}
</style>
