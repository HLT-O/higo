<template>
	<view>
		<view class="head">
			<view class="head1">
				<span class="span1" />
				<h3>人气推荐</h3>
			</view>

			<view class="head2">
				<u-tabs :list="list1" lineHeight="0" lineColor="#ff7b2e" :activeStyle="{
            color: '#ffffff',
            transform: 'scale(1.05)',
            backgroundColor: '#ff7b2e',
          }" :inactiveStyle="{
            color: '#ffffff',
            transform: 'scale(1)',
            backgroundColor: '#ffab6b',
          }" itemStyle="height: 120rpx;" />
			</view>
		</view>
		<view class="mid">
			<view class="list" v-for="(item, index) in indexList" :key="index">
				<view class="list_text" @click="pageJump(item.data)">
					<img :src="item.src" alt="列表图" />

					<view class="list_detial">
						<span>{{ item.name }}</span>
						<p>{{ item.intrduce }}</p>
						<view class="price">
							<b>{{ item.price }}</b>
							<span>立即抢购</span>
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<view class="more_text">
					<u-icon class="btn" name="arrow-left" color="#fff" size="14" />
					<span>更多</span>
					<u-icon class="btn" name="arrow-right" color="#fff" size="14" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommonIntrduce',
		data() {
			return {
				// indexList: [
				//   {
				//     img: '../../static/SY-img/SY-list2-1.png',
				//     name: '平谷白油桃4粒 700g',
				//     intrduce: '桃香浓郁，口感绵甜多汁',
				//     price: 19.8,
				//   },
				//   {
				//     img: '../../static/SY-img/SY-list2-2.png',
				//     name: '平谷白油桃4粒 700g',
				//     intrduce: '桃香浓郁，口感绵甜多汁',
				//     price: 19.8,
				//   },
				//   {
				//     img: '../../static/SY-img/SY-list2-3.png',
				//     name: '平谷白油桃4粒 700g',
				//     intrduce: '桃香浓郁，口感绵甜多汁',
				//     price: 19.8,
				//   },
				// ],
				list1: [{
						name: '水果',
					},
					{
						name: '零食',
					},
					{
						name: '服饰',
					},
					{
						name: '家具',
					},
					{
						name: '日用清洁',
					},
					{
						name: '更多',
					},
				],
			};
		},
		props: ['indexList'],
		methods: {
			click(item) {
				console.log('item', item);
			},
			pageJump(val) {
				const detailsData=JSON.stringify(val)
				console.log(detailsData)
				uni.navigateTo({
					url: `../../subpages/detailsPage/detailsPage?Data=${detailsData}`
				})
			}
		},
	};
</script>
<style lang="less" scoped>
	.head {
		line-height: 100rpx;
		display: flex;
		align-items: center;
		padding: 2% 4%;
		margin: 0 auto;
		justify-content: space-between;

		.head1 {
			width: 30%;
			display: flex;
			align-items: center;

			.span1 {
				display: inline-block;
				color: #ffc800;
				height: 50rpx;
				width: 10rpx;
				background-color: #ffc800;
			}
		}

		.head2 {
			width: 70%;
		}

		h3 {
			margin-left: 10rpx;
			color: #b36b00;
			font-size: 44rpx;
		}
	}

	/deep/ .u-tabs__wrapper__nav__item__text {
		// background-color: #ffab6b;
		padding: 1rpx 30rpx;
		border-radius: 999rpx;

		span {
			font-size: 30rpx;
		}
	}

	.mid {
		margin: 0 auto;

		.list {
			margin: 10rpx 0rpx;
			padding: 2% 4%;

			.list_text {
				img {
					height: 200rpx;
					margin-right: 2%;
				}

				display: flex;

				.list_detial {
					img {
						width: 40%;
					}

					width: 100%;

					span {
						color: #333;
						font-size: 30rpx;
					}

					.price {
						margin-top: 100rpx;
						display: flex;
						justify-content: space-between;

						b {
							display: block;
							color: #ff7b2e;
							font-size: 36rpx;
						}

						span {
							display: block;
							font-size: 32rpx;
							color: #fff;
							background-color: #db6744;
							display: block;
							padding: 5rpx 20rpx;
							border-radius: 999rpx;
						}
					}
				}
			}
		}
	}

	.more {
		width: 100%;

		.more_text {
			display: flex;
			justify-content: center;

			.btn {
				background-color: #ed881c;
				border-radius: 50%;
				padding: 10rpx;
			}

			span {
				color: #ed881c;
				font-size: 36rpx;
				padding: 0 20rpx;
			}
		}
	}
</style>
