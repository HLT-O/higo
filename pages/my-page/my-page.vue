<template>
  <view>
		<view class="headerBox">
			<view class="title">
				<text>
					个人中心
				</text>
				<image src="../../static/my-img/205设置-线性.png" mode="widthFix" class="setIcon"></image>
			</view>
			<view class="userNews" @click="toLogin">
				<view class="userInfo">
					<image src="../../static/my-img/头像.png" mode="widthFix" class="userIcon">
					</image>
					<view class="userXq">
						<view class="userName">
							{{$store.state.userName || "未登录 点击此处登录"}}
						</view>
						<view class="userId">
							ID:123456
						</view>
					</view>
				</view>
				<view class="userRicon">
					<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rIcon"></image>
				</view>
			</view>
			<view class="userList">
				<ul>
					<li class="userLb">
						<view class="userPrice">
							155
						</view>
						<view class="userPm">
							余额（元）
						</view>
					</li>
					<li class="userLb">
						<view class="userPrice">
							51
						</view>
						<view class="userPm">
							优惠券
						</view>
					</li>
					<li class="userLb">
						<view class="userPrice">
							203
						</view>
						<view class="userPm">
							电子券
						</view>
					</li>
					<li class="userLb">
						<view class="userPrice">
							486
						</view>
						<view class="userPm">
							积分
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view class="myOder">
			<view class="oderUp">
				<view class="oderRight">
					<image src="../../static/my-img/_修改订单.png" mode="widthFix" class="oderIcon"></image>
					<view class="oderXq">
						<view class="oderTitle">
							我的订单
						</view>
					</view>
				</view>
				<view class="oderLeft">
						<text style="margin-right: 10rpx;">
							全部订单
						</text>
					
					<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="turnRight"></image>
				</view>
			</view>
				
				<view class="oderList">
					<ul>
						<li>
							<view class="">
								<image src="../../static/my-img/待发货.png" mode="widthFix" class="listIcon"></image>
							</view>
							<view class="">
								待发货
							</view>
						</li>
						<li>
							<view class="">
								<image src="../../static/my-img/等待确认.png" mode="widthFix" class="listIcon"></image>
							</view>
							<view class="">
								待确认
							</view>
						</li>
						<li>
							<view class="">
								<image src="../../static/my-img/待收货.png" mode="widthFix" class="listIcon"></image>
							</view>
							<view class="">
								待收货
							</view>
						</li>
						<li>
							<view class="">
								<image src="../../static/my-img/待评价.png" mode="widthFix" class="listIcon"></image>
							</view>
							<view class="">
								待评价
							</view>
						</li>
					</ul>
				</view>
		</view>
		<view class="myList">
			<ul>
				<li>
					<view class="listLeft">
						<view class="listLx">
							<image src="../../static/my-img/导航_收藏_已收藏.png" mode="widthFix" class="leftIcon"></image>
							<text style="margin-left: 30rpx;">
								我的关注
							</text>
						</view>
						<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rightIcon"></image>
					</view>
					
				</li>
				<li>
					<view class="listLeft">
						<view class="listLx">
							<image src="../../static/my-img/收藏-收藏.png" mode="widthFix" class="leftIcon"></image>
							<text style="margin-left: 30rpx;" @click="jumpPage('../../pages/address-page/address-page')">
								我的地址
							</text>
						</view>
						<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rightIcon"></image>
					</view>	
				</li>
				<li>
					<view class="listLeft">
						<view class="listLx">
							<image src="../../static/my-img/联系我们-电话.png" mode="widthFix" class="leftIcon"></image>
							<text style="margin-left: 30rpx;">
								联系我们
							</text>
						</view>
						<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rightIcon"></image>
					</view>
				</li>
				<li>
					<view class="listLeft">
						<view class="listLx">
							<image src="../../static/my-img/关于我们.png" mode="widthFix" class="leftIcon"></image>
							<text style="margin-left: 30rpx;">
								关于
							</text>
						</view>
						<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rightIcon"></image>
					</view>
				</li>
				<li>
					<view class="listLeft">
						<view class="listLx">
							<image src="../../static/my-img/138设置、系统设置、功能设置、属性.png" mode="widthFix" class="leftIcon"></image>
							<text style="margin-left: 30rpx;">
								设置
							</text>
						</view>
						<image src="../../static/my-img/进入箭头.png" mode="widthFix" class="rightIcon"></image>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
	  toLogin(){
		  console.log(this.$store.getters)
		  if(!this.$store.getters.login){
		     uni.navigateTo({
		 	   url:'/pages/login-page/login-page'
		     })
		  }
	  },
	  jumpPage(value) {
	    uni.navigateTo({
	      url: value,
	      // success: res => {},
	      // fail: () => {},
	      // complete: () => {}
	    })
	  }
  },
};
</script>
<style lang="less" scoped>
	.headerBox{
		height: 460rpx;
		background-image:linear-gradient(#FF920D,#FBCF9D,#FFF);
		padding-top: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title{
		position: relative;
		text-align: center;
		font-weight: 550;
	}
	.setIcon{
		width: 40rpx;
		position: absolute;
		right: 50rpx;
		
	}
	.userNews{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 50rpx;
		.userInfo{
			display: flex;
			align-items: center;
		}
		.userIcon{
			width: 130rpx;
		}
		.rIcon{
			width: 35rpx;
			margin-top: 70rpx;
		}
		.userXq{
			margin-left: 35rpx;
		}
		.userName{
			font-weight: bolder;
			color: #FFF;
		}
		.userId{
			font-weight: bolder;
			color: #FFF;
		}
	}
	.userList{
		
		ul{
			display: flex;
			align-items:center;
			justify-content: space-evenly;
			margin: 0 auto;
			padding: 0;
			width: 580rpx;
			height: 110rpx;
			background-color: (rgb(255,228,145));
			border-radius: 20rpx;
			box-shadow:2rpx 10rpx rgb(239,239,239);
			li{
				text-align: center;
				list-style: none;
				
				
			}
			.userPrice{
				color: rgb(255,146,13);
				font-weight: bolder;
			}
			.userPm{
				margin-top: 8rpx;
				font-size: 16rpx;
				color: rgb(171,120,0);
			}
		}
	}
	.myOder{
		margin-top: 50rpx;
		padding: 0 70rpx;
		.oderUp{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.oderRight{
				display: flex;
				align-items: center;
			}
			
			.oderIcon{
				width: 40rpx;
			}
		}
		
		.turnRight{
			width: 30rpx;
		}
		.oderTitle{
			font-size: 30rpx;
			font-weight: bold;
			color: rgb(59,59,59);
			margin-left: 15rpx;
		}
		.listIcon{
			width: 50rpx;
		}
		.oderList{
			margin-top: 40rpx;
			ul{
				display: flex;
				margin: 0 auto;
				padding: 0;
				width: 640rpx;
				li{
					padding: 22rpx;
					text-align: center;
					list-style: none;
					padding-left: 35rpx;
					margin-top: 12rpx;
				}
			}
		}
	}
	.myList{
		margin-top: 40rpx;
		padding: 0;
		ul{
			padding: 0;
			margin: 0;
			margin-left: 60rpx;
			justify-content: space-between;
			align-items: center;
			li{
				padding-right: 48rpx;
				list-style: none;
				margin-top: 55rpx;
			}
			.listLeft{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.listLx{
					display: flex;
					align-items: center;
					span{
						
					}
					img{
						
					}
				}
				
			}
			
			.leftIcon{
				width: 42rpx;
			}
			.rightIcon{
				width: 30rpx;
			}
			
		}
		
		
	}
</style>
