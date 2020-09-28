<template>
	<div id="app">
		<div class="tabers">
			<van-tabbar route v-model="active">
				<van-tabbar-item replace to="/home">
					<span>首页</span>
					<template #icon="props">
						<img :src="props.active ? faxian.active : faxian.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item replace to="/Kebiao">
					<span>课表</span>
					<template #icon="props">
						<img :src="props.active ? zixuan.active : zixuan.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item replace>
					<van-cell title="发布" @click="showShare = true" />
					<!-- <van-share-sheet v-model="showShare" :options="options" /> -->
					<template #icon="props">
						<img :src="props.active ? fabu.active : fabu.inactive" />
						<van-share-sheet v-model="showShare" :options="options" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item replace to="/shequ">
					<span>社区</span>
					<template #icon="props">
						<img :src="props.active ? shequ.active : shequ.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item replace to="/about">
					<span>我的</span>
					<template #icon="props">
						<img :src="props.active ? about.active : about.inactive" />
					</template>
				</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script scoped>
	export default {
		name: 'tabers',
		data() {
			return {
				showShare: false,
				active: 0,
				faxian: {
					//选中
					active: require('../assets/shouye.png'),
					// 未选中
					inactive: require('../assets/shouye1.png'),
				},
				zixuan: {
					active: require('../assets/kebiao1.png'),
					inactive: require('../assets/kebiao.png'),
				},
				fabu: {
					active: require('../assets/fabu1.png'),
					inactive: require('../assets/fabu.png'),
				},
				shequ: {
					active: require('../assets/taolun1.png'),
					inactive: require('../assets/taolun.png'),
				},
				about: {
					active: require('../assets/my1.png'),
					inactive: require('../assets/my.png'),
				},
				options: [{
						name: '作品',
						icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
					},
					{
						name: '讨论',
						icon: 'wechat',
					},
					{
						name: '指绘',
						icon: 'poster',
					},
				]
			}
		}
	}
</script>

<style>
	.tabers {
		width: 375px;
		height: 60px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
	}

	.tabers .van-cell {
		padding: 0px 0px;

	}
	
	/* 发布弹框里的图标 */
	.tabers .van-share-sheet__icon {
		width: 35px;
		height: 35px;
	}
	
	/* 发布弹框里的文字 */
	.tabers .van-share-sheet__name {
		font-size: 16px;
	}

	.tabers .van-cell__title span {
		padding-right: 0px;
		font-size: 14px;
		font-weight: normal;
		color: #646566;
	}

	.tabers .van-cell__title span {
		position: relative;
		right: 0px;
		font-size: 14px;
	}

	.tabers .taber-item {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 60px;
	}

	.tabers .taber_img {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* .tabers .van-tabbar-item__icon img {
		display: block;
		height: 22px;
		width: 25px;
	} */
</style>
