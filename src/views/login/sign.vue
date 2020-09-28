<template>
	<!-- 登录 -->
	<div class="sign">
		<div class="sign-top">
			<van-nav-bar left-arrow @click-left="onClickLeft" />
		</div>
		<div class="dengLv">
			<div class="denglv">
				<img src="../../assets/toxiang6.jpg" />
				<span class="denglv-h5">登录</span>
				<span class="denglv-h6">请选择登录方式</span>
			</div>
		</div>
		<div class="dengLv-btn">
			<van-button icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601277885961&di=e26230f8a84ce344834dc3924ad0fab3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7194d6a61a849ef4005a311a5827096c52ada1ea4776-7JsEYt_fw658" type="default">
				微信一键登录
			</van-button>
			<van-button icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601277970589&di=028dd45dae6c2c3f017b4734c8230024&imgtype=0&src=http%3A%2F%2Fjiuhaochuang.com%2Fuploads%2F2015-08-01-247efa5ac0-101a-4798-b405-49d8b7ca6c7e.jpg" type="default">
				支付宝一键登录
			</van-button>
			<van-button icon="graphic" type="default">
				使用手机号一键登录
			</van-button>
			<van-button to="/zhuce" style="color: #FFFFFF; background-color: #182B7C;">
				注册账号
			</van-button>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'sign',
		data() {
			return {

			}
		},
		methods: {
			onClickLeft() {
				window.history.go(-1);
			}
		}
	}
</script>

<style>
	.sign-top{
		background-color: #ffffff;
		box-shadow: 0px 17px 20px 0px rgba(0, 0, 0, 0.05);
	}
	
	.dengLv {
		margin-top: 50px;
	}

	.dengLv .denglv {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: #000000;
		font-weight: 600;
	}

	/* 头像 */
	.dengLv .denglv img {
		width: 100px;
	}

	/* 登录 */
	.dengLv .denglv .denglv-h5 {
		margin: 8px auto;
		font-size: 25px;
	}

	.dengLv .denglv .denglv-h6 {
		font-size: 20px;
	}
	
	/* 登录授权 */
	.dengLv-btn{
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.dengLv-btn .van-button--default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #495898;
	width: 340px;
    height: 55px;
    font-weight: 600;
    font-size: 20px;
	border-radius: 8px;
}
</style>
