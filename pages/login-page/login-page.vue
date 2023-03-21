<template>
  <view class="container">
  <u-notify ref="uNotify" message="提示框"></u-notify>
  <u-toast ref="uToast"></u-toast>
    <view class="head">
      <image class="img-icon" src="@/static/login-img/shoping.png" alt="icon" />
      <text>shopping</text>
    </view>
    <view class="banner">
      <img src="https://s1.ax1x.com/2022/10/27/xfZ8pj.png" alt="login-banner" style="height: 480rpx;">
    </view>
    <view class="form">
      <imgInput iSrc="../../static/login-img/user.png" v-model:value="userName" />
      <imgInput iSrc="../../static/login-img/password.png" showPassword v-model:value="password" />
      <button class="btn" @click="submit">登录</button>
    </view>
    <view class="select">
      <span @click="toRegister">立即注册</span>
      <span style="margin:0 30rpx; color:#a6a6a6;">|</span>
      <span>忘记密码？</span>
    </view>
    <view class="moreLogin">
      <view class="title">
        ———— 其他登录 ————
      </view>
      <view class="loginMode">
        <image src="../../static/login-img/wx.png" mode="widthFix" />
        <image src="../../static/login-img/wb.png" mode="widthFix" style="margin:0 80rpx;" />
        <image src="../../static/login-img/QQ.png" mode="widthFix" />
      </view>
    </view>
    <view class="protocol">
      登录即代表同意您已同意《用户协议》与《隐私政策》
    </view>
  </view>
</template>

<script>
import imgInput from '../../components/imgInput.vue';

export default {
  components: {
    imgInput,
  },
  data() {
    return {
      userName: '',
      password: '',
    };
  },
  methods: {
	  submit(){
		  if(this.userName && this.password){
			  this.$store.state.userName = this.userName
			  this.$refs.uToast.show({
				  type:"success",
				  message:'登录成功',
				  complete(){
					  uni.switchTab({
						url:"../index-page/index-page"
					  })
				  }
			  })
		  }else{
			  this.$refs.uNotify.show({
				  type:"warning",
				  message:'请输入账号或密码',
				  duration:1500,
				  safeAreaInsetTop:true
			  })
		  }
	  },
	  toRegister(){
		  uni.redirectTo({
		  	url:'/pages/register-page/register-page'
		  })
	  }
  },
};
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
	.banner{
		margin-top: 40rpx;
		text-align: center;
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
		margin: 0 auto;
	}
	.moreLogin{
		padding: 100rpx 0;
		.title{
			text-align: center;
			color: #a6a6a6;
		}
		.loginMode{
      margin-top:30rpx;
			text-align: center;
			image{
				width: 80rpx;
			}
		}
	}
	.protocol{
		font-size: 24rpx;
		text-align: center;
	}
</style>
