<template>
	<div class="safetyInfo">
		<input type="text" name="" id="" placeholder="搜索" v-model="search" />
		<button @click="btn">搜索</button>
		<ul v-for="list in searchData" :key="list">
			<li>
				<span>{{list.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Shearch',
		data() {
			return {
				search: '',
				searchData: '',
				products: [
					//假数据
					{
						name: "艺考",
					},
					{
						name: "古风",
					},
					{
						name: "练习室",
					},
					{
						name: "画眼",
					},
					{
						name: "画脸",
					},
					{
						name: "褶皱怎么画",
					}
				]
			}
		},
		methods: {
			btn: function() {

				var search = this.search;
				if (search) {
					this.searchData = this.products.filter(function(product) {
						console.log(product)
						return Object.keys(product).some(function(key) {
							console.log(key)
							return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}

			}
		}
	}
</script>

<style>
	.safetyInfo{
		margin-top: 20px;
	}
</style>
