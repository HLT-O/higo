<template>
	<view>
		<view class="goodsMore">
			<u-tabs :list="moreList" @click="click" lineColor='#f5510a' lineWidth='60'></u-tabs>
		</view>
		<view class="details_img" v-show="detailsType=='details_img'">
			<image :src="item" mode="" v-for="(item,index) in details.detail_img" :key='index'></image>
		</view>
		<view class="details" v-show="detailsType=='details'">
			<view class="detialType">
				<u-tag :text="item" color='#827d7d' shape="circle" bgColor='#fef0f0'
					v-for="(item,index) in details.appraise.summary" :key='index'></u-tag>
			</view>
			<view class="commentList">
				<view class="commentItem" v-for="(item,index) in details.appraise.user" :key='index'>
					<u-avatar :src="item.avatar" size='54'></u-avatar>
					<view class="itemContent">
						<view class="itemTop">
							<view class="itemName">
								{{item.avatar_name}}
								<view class="recommend">
									<u-icon name="star-fill" color="#fc6c25" size="24" v-for="(item,index) in 5">
									</u-icon>
								</view>
							</view>
							<view class="itemDate">
								{{item.time}}
							</view>
						</view>
						<view class="itemText">
							{{item.comments}}
							<view class="reply" v-if="item.reply">
								{{item.reply}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommonGoods',
		data() {
			return {
				moreList: [{
						name: '商品详情',
						detailsType: 'details_img'
					},
					{
						name: '商品评价',
						detailsType: 'details'
					}
				],
				detailsType: 'details_img'
			}
		},
		props: ['details'],
		methods: {
			click(item) {
				this.detailsType = item.detailsType
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsMore {
		background: #fff;
		display: flex;
		justify-content: center;
		border-bottom: 1px #d9d9d9 solid;
	}

	.details_img {
		width: 100%;

		image {
			width: 100%;
			margin-bottom: 20rpx;
		}
	}

	.details {
		padding: 20rpx;
		background: #fff;

		.detialType {
			display: flex;
			flex-wrap: wrap;

			::v-deep .u-transition {
				margin-bottom: 30rpx;
				margin-right: 20px;

				.u-tag {
					border: none;
					padding: 0 10px;

					span {
						font-size: 12px;
					}
				}
			}
		}

		.commentList {
			.commentItem {
				display: flex;
				margin-bottom: 30rpx;

				.itemContent {
					margin-left: 20px;
					flex: 3;

					.itemTop {
						padding: 10rpx 0 20rpx 0;
						// margin-bottom: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.itemName {
							font-size: 14px;
							font-weight: bold;

							.recommend {
								display: flex;
							}
						}
						.itemDate{
							font-size: 12px;
						}

					}

					.itemText {
						font-size: 14px;

						.reply {
							margin-top: 20rpx;
							background: #efefef;
							padding: 20rpx 18rpx;
							border-radius: 10px;
							font-size: 12px;
							color: #5c5c5c;
						}
					}
				}
			}
		}
	}
</style>
