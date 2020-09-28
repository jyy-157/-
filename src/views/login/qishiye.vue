<template>
	<!-- 起始页 -->
	<div class="qishiye">
		<img src="../../assets/qishiy.png" />
		<div class="logo">
			<img src="../../assets/logo.png" />
		</div>
		<router-link to="/qsygug">
			<div class="tiaoguo">跳过</div>
		</router-link>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'qishiye',
		data() {
			return {

			}
		}
	}
</script>

<style>
	.qishiye {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.qishiye img {
		width: 100%;
		height: 13.66667rem;
	}

	.logo img {
		margin-top: 0.37333rem;
		width: 5.26667rem;
		height: 1.61333rem;
	}

	.tiaoguo {
		position: relative;
		left: 6.86667rem;
		bottom: -0.20rem;
		width: 3.06667rem;
		color: #000;
	}
</style>
