<template>
	<div class="xuanzelaoshi">
		<div class="rgb">
			<van-nav-bar @click-left="fanghui" title="选择老师" left-arrow class="rgb">
			</van-nav-bar>
		</div>
		<div class="">
			<div class="laoshi-xinxi">
				<div class="laoshi" v-for="(item,index) in list" :key="index">
					<img :src="item.img" />
					<span>{{item.name}}</span>
				</div>
			</div>
			<div class="">
				<van-collapse v-model="activeName" accordion>
					<van-collapse-item name="1">
						<div class="coll-time">
							<div class="time">
								<div class="date">
									<div>周一</div>
									<span>8月24日</span>
								</div>
								<div class="date">
									<div>周二</div>
									<span>8月25日</span>
								</div>
								<div class="date">
									<div>周三</div>
									<span>8月26日</span>
								</div>
								<div class="date">
									<div>周四</div>
									<span>8月27日</span>
								</div>
								<div class="date">
									<div>周五</div>
									<span>8月28日</span>
								</div>
								<div class="date">
									<div>周六</div>
									<span>8月29日</span>
								</div>
								<div class="date">
									<div>周日</div>
									<span>8月30日</span>
								</div>
							</div>
							<div class="shijian">
								<div class="am">
									<div class="amTitle">上午</div>
									<div class="minute">
										<span>11:00 - 12:00</span>
									</div>
								</div>
								<div class="am">
									<div class="amTitle left">下午</div>
									<div class="am-row">
										<div class="minute1">
											<span>13:30 - 14:30</span>
										</div>
										<div class="minute2">
											<span>15:00 - 16:00</span>
										</div>
									</div>
								</div>
								<div class="am">
									<div class="amTitle left">晚上</div>
									<div class="am-row">
										<div class="minute2">
											<span>19:00 - 20:00</span>
										</div>
										<div class="minute2">
											<span>20:30 - 21:30</span>
										</div>
									</div>
								</div>
							</div>
							<div class="xiayibu" @click="xiayibu">下一步</div>
						</div>
					</van-collapse-item>
				</van-collapse>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xuanzelaoshi',
		data() {
			return {
				activeName: '1',
				list: [{
						img: require('../../assets/natox2.png'),
						name: '吉吉影'
					},
					{
						img: require('../../assets/huatox.png'),
						name: '桂花子'
					},
					{
						img: require('../../assets/natox.png'),
						name: '十七'
					},
					{
						img: require('../../assets/gufengtox.png'),
						name: '九九'
					},
					{
						img: require('../../assets/nvto.png'),
						name: '日生星'
					}
				]
			}
		},
		methods: {
			fanghui() {
				this.$router.go(-1);
			},
			xiayibu(){
				this.$router.push({path:'/tijiaoZuoye'});
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

	/*全部老师 信息*/
	.laoshi-xinxi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-top: 30px;
	}

	.laoshi {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 60px;
	}

	/* 头像 */
	.laoshi img {
		width: 30px;
	}

	/* 名称 */
	.laoshi span {
		font-size: 16px;
	}

	/* 日期 */
	.coll-time {
		height: 440px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/* align-items: center; */
	}

	.time {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.xuanzelaoshi .van-cell {
		padding: 14px 165px;
	}

	/* 折叠图标 */
	.xuanzelaoshi .van-cell__right-icon {
		font-size: 28px;
	}

	.time span {
		font-size: 12px;
	}

	.time .date div {
		font-size: 16px;
		color: #333333;
	}

	/* 上午 */
	.am {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		/* width: 100px; */
	}

	.amTitle {
		color: #040404;
		font-size: 16px;
		font-weight: bold;
		padding-right: 55px;
		padding-bottom: 10px;
	}

	/* 时间段 */
	.shijian {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: baseline;
		height: 275px;
	}

	.am .minute {
		width: 100px;
		height: 30px;
		background-color: #edeaea;
		border-radius: 30px;
		border: solid 1px #edeaea;
		line-height: 30px;
	}

	.am-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 205px;
	}

	.minute1 {
		width: 100px;
		height: 30px;
		background-color: #6d82df;
		border-radius: 30px;
		border: solid 1px #edeaea;
		color: #FFFFFF;
		line-height: 30px;
	}

	.minute2 {
		width: 100px;
		height: 30px;
		background-color: #ffffff;
		border-radius: 30px;
		border: solid 1px #999999;
		line-height: 30px;
	}

	.am .left {
		padding-right: 160px;
	}

	/* 下一步 */
	.xiayibu {
		width: 300px;
		height: 35px;
		border-radius: 10px;
		margin-left: 18px;
		background-image: linear-gradient(115deg, #182b7c 0%, #4357ae 46%, #6d82df 100%);
		border-radius: 24px;
		color: #fdfdfd;
		line-height: 35px;
		text-align: center;
	}
</style>
