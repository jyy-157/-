<template>
	<div class="shequ">
		<div>
			<van-sticky>
				<div id="shequ-router">
					<router-link to="/shequ/zuixin">
						<div>最新</div>
					</router-link>
					<router-link to="/shequ/jingxuan">
						<div>精选</div>
					</router-link>
					<router-link to="/shequ/guanzhu">
						<div>关注</div>
					</router-link>
					<router-link to="/shequ/lianxishi">
						<div>练习室</div>
					</router-link>
					<router-link to="/shequ/wenda">
						<div>问答</div>
					</router-link>
				</div>
			</van-sticky>
			<router-view />
		</div>
		<div>
			<Tabers />
		</div>
	</div>
</template>

<script scoped>
	//底部导航栏
	import Tabers from '@/components/taBer.vue'
	export default {
		name: 'shequ',
		data() {
			return {

			};
		},
		components: {
			Tabers
		}
	};
</script>

<style>
	#shequ-router {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
		padding: 15px;
		background-color: #ffff;
	}

	#shequ-router a {
		font-weight: bold;
		color: #2c3e50;
	}

	#shequ-router a.router-link-exact-active {
		color: #42b983;
	}
</style>
