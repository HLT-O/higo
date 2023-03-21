<!-- thumb: '../../static/SY-img/SY-vip-1.png', -->
<template>
  <view class="">

    <view class="head">
      <view class="head1">
        <span class="span1" /><h3>VIP会员专区</h3>
      </view>
      <view class="head1">
        <span class="span2">查看更多 ></span>
      </view>
    </view>

    <u-scroll-list @right="right" @left="left">
      <view class="scroll-list" style="flex-direction: row;">
        <view
          class="scroll-list__goods-item"
          v-for="(item, index) in indexList"
          :key="index"
          :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
        >
          <image class="scroll-list__goods-item__image" :src="item.src" />
          <text class="scroll-list__goods-item__text">{{ item.price }}</text><br />
        </view>
        <view class="scroll-list__show-more">
          <text class="scroll-list__show-more__text">查看更多</text>
          <u-icon name="arrow-leftward" color="#f50004" size="12" />
        </view>
      </view>
    </u-scroll-list>

  </view>

</template>

<script>
export default {
  name: 'CommonViparea',
  data() {
    return {
      // list: [{
      //   price: '19.9/500g',
      //   thumb: '../../static/SY-img/SY-vip-1.png',
      // }, {
      //   price: '9.9/瓶',
      //   thumb: '../../static/SY-img/SY-vip-2.png',
      // }, {
      //   price: '39.9/箱',
      //   thumb: '../../static/SY-img/SY-vip-3.png',
      // }, {
      //   price: '1442',
      //   thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg',
      // }, {
      //   price: '541',
      //   thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg',
      // }, {
      //   price: '234',
      //   thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg',
      // }, {
      //   price: '562',
      //   thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg',
      // }, {
      //   price: '251.5',
      //   thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg',
      // }],
    };
  },
  props: ['indexList'],
  methods: {
    left() {
      console.log('left');
    },
    right() {
      console.log('right');
    },
  },
};
</script>

<style lang="scss" scoped>
	.head{
		line-height: 100rpx;
		display: flex;
		align-items: center;
		padding: 2% 4%;
		margin: 0 auto;
		justify-content: space-between;
		.head1{
			display: flex;
			align-items: center;
			.span1{
				display: inline-block;
				color: #ffc800;
				height: 50rpx;
				width: 10rpx;
				background-color: #ffc800;
			}
		}

		.span2{
			color: #9f9898;
			font-size: 24rpx;
		}
		h3{
			margin-left: 10rpx;
			color: #b36b00;
			font-size: 44rpx;
		}
	}
.scroll-list {
	margin: 1% 4%;
	@include flex(column);
	::v-deep .scroll-list__show-more{
		height: 240rpx;
		width: 80rpx;
		.scroll-list__show-more__text{
			line-height: 50rpx;
		}
	}
	&__goods-item {
		margin-right: 20rpx;

		&__image {
			height: 240rpx;
			width: 240rpx;
			border-radius: 8rpx;
		}
		&__text {
			color: #f56c6c;
			text-align: center;
			font-size: 36rpx;
			margin-top: 5rpx;
		}
	}
	&__show-more {
		background-color: #fff0f0;
		border-radius: 3rpx;
		padding: 3rpx 6rpx;
		@include flex(column);
		align-items: center;

		&__text {
			font-size: 12rpx;
			width: 12rpx;
			color: #f56c6c;
			line-height: 16rpx;
		}
	}
}
</style>
