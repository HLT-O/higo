<template>
	<view>
		<view class="allsearch">
			<view class="searchAll">
				<view class="search">
					<u-icon name="arrow-left" color="#000000" size="28" @click="pageJump1('../../subpages/searchPage/searchPage')" />
					<u-search placeholder="家具" :disabled="true" :clearabled="true" bgColor='#f3f3f3' :showAction="false"
						height="64rpx" margin="0 auto" />	
					<u-icon name="grid-fill" color="#636363" size="36" />
				</view>
				<u-line color="grey" hair-line="false" margin="10rpx" />
			</view>
		</view>
		<view class="siftAll">
			<view class="siftContent">
				<ul>
					<li v-for="item of siftData.list" :key="item.id" style="list-style-type:none;">
						<a>
						  {{item.name}}
							<view class="click">
								<span class="top"></span>
								<span class="bottom"></span>
							</view>
						</a>
					</li>
				</ul>
			</view>
		</view>
		
		<view class="history">
			<span>沙发</span>
			<span>欧式</span>
			<span>沙发</span>
			<span>欧式</span>
			<span>沙发</span>
			<span>欧式</span>
			<u-icon name="trash" color="#000000" size="28"/>
		</view>
		
		<view class="commodity">
			<ul>
				<li v-for="item in commodity.list" :key="item.id" style="list-style-type:none;">
					
					<view class="content" @click="pageJump(item.data)">
						<img :src="item.src" alt="">
						
						<view class="content_text">
			<!-- 				<span>
							{{item.kind}}
							</span> -->
							<p class="title">
								{{item.title}}
								<span>
									{{item.kind}}
								</span>
							</p>
							<p class="appraise">
								{{item.appraise}}
							</p>
							<p class="price">
								{{item.price}}	
							</p>
							<p class="sales">
								{{item.Sales}}	
							</p>
						</view>
					</view>
					
				</li>
			</ul>
		</view>
	</view>
</template>
<script>
	import $http from '../../common/api';
	export default {
		name:"classify-page",
		data() {
			return {
				siftData:{
					list:[
						{id:"1",name:"综合" },
						{id:"2",name:"价格"},
						{id:"3",name:"销量"},
						{id:"4",name:"筛选"},
					],
				},
				commodity:{}
			};
		},
		methods:{
			pageJump1(value){
				uni.navigateTo({
					url:value
				})
			},
			pageJump(val) {
				const listData=JSON.stringify(val)
				console.log(listData)
				uni.navigateTo({
					url: `../../subpages/detailsPage/detailsPage?Data=${listData}`
				})
			}
		},
		onLoad(){
			$http.request({
			  url: '/list/data',
			}).then((res) => {
			console.log(res.data);
			  this.commodity = res.data;
			}).catch(() => {
			  uni.showToast({
			    title: '请求失败！',
			    icon: 'none',
			  });
			});
		}
	}
</script>
<style lang="less" scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.siftAll{
		.siftContent{
			width: 100%;
			// background-color: red;
			ul{
				display: flex;
				justify-content: space-around;
				li{
					justify-content: center;
					text-align: center;
				}
			}
		}
	}
	li>a{
		display: flex;
	}
	.allsearch{
		.searchAll{
			.search{
				padding: 10rpx;
				display: flex;
				width: 90%;
				margin-top: 70rpx;
				margin-left: 2%;
				.u-search{
					width: 500rpx;
					margin: 0 auto;
				}
				::v-deep .u-search_action span{
					color: #000000;
				}
			}
		}
	}
	.click {
	      width: 22rpx;
	      height: 40rpx;
	      display: flex;
	      position: relative;
	    }
	
	    .top {
	      width: 0;
	      height: 0;
	      border-style: solid;
	      border-width: 0 6px 7px;
	      border-color: transparent transparent #999999;
	      position: absolute;
	      transform: rotate(180deg);
	      bottom: 1rpx;
		  left: 4rpx;
	    }
	    .top:hover {
	      cursor: pointer;
	      border-color: transparent transparent #333333;
	    }
	
	    .bottom {
	      width: 0;
	      height: 0;
	      border-style: solid;
	      border-width: 0 6px 7px;
	      border-color: transparent transparent #999999;
	      position: absolute;
	      top: 7rpx;
	      left: 4rpx;
	    }
	    .bottom:hover {
	      cursor: pointer;
	      border-color: transparent transparent #333333;
	    }
		.history{
			padding: 15rpx 0;
			display: flex;
			width: 100%;
			margin-left: 30rpx;
			margin-top: 10rpx;
			span{
				display: flex;
				font-size: 26rpx;
				padding: 0 15rpx;
				background-color: orange;
				text-align: center;
				border-radius: 50px;
				justify-content: center;
				align-items: center;
				margin-left: 20rpx;
			}
		}
		.commodity{
			ul{
				li{
					.content{
						width: 90%;
						height: 190rpx;
						display: flex;
						margin: 0 auto;
						background-color: #f3f3f3;
						height: 100%;
						margin-top: 2%;
						img{
							height: 190rpx;
						}
						.content_text{
							.title{
								height: 100rpx;
									font-size: 32rpx;
									margin-left: 20rpx;
									// font-weight: 400;
								span{
									width: 140rpx;
									height: 46rpx;
									font-size: 26rpx;
									text-align: center;
									align-items: center;
									border-radius: 20rpx;
									background-color: orange;
									display: flex;
									justify-content: center;
									align-items: center;
									float: right
								};
							};
							.appraise{
								color: gray;
								font-size: 12px;
								margin-left: 20rpx;
								color: #f17d1e;
							};
							.price{
								color: red;
								font-size: 46rpx;
								margin-left: 10rpx;
								float: left;
							};
							.sales{
								color: gray;
								font-size: 16rpx;
								float: left;
								margin-left: 12rpx;
								margin-top: 24rpx;
							}
						}
						
					}
					
				}
			}
		}
</style>

