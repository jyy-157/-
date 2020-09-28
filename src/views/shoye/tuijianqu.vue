<template>
	<div class="tuijianqu">
		<div class="yanjing">
			<!-- 作品眼睛 -->
			<img src="../../assets/yanjing.png" />
			<!-- 作品标题 -->
			<div class="yanjing-title">画渣如何最快画眼睛！三分钟拯救手废！</div>
			<!-- 信息 -->
			<div class="accidence">
				<div class="mianfei">免费</div>
				<div class="difficulty">
					<span>学习难度:入门</span>
					<span class="number">学习人数：70</span>
				</div>
				<!-- 画画分类栏 -->
				<div class="classify">
					<div class="classify-border">上色</div>
					<div class="classify-border">上色</div>
					<div class="classify-border">上色</div>
					<div class="classify-border">上色</div>
				</div>
				<div class="lecturer">主讲：哗啦啦</div>
			</div>
			<!-- 眼睛结构 -->
			<div class="structure">
				<!-- 眼睛结构标题 -->
				<div class="structure-headline">画之前要了解一下眼睛的结构,点击图片查看大图</div>
				<img src="../../assets/yanjing2.png" />
				<img src="../../assets/yanjing3.png" />
				<img src="../../assets/yanjing4.png" />
			</div>
			<!-- 眼睛步骤 -->
			<div class="yanjing-step">
				<!-- 眼睛步骤标题 -->
				<div class="step-headline">大概了解完毕，那我们就可以按以下步骤画眼睛了~</div>
				<img src="../../assets/yanjing5.jpg" />
				<img src="../../assets/yanjing6.jpg" />
				<img src="../../assets/yanjing7.jpg" />
				<img src="../../assets/yanjing8.jpg" />
				<img src="../../assets/yanjing9.jpg" />
				<img src="../../assets/yanjing10.jpg" />
			</div>
			<!-- 到底文字提示 -->
			<div class="line">-- 我是有底线的 --</div>
		</div>
		<!-- 底部内容 -->
		<div class="bottom-content">
			<div class="zixun">
				<img src="../../assets/zix.png" />
				<div>咨询</div>
			</div>
			<!-- 获取课程 -->
			<div class="gain">获取课程</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.tuijianqu {
		font-family: SimHei;
	}

	/* 作品眼睛 */
	.yanjing img {
		width: 100%;
	}

	/*作品标题 */
	.yanjing-title {
		font-size: 16px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 35px;
		letter-spacing: 0px;
		color: #040404;
		padding-left: 20px;
		text-align: left;
	}

	/* 信息 */
	.accidence {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: left;
		padding-left: 20px;
		height: 130px;
	}

	/* 免费 */
	.mianfei {
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 30px;
		letter-spacing: 0px;
		color: #27ab16;
	}

	.difficulty {
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
	}

	.difficulty .number {
		padding: 0px 10px;
	}

	/* 画画分类栏 */
	.classify {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 215px;
	}

	.classify-border {
		width: 40px;
		height: 15px;
		background-color: #ffffff;
		border-radius: 17px;
		border: solid 1px #6d82df;
		font-size: 12px;
		color: #6d82df;
		line-height: 15px;
		text-align: center;
	}

	/* 主讲老師 */
	.lecturer {
		font-family: SimHei;
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
	}

	/* 眼睛结构 */
	.structure {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 750px;
	}

	/* 眼睛结构标题 */
	.structure-headline {
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
		text-align: left;
		padding-left: 20px;
	}

	.yanjing-step {
		width: 330px;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 1400px;
	}

	/* 眼睛步骤 教学图 */
	.yanjing-step img {
		width: 330px;
	}

	/* 眼睛步骤标题 */
	.step-headline {
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 50px;
		letter-spacing: 0px;
		color: #333333;
	}

	/* 到底文字提示 */
	.line {
		font-size: 16px;
		color: #9E9E9E;
		margin-top: 40px;
		height: 100px;
	}

	/* 底部内容 */
	.bottom-content {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 55px;
		background-color: #ffffff;
		border-top: solid 1px #182b7c;
		align-items: center;
		position: fixed;
		bottom: 0;
		width:375px ;
	}

	/* 咨询 */
	.zixun {
		color: #999999;
		font-size: 14px;
	}

	/* 咨询图标 */
	.zixun img {
		width: 25px;
	}

	/* 获取课程 */
	.gain {
		width: 250px;
		height: 30px;
		background-image: linear-gradient(90deg,
			#182b7c 0%,
			#6d82df 100%);
		border-radius: 33px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 30px;
		letter-spacing: 0px;
		color: #ffffff;
		font-size: 18px;
	}
</style>
