<template>
	<view>
		<!-- 消息提示 -->
		<u-notify ref="uNotify" message="Hi uview-plus"></u-notify>
		<u-navbar title="商品详情" height='60' :placeholder='true' :autoBack="true">
		</u-navbar>
		<view class="detialList">
			<u-swiper class='swiper' :list="detailsData.img" indicator height='200' indicatorMode="dot" circular>
			</u-swiper>
			<view class="detialTitle">
				<view class="title">
					<text>{{detailsData.detail.name}}</text>
					<u-icon name="heart" color="#d9d9d9" size="24" label='收藏' labelPos='bottom' labelSize='12'></u-icon>
				</view>
				<view class="price">
					{{detailsData.detail.sale}}<text>{{detailsData.detail.old_sale}}</text>
				</view>
			</view>
		</view>
		<view class="detialType">
			<view class="list">
				<text>规格</text>
				<view class="lists">
					<text>{{detailsData.detail.specification}}</text>
					<u-icon name="arrow-right" color="#d9d9d9" size="14"></u-icon>
				</view>
			</view>
			<view class="list">
				<text>优惠</text>
				<view class="lists">
					<text class="preferential">{{detailsData.detail.preferential}}</text>
					<u-icon name="arrow-right" color="#d9d9d9" size="14"></u-icon>
				</view>
			</view>
			<view class="list">
				<text>服务</text>
				<view class="lists">
					<text>{{detailsData.detail.serve}}</text>
					<u-icon name="arrow-right" color="#d9d9d9" size="14"></u-icon>
				</view>
			</view>
			<view class="list parameter">
				<text>参数</text>
				<view class="lists">
					<text>{{detailsData.detail.parameter}}</text>
					<u-icon name="arrow-right" color="#d9d9d9" size="14"></u-icon>
				</view>
			</view>
		</view>
		<view class="CommonGoods">
			<CommonGoods :details='detailsData' />
		</view>
		<view class="detialTabbar">
			<view class="goodsTabbar">
				<view class="goodsShare">
					<u-icon name="server-fill" color="#363535" size="28" label='客服' labelPos='bottom'></u-icon>|
					<u-icon name="share-square" color="#363535" size="28" label='分享' labelPos='bottom'></u-icon>
				</view>
				<view class="goodsBuy">
					<view class="car">
						<text @click="handleAction(1)">加入购物车</text>
					</view>
					<view class="buy">
						<text @click="handleAction(2)">立即购买</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup :show="showPopup" :safeAreaInsetBottom="true" :round="10" mode="bottom" @close="closePopup">
			<view class="pop-container">
				<view class="pop-header">
					<view class="cover">
						<img :src="detailsData.detail_img[0]" alt="">
					</view>
					<view class="info">
						<view class="name">
							{{detailsData.detail.name}}
						</view>
						<view class="sale">
							{{detailsData.detail.sale}}
						</view>
					</view>
				</view>
				<view class="sub-title">
					类型
				</view>
				<view class="type-list" v-for="item in detailsData.detail.options.type">
					<view class="type-item" :class="{'active-type': item === type}" @click="selectShoppingType(item)">
						{{item}}
					</view>
				</view>
				<view class="count-container">
					<view class="text">
						购买数量
					</view>
					<view class="count-change">
						<u-number-box v-model="count" @change="handleCountChange"></u-number-box>
					</view>
				</view>
				<view class="pop-footer" @click="handleConfirm">
					{{actionType === 1 ? '确认' : '立即支付'}}
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import CommonGoods from "../../components/CommonGoods.vue"
	export default {
		data() {
			return {
				detailsData: {},
				value1: 0,
				// 弹出层显示
				showPopup: false,
				// 商品购买的数量
				count: 1,
				// 商品类型
				type: '',
				// 操作类型 1是加入购物车，2是立即购买
				actionType: 0,
			}
		},
		components: {
			CommonGoods
		},
		methods: {
			// 改变数量
			handleCountChange(e) {
				this.count = e.value;
			},
			// 关闭弹出层
			closePopup() {
				this.showPopup = false;
			},
			// 选择商品类型
			selectShoppingType(type) {
				this.type = type;
			},
			// 处理购买和加入购物车弹出层逻辑
			handleAction(actionType) {
				this.actionType = actionType;
				this.showPopup = true;
			},
			// 加入购物车
			handleAddShoppingCart() {
				if (!this.type || !this.count) {
					this.$refs.uNotify.show({
						type: 'error',
						message: '加入购物车失败, 请选择商品类型',
						duration: 1000 * 2,
						fontSize: 20,
						safeAreaInsetTop: true
					})
					return
				}
				this.$refs.uNotify.show({
					type: 'success',
					message: '加入购物车成功',
					duration: 1000 * 2,
					fontSize: 20,
					safeAreaInsetTop: true
				})
				const {
					count,
					type
				} = this.$data;
				const detailData = {
					...this.detailsData,
					type,
					count
				}
				this.$store.commit('addShoppingItem', detailData)
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/shopping-page/shopping-page',
					})
				}, 2000)
			},
			// 立即支付
			handlePayNow() {
				const {
					count,
					type
				} = this.$data;
				const detailData = {
					...this.detailsData,
					type,
					count
				}
				uni.navigateTo({
				   url: `/pages/payment-page/payment-page?data=${JSON.stringify(detailData)}`,
				});
			},
			// 弹出层底部按钮逻辑 todo：防抖
			handleConfirm() {
				if (this.actionType === 1) {
					this.handleAddShoppingCart()
				} else {
					this.handlePayNow()
				}
			},
		},
		onLoad: function(option) {
			this.detailsData = JSON.parse(option.Data)
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #efefef;
	}

	.detialList {
		.swiper {
			position: relative;
		}

		.detialTitle {
			width: 100%;
			position: absolute;
			top: 275px;
			background: #ffffff;
			box-sizing: border-box;
			padding: 40rpx 40rpx 10rpx 40rpx;
			border-radius: 40rpx 40rpx 0 0;

			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				text {
					margin-right: 40rpx;
				}
			}

			.price {
				margin-top: 20rpx;
				font-size: 20px;
				color: #d5131c;

				text {
					margin-left: 10rpx;
					font-size: 14px;
					color: #333333;
					text-decoration: line-through;
				}
			}
		}

	}

	.detialType {
		margin-top: 180rpx;
		padding: 15rpx;
		font-size: 14px;
		background: #ffffff;

		text {
			color: #7d7d7d;
		}

		.list {
			padding: 20rpx 0;
			border-bottom: 1px #d9d9d9 solid;
			display: flex;
			flex: 1;

			.lists {
				margin-left: 30px;
				flex: 3;
				display: flex;
				justify-content: space-between;
				align-items: center;

				text {
					color: #383737;
				}

				.preferential {
					color: #d97f4e;
				}
			}
		}

		.parameter {
			border-bottom: none;
		}
	}

	.CommonGoods {
		margin-top: 0rpx;
	}

	.detialTabbar {
		height: 160rpx;

		.goodsTabbar {
			width: 100%;
			position: fixed;
			bottom: 0;
			border-top: 1px #F1F1F1 solid;
			background: #FFFFFF;
			padding: 20px;
			height: 160rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.goodsShare {
				flex: 1;
				display: flex;
				justify-content: space-between;
			}

			.goodsBuy {
				flex: 3;
				display: flex;
				justify-content: flex-end;
				color: #FFFFFF;

				.car {
					width: 40%;
					height: 80rpx;
					background: #00b49d;
					border-bottom-left-radius: 30px;
					border-top-left-radius: 30px;
					text-align: center;
					line-height: 80rpx;
				}

				.buy {
					width: 40%;
					height: 80rpx;
					background: #ff4c01;
					border-bottom-right-radius: 30px;
					border-top-right-radius: 30px;
					text-align: center;
					line-height: 80rpx;
				}
			}
		}
	}

	// 弹出层
	.pop-container {
		position: relative;
		padding: 20rpx;
		height: 60vh;

		.pop-header {
			display: flex;
			justify-content: flex-start;
			// align-items: center;

			.cover {
				margin-right: 20rpx;

				img {
					border-radius: 10rpx;
					width: 400rpx;
				}
			}

			.info {
				margin-top: 20rpx;

				.sale {
					font-size: 36rpx;
					margin-top: 20rpx;
				}
			}
		}

		.sub-title {
			margin-top: 20rpx;
			font-weight: bold;
			font-size: 32rpx;
		}

		.type-list {
			margin-top: 20rpx;

			.type-item {
				margin-bottom: 20rpx;
				height: 55rpx;
				line-height: 55rpx;
				width: 100rpx;
				text-align: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				border: 1px solid #979797;
				font-size: 32rpx;
				border-radius: 5px;
				padding: 0 20rpx;
			}

			.active-type {
				color: #d97f4e;
				border-color: #d97f4e;
			}
		}

		.count-container {
			margin-top: 50rpx;
			padding: 0 10rpx;
			display: flex;
			justify-content: space-between;
		}

		.pop-footer {
			border-radius: 15px;
			background-color: #d97f4e;
			color: #fff;
			height: 80rpx;
			line-height: 80rpx;
			display: flex;
			justify-content: center;
			width: 95%;
			text-align: center;
			position: fixed;
			bottom: 20rpx;
		}
	}
</style>
