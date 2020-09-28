<template>
	<!-- 注册页 -->
	<div class="zhuce">
		<div class="zhuce-top">
			<van-nav-bar left-arrow @click-left="onClickLeft" />
		</div>
		<div class="zhuce-tel" v-if="flg">
			<van-form>
				<div class="zhuce-title">注册</div>
				<van-field v-model="tel" name="手机号" placeholder="手机号码" :rules="[{ required: true, message: '请填写手机号码' }]" />
				<van-field v-model="password" type="password" name="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
				<div class="radio-distance">
					<van-radio-group v-model="radio">
						<van-radio name="1">阅读并同意《画点啥用户协议》</van-radio>
					</van-radio-group>
				</div>
				<div style="margin: 80px auto;">
					<van-button round block type="info" native-type="submit" @click="zhuceBtb">
						立 即 注 册
					</van-button>
				</div>
			</van-form>
			<div style="margin-top: -56px;" @click="deng">登录</div>
		</div>
		<div v-if="!flg">
			<van-form>
				<van-field v-model="tel" name="手机号" label="手机号码" placeholder="手机号" :rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit"  @click="sub">
						登录
					</van-button>
				</div>
			</van-form>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'zhuce',
		data() {
			return {
				flg:true,
				tel: '',
				password: '',
				radio: '',
			}
		},
		methods: {
			onClickLeft() {
				window.history.go(-1);
			},
			onSubmit(values) {
				console.log('submit', values)
			},
			//注册
			zhuceBtb(){
				if(this.tel=='' || this.password==''){
					alert("请先输入注册账号密码")
				}else{
					//setItem 保存数据
					localStorage.setItem(this.tel,this.password);
					setTimeout(()=>{
						alert("注册成功")
						this.flg=false
					},1000)
					this.tel=""
					this.password=""
				}
			},
			deng(){
				this.flg=false
			},
			//登录
			sub(){
				//getItem 获取数据
				let tels=localStorage.getItem(this.tel)
				if(!tels||tels!=this.password){
					alert("请输入正确的账号密码")
				}else{
					this.$router.push({path:'/home'})
				}
			}
		}
	}
</script>

<style>
	.zhuce-top {
		background-color: #ffffff;
		box-shadow: 0px 17px 20px 0px rgba(0, 0, 0, 0.05);
	}

	.zhuce-tel {
		margin-top: 70px;
		width: 300px;
		margin: auto;
	}

	.zhuce-tel form {
		display: block;
		margin-top: 70px;
	}

	.zhuce-tel .van-cell {
		border: 1px solid #000;
		margin-top: 32px;
		border-radius: 10px;
	}

	/* 单选框 */
	.radio-distance {
		margin: 30px 20px;
	}
	
	/* 用户协议 */
	.zhuce .van-radio__label{
		font-size: 16px;
	}

	/* 提交按钮 */
	.zhuce-tel .van-button--round {
		border-radius: 10px;
	}

	.zhuce-tel .van-button--normal {
		padding: 0 15px;
		font-size: 20px;
	}
</style>
