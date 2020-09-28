<template>
	<div class="">
		<div class="rgb">
			<van-nav-bar @click-left="fanghui" title="约作业" left-arrow class="rgb" >
			</van-nav-bar>
		</div>
		<div class="zhuanye">
			<!-- 专业课程 -->
			<div class="zhuangyeke">
				<div class="raduis">
					<img src="../../assets/kecheng1.png" />
				</div>
				<div class="zhuangyekecheng">
					<div class="zhuangyekecheng">
						<div class="zhuangyekeTitle">专业课程</div>
						<p>约课规则</p>
						<span>本周剩余免费约课<span style="color: red;">2</span>次</span>
					</div>
					<router-link to="/xuanzelaoshi">
						<div class="yuyue">预约辅导课</div>
					</router-link>
				</div>
			</div>
			<div class="zhuangyeke">
				<div class="raduis">
					<img class="jilu" src="../../assets/jilu.png" />
				</div>
				<div class="zhuangyekecheng">
					<div class="zhuangyekeTitle">约课记录</div>
					<div class="yuyue">约课录像</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'yezuoye',
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
	.
	
	/* 阴影 */
	.rgb {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}
	
	.zhuanye {
		margin: 10px auto;
	}

	/* 专业课程 */
	.zhuangyeke {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 360px;
		height: 146px;
	}

	/* 圆形背景 */
	.raduis {
		width: 110px;
		height: 110px;
		border-radius: 100%;
		background-color: #cbcbcb73;
	}

	/* 专业课程 图片 */
	.raduis img {
		width: 70px;
		margin: 26px auto;
	}

	.zhuangyekecheng {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		text-align: left;
		font-size: 14px;
		color: #666666;
		height: 100px;
	}

	.zhuangyekeTitle {
		font-size: 18px;
		font-weight: bold;
		font-stretch: normal;
	}
	
	/* 预约辅导课 */
	.yuyue {
		width: 88px;
		height: 28px;
		/* 		border: 1px solid #cccc; */
		border-radius: 10px;
		margin-left: 120px;
		background-image: linear-gradient(115deg, #182b7c 0%, #4357ae 46%, #6d82df 100%);
		border-radius: 24px;
		color: #fdfdfd;
		line-height: 28px;
		text-align: center;
	}

	/* 约课记录 图片 */
	.raduis .jilu {
		width: 70px;
		margin: 20px auto;
	}
</style>
