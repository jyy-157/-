<template>
	<div class="kebiao">
		<van-sticky>
			<van-nav-bar left-text="课表" />
		</van-sticky>
		<van-tabs type="card" sticky :offset-top="45">
			<!-- 全部 -->
			<van-tab title="全部">
				<div class="lishi-title">
					<van-collapse v-model="activeName" accordion>
						<van-collapse-item title="历史记录" name="1">
							<div class="lishi">
								<img class="haibao" src="../assets/haibao.png" />
								<div class="">高级古风插画师专业...</div>
							</div>
						</van-collapse-item>
					</van-collapse>
				</div>
				<!-- 专业课程 -->
				<div class="kaijiang">
					<div class="tabDanu-title">专业课程</div>
					<div class="tabDanu-row">
						<img class="tabDanu-rowImg" src="../assets/haibao.png" />
						<div class="kaijian-xinxi">
							<span class="titleName">高级古风插画师专业班(云良)</span>
							<div class="kaijian-imgName">
								<span>讲师：云良</span>
							</div>
							<span class="kaijianDate">有效期：2020年6月1日</span>
							<router-link to="./study">
								<div class="yika-title">去学习</div>
							</router-link>
						</div>
					</div>
				</div>
				<!-- 视频教程 -->
				<div class="shiping">
					<div class="tabDanu-title">视频教程</div>
					<div class="jinre-row">
						<div class="jinre-rowColunm">
							<img src="../assets/sptp3.png" />
							<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
							<div class="userXinxi">
								<div class="toxName">
									<img src="../assets/toxiang3.png" />
									<span class="toxName-span">不被西瓜吃</span>
								</div>
							</div>
						</div>
						<div class="jinre-rowColunm">
							<img src="../assets/sptp4.png" />
							<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
							<div class="userXinxi">
								<div class="toxName">
									<img src="../assets/toxiang2.png" />
									<span>随缘一画</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="">
					<div class="tuijian">
						<!-- 作家 -->
						<div class="zuojia">
							<div class="zuojia-xinxi">
								<div class="zuojia-toxName">
									<img src="../assets/toxiang2.png" />
									<span>宝箱果 </span>
								</div>
								<img class="userMf" src="../assets/gengdo.png" />
							</div>
							<div class="jinre-colunm">
								<div class="zuojia-cp AIts">如何用SAI画出碧蓝大海？</div>
								<div class="zuojia-tuw1">
									<img src="../assets/timg1.png" />
								</div>
								<div class="miaoshu">如何才能画出有层次的云朵和蔚蓝大海的画面，本次由我为大家一...</div>
							</div>
						</div>
						<div class="zuojia">
							<div class="zuojia-xinxi">
								<div class="zuojia-xinxi-toxName">
									<img src="../assets/toxiang9.png" />
									<span class="toxName-span">风流不是流氓</span>
								</div>
								<img class="userMf" src="../assets/gengdo.png" />
							</div>
							<div class="jinre-colunm">
								<div class="zuojia-cp cpleft">关于原画材质金属如何绘画那些事</div>
								<div class="zuojia-tuw1">
									<img src="../assets/timg2.png" />
								</div>
								<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
							</div>
						</div>
					</div>
					<!-- 到底文字提示 -->
					<div class="dibutishi">-- 我是有底线的 --</div>
				</div>
			</van-tab>
			<van-tab title="专业课程">
				<!-- 专业课程 -->
				<div class="kaijiang">
					<div class="tabDanu-title">专业课程</div>
					<div class="tabDanu-row">
						<img class="tabDanu-rowImg" src="../assets/haibao.png" />
						<div class="kaijian-xinxi">
							<span class="titleName">高级古风插画师专业班(云良)</span>
							<div class="kaijian-imgName">
								<span>讲师：云良</span>
							</div>
							<span class="kaijianDate">有效期：2020年6月1日</span>
							<router-link to="./study">
								<div class="yika-title">去学习</div>
							</router-link>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="视频教程">
				<div class="shiping">
					<div class="tabDanu-title">视频教程</div>
					<div class="jinre-row">
						<div class="jinre-rowColunm">
							<img src="../assets/sptp3.png" />
							<span class="rowColunm-title">【画渣两分钟】如何才能规范自己的线条，不再... </span>
							<div class="userXinxi">
								<div class="toxName">
									<img src="../assets/toxiang3.png" />
									<span class="toxName-span">不被西瓜吃</span>
								</div>
							</div>
						</div>
						<div class="jinre-rowColunm">
							<img src="../assets/sptp4.png" />
							<span class="rowColunm-title">【日系插画】PROCREATE静态冬日雪景照片写生。 </span>
							<div class="userXinxi">
								<div class="toxName">
									<img src="../assets/toxiang2.png" />
									<span>随缘一画</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="大牛来了">
				<div class="daniu">
					<img src="../assets/kozhuangtai.png" />
					<van-button type="info">发现感兴趣的课程</van-button>
				</div>
			</van-tab>
			<van-tab title="图文教程">
				<div class="tuijian">
					<!-- 作家 -->
					<div class="zuojia">
						<div class="zuojia-xinxi">
							<div class="zuojia-toxName">
								<img src="../assets/toxiang2.png" />
								<span>宝箱果 </span>
							</div>
							<img class="userMf" src="../assets/gengdo.png" />
						</div>
						<div class="jinre-colunm">
							<div class="zuojia-cp AIts">如何用SAI画出碧蓝大海？</div>
							<div class="zuojia-tuw1">
								<img src="../assets/timg1.png" />
							</div>
							<div class="miaoshu">如何才能画出有层次的云朵和蔚蓝大海的画面，本次由我为大家一...</div>
						</div>
					</div>
					<div class="zuojia">
						<div class="zuojia-xinxi">
							<div class="zuojia-xinxi-toxName">
								<img src="../assets/toxiang9.png" />
								<span class="toxName-span">风流不是流氓</span>
							</div>
							<img class="userMf" src="../assets/gengdo.png" />
						</div>
						<div class="jinre-colunm">
							<div class="zuojia-cp cpleft">关于原画材质金属如何绘画那些事</div>
							<div class="zuojia-tuw1">
								<img src="../assets/timg2.png" />
							</div>
							<div class="miaoshu">简单介绍了一下从剧本到分页、分格脚本、分镜草图的过程。是我...</div>
						</div>
					</div>
					<!-- 到底文字提示 -->
					<div class="dibutishi">-- 我是有底线的 --</div>
				</div>
			</van-tab>
		</van-tabs>
		<div>
			<Tabers />
		</div>
	</div>
</template>

<script>
	//底部导航栏
	import Tabers from '@/components/taBer.vue'
	export default {
		data() {
			return {
				activeName: '1'
			}
		},
		components: {
			Tabers
		},
		// methods: {
		// 	quxuexi(){
		// 		this.$router.push({
		// 			path: '/study'
		// 		})
		// 	}
		// },
	}
</script>

<style>
	/* 阴影 */
	/* .rgb {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.05) 0px 17px 20px 0px;
	}
 */
	/* 顶部导航栏 */
	.kebiao .van-nav-bar__text {
		color: #0d0e0e;
		font-size: 23px;
		font-weight: bold;
	}

	/* 分类栏 */
	.kebiao .van-tabs__nav--card {
		box-sizing: border-box;
		height: 30px;
		margin: 0 16px;
		border: 0px solid;
		border-radius: 0px;
	}

	/* 分类栏 的背景色 */
	.kebiao .van-tabs__wrap {
		overflow: hidden;
		height: 42px;
		background-color: #ffff;
	}

	/* 选中显示 */
	.kebiao .van-tabs__nav--card .van-tab.van-tab--active {
		color: #fff;
		background-color: #2196F3;
		border-radius: 20px;
	}

	.kebiao .van-tabs__nav--card .van-tab {
		border-right: 0px solid;
	}

	/* 未选中 */
	.kebiao .van-tabs__nav--card .van-tab {
		color: #2c3e50;
		border-right: 1px solid;
		background-color: #ffffff;
		border-radius: 18px;
		border: solid 2px #999999;
	}

	/* 历史记录 */
	.kebiao .lishi-title .van-cell__title span {
		/* padding-right: 220px; */
		font-size: 20px;
		font-weight: bold;
	}

	.lishi {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 180px;
		height: 175px;
		font-size: 18px;
		color: #040404;
	}

	.haibao {
		width: 160px;
	}

	/* 专业课程 */
	.kaijiang {
		display: flex;
		height: 180px;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.tabDanu-title {
		padding-right: 250px;
		font-size: 20px;
		font-weight: bold;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #040404;
		margin-top: 10px;
	}

	.tabDanu-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 370px;
	}

	/* 即将开讲的图片 */
	.tabDanu-row .tabDanu-rowImg {
		width: 150px;
	}

	/* 开讲者的信息 */
	.kaijian-xinxi {
		height: 95px;
		/* text-align: left; */
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: auto;
	}

	.titleName {
		font-family: SimHei;
		width: 210px;
		font-size: 18px;
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
	}

	.kaijian-imgName {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
	}

	/* 开讲时间 */
	.kaijianDate {
		color: #666666;
		font-size: 14px;
	}

	/* 去学习 */
	.kaijiang .yika-title {
		line-height: 26px;
		width: 71px;
		height: 25px;
		background-image: linear-gradient(115deg, #182b7c 0%, #4357ae 46%, #6d82df 100%);
		border-radius: 24px;
		color: #fdfdfd;
		margin-left: 120px;
		text-align: center;
		font-size: 15px;
	}

	/* 视频教程 */
	.shiping {
		height: 255px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.jinre-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 280px;
	}

	.jinre-rowColunm {
		font-size: 16px;
		height: 180px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 2;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	/* 作者图片 */
	.jinre-rowColunm img {
		width: 170px;
	}

	.rowColunm-title {
		font-family: SimHei;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #040404;
		width: 180px;
		display: -webkit-box;
		/*作为弹性伸缩盒子模型显示*/
		-webkit-line-clamp: 2;
		/*显示的行数；如果要设置2行加...则设置为2*/
		overflow: hidden;
		text-overflow: ellipsis;
		/* 溢出用省略号*/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/*伸缩盒子的子元素排列：从上到下*/
	}

	/* 作者信息 */
	.userXinxi {
		width: 185px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #666666;
		font-size: 14px;
	}


	.tuijian {
		margin: auto;
	}

	/* 图文教程 */
	.zuojia {
		margin: 10px auto;
	}

	.zuojia-xinxi {
		width: 370px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #666666;
	}

	/* 头像 名称 */
	.zuojia-toxName {
		width: 92px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
		font-size: 16px;
	}

	.zuojia-xinxi-toxName {
		width: 140px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
	}

	/* 头像 */
	.zuojia-xinxi-toxName img {
		width: 25px;
	}

	.zuojia-toxName img {
		width: 25px;
	}

	/* 名称 */
	.toxName-span {
		font-weight: normal;
		font-stretch: normal;
		font-family: SimHei;
		color: #666666;
		font-size: 14px;
	}

	.zuojia-xinxi .userMf {
		width: 32px;
		margin-right: 10px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 28px;
	}

	.jinre-colunm .zuojia-cp {
		font-weight: bold;
		font-stretch: normal;
		line-height: 50px;
		letter-spacing: 0px;
		color: #040404;
		font-size: 16px;
	}

	.cpleft {
		padding-right: 100px;
	}

	.zuojia-xinxi .jinre-colunm .zuojia-tuw1 {
		width: 370px;
		margin: auto;
	}

	/* 图片 */
	.jinre-colunm .zuojia-tuw1 img {
		width: 350px;
		margin: auto;
	}

	/* 文字描述 */
	.jinre-colunm .miaoshu {
		width: 350px;
		font-family: SimHei;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #666666;
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
	}

	/* 【SAI笔刷】 */

	.jinre-colunm .SAI {
		margin-right: 265px;
	}

	/* 大牛来了 */
	.daniu {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 360px;
		font-size: 20px;
	}

	/* 空状态 */
	.custom-image .van-empty__image {
		width: 90px;
		height: 90px;
	}

	.daniu .van-button--normal {
		padding: 0 15px;
		font-size: 18px;
		background-color: #3f51b5bd;
	}

	/* -- 我是有底线的 -- */
	.dibutishi {
		color: #9E9E9E;
		margin-top: 20px;
		height: 100px;
		font-size: 16px;
	}
</style>
