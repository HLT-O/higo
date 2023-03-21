<template>
	<view class="container">
    <u-notify ref="uNotify" message="提示框"></u-notify>
    <u-toast ref="uToast"></u-toast>
		<view class="head">
		  <image class="img-icon" src="@/static/login-img/shoping.png" alt="icon" />
		  <text>shopping</text>
		</view>
    <view class="form">
      <imgInput iSrc="../../static/login-img/user.png" v-model:value="userName" placeholder="请输入用户名"/>
      <imgInput iSrc="../../static/register-img/email.png" v-model:value="email"  placeholder="请输入邮箱"/>
      <imgInput iSrc="../../static/register-img/phone.png" v-model:value="phone" placeholder="请输入手机号码"/>
      <imgInput iSrc="../../static/login-img/password.png" showPassword v-model:value="password" placeholder="请输入密码"/>
      <imgInput iSrc="../../static/login-img/password.png" showPassword v-model:value="cPassword" placeholder="请再次输入密码"/>
      <button class="btn" @click="register">注册</button>
    </view>
    <view class="select">
      <span @click="toLogin">账号登录</span>
      <span style="margin:0 30rpx; color:#a6a6a6;">|</span>
      <span>忘记密码？</span>
    </view>
	</view>
</template>

<script>
	import imgInput from "../../components/imgInput.vue"
	export default {
		components:{
			imgInput,
		},
		data() {
			return {
				userName:'',
				email:'',
				phone:'',
				password:'',
				cPassword:''
			}
		},
		methods: {
			register(){
				if(this.userName && this.email && this.phone && this.password && this.cPassword){
					this.$refs.uToast.show({
					  type:"success",
					  message:'注册成功',
					  complete(){
						  uni.redirectTo({
							url:"/pages/login-page/login-page"
						  })
					  }
					})
				}else{
					this.$refs.uNotify.show({
						type:"warning",
						message:'请完善用户信息',
						duration:1500,
						safeAreaInsetTop:true
					})
				}
			},
			toLogin(){
				uni.redirectTo({
					url:"/pages/login-page/login-page"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		padding: 70rpx 0;
	}
	.img-icon{
		width: 70rpx;
		height: 70rpx;
	}
	.head{
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		text{
			margin-left: 20rpx;
			font-size: 45rpx;
		}
	}
	.form{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 0;
		width: 600rpx;
		margin: 0 auto;
		.btn{
			width: 600rpx;
			margin: 0 auto;
			color:white;
			text-align: center;
			border: none;
			border-radius: 999rpx;
			background-image: linear-gradient(to right,#f6d265,#fda284);
		}
		.btn:active{
			background-image: linear-gradient(to right,#f6ad46,#fd7e64);
		}
	}
	.select{
		text-align: center;
		width: 600rpx;
		margin: 50rpx auto;
	}
</style>
