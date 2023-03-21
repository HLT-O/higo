<template>
	<view class="payment-page-container">
		<u-notify ref="uNotify"></u-notify>
		<view class="title">等待买家支付</view>
		<!-- 地址管理todo -->
		<view class="">
			地址管理
		</view>
		<!-- 商品详情 -->
		<view class="detail">
			<view class="info">
				<view class="info-cover">
					<img :src="detailData.detail_img[0]" alt="">
				</view>
				<view class="info-text">
					<view class="info-name">
						{{detailData.detail.name}}
					</view>
					<view class="info-type">
						{{detailData.type}}
					</view>
					<view class="info-bottom">
						<view class="info-sale">
							{{detailData.detail.sale}}
						</view>
						<view class="info-count">
							x{{detailData.count}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单详情 -->
		<view class="payment-info">
			<view class="">
				<view class="">
					商品总价
				</view>
				<view class="">
					{{detailData.detail.sale}}
				</view>
			</view>
			<view class="">
				<view class="">
					运费
				</view>
				<view class="">
					￥{{detailData.detail.fare}}
				</view>
			</view>
			<view class="">
				<view class="">
					订单编号
				</view>
				<view class="">
					{{detailData.detail.id}}
				</view>
			</view>
		</view>
		<view class="payment-now" @click="payNow">
			继续支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商品详情和订单详情
				detailData: {},
				// 是否展示提示
				showNotify: false,
			};
		},
		onLoad(e) {
			// 获取商品详情和订单详情
			this.detailData = JSON.parse(e.data)
		},
		methods: {
			// 继续支付
			payNow() {
				this.$refs.uNotify.show({
					type: 'success',
					message: '支付成功',
					duration: 1000 * 2,
					safeAreaInsetTop: true
				})
			}
		}
	};
</script>

<style lang="less" scoped>
	.payment-page-container {
		position: relative;
		padding: 100rpx 0 0 50rpx;
	}

	.title {
		font-size: 36rpx;
		font-weight: bold;
	}

	.detail {
		margin: 50rpx 30rpx 0 0;
	}

	// 商品详情
	.info {
		display: flex;

		.info-cover {
			margin-right: 30rpx;

			img {
				border-radius: 10rpx;
				width: 250rpx;
			}
		}

		.info {
			position: relative;
		}

		.info-type {
			font-size: 30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100rpx;
			text-align: center;
			padding: 5rpx 10rpx;
			border: 1px solid #ED8F58;
			border-radius: 20rpx;
			margin-top: 20rpx;
		}

		.info-bottom {
			margin-top: 30rpx;
			display: flex;
			align-items: center;

			.info-sale {}
		}

		.info-count {
			color: #9c9c9c;
			margin-left: 20rpx;
		}
	}

	// 订单详情
	.payment-info {
		margin-top: 50rpx;
	}

	.payment-info>view {
		display: flex;
		justify-content: space-between;
		margin-right: 50rpx;
		margin: 40rpx 50rpx 0 0;
	}

	// 底部按钮
	.payment-now {
		position: fixed;
		width: 80%;
		left: 50%;
		transform: translateX(-50%);
		bottom: 30rpx;
		background-color: #ED8F58;
		color: #ffffff;
		text-align: center;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 20rpx;
	}
</style>
