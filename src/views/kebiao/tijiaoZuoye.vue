<template>
	<div class="tijiaozuoye">
		<div class="rgb">
			<van-nav-bar @click-left="fanghui" left-arrow class="rgb">
			</van-nav-bar>
		</div>
		<div class="fudozy">
			<div class="fudozy-title">
				<span class="xuanzefudo">选择辅导作业</span>
				<span>问题描述:认真的描述问题让老师更好的了解你~（至少10个字</span>
			</div>
		</div>
		<div class="zuoyetup">
			<div class="tupian">
				<img src="../../assets/add.png" />
				<samp>添加作业图片（必填）</samp>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tijiaoZuoye',
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
	.tijiaozuoye {
		background: #dadada;
		height: 670px;
	}

	.fudozy {
		margin-top: 20px;
		width: 355px;
		height: 125px;
		background-color: #ffff;
		border-radius: 13px;
		margin: auto;
	}

	.fudozy-title {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		line-height: 24px;
	}

	.fudozy-title .xuanzefudo {
		font-family: SimHei;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
		margin-top: 10px;
		padding-right: 212px;
	}

	.fudozy-title span {
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
	}

	.zuoyetup {
		margin-top: 20px;
		width: 355px;
		height: 225px;
		background-color: #ffff;
		border-radius: 13px;
		margin: auto;
	}

	.tupian {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		line-height: 70px;
		font-size: 16px;
		color: #999999;
	}

	.tupian img {
		width: 60px;
		padding-top: 45px;
	}
</style>
