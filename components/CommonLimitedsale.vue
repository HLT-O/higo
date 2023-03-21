<template>
  <view class="contentLimit">
    <view class="head">
      <view class="head1">
        <span class="span1" />
        <h3>限时特卖</h3>
      </view>
      <view class="limitRight">
        <view class="limitRight1">
          <span class="timespan">距离下次</span>
          <u-count-down
            :time="30 * 60 * 60 * 1000"
            format="HH:mm:ss"
            autoStart
            millisecond
            @change="onChange"
          >
            <view class="time">
              <view class="time__custom">
                <text class="time__custom__item">{{
                  timeData.hours > 10 ? timeData.hours : "0" + timeData.hours
                }}</text>
              </view>
              <text class="time__doc">:</text>
              <view class="time__custom">
                <text class="time__custom__item">{{ timeData.minutes }}</text>
              </view>
              <text class="time__doc">:</text>
              <view class="time__custom">
                <text class="time__custom__item">{{ timeData.seconds }}</text>
              </view>
            </view>
          </u-count-down>
        </view>
        <view class="head1">
          <span class="span2">查看更多 ></span>
        </view>
      </view>
    </view>
    <view class="mid">
      <view class="list" v-for="(item, index) in indexList" :key="index">
        <view class="list_text">
          <img :src="item.src" alt="列表图" />
          <view class="list_detial">
            <span>{{ item.name }}</span>
            <p style="text-decoration: line-through">{{ item.old }}</p>
            <view class="price">
              <b>{{ item.new }}</b>
              <span>立即抢购</span>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'CommonLimitedsale',
  data() {
    return {
      timeData: {},
      // indexList1: [
      //   {
      //     img: '../../static/SY-img/SY-list3-1.png',
      //     name: '荷兰VDL贝壳提亮液 30ml',
      //     intrduce: '558.00',
      //     price: 160.0,
      //   },
      //   {
      //     img: '../../static/SY-img/SY-list3-2.png',
      //     name: '美国美宝莲精华乳液 80ml',
      //     intrduce: '128.50',
      //     price: 75.0,
      //   },
      //   {
      //     img: '../../static/SY-img/SY-list3-3.png',
      //     name: '日本 Kose 高丝 宝石护手霜橘色滋润款',
      //     intrduce: '119',
      //     price: 48,
      //   },
      //   {
      //     img: '../../static/SY-img/SY-list3-4.png',
      //     name: '意大利Red Sral 红印黑糖 550g',
      //     intrduce: '119',
      //     price: 48,
      //   },
      // ],
    };
  },
  props: ['indexList'],
  //  props: {
  //    indexList: {
  //      require: true,
  //      type: Array,

  //    },
  //    isShow: {
  //      type: Boolean,
  //      default: false,
  //    },
  //  },
  methods: {
    onChange(e) {
      this.timeData = e;
    },
  },
};
</script>
<style lang="scss" scoped>
.contentLimit {
  .head {
line-height: 100rpx;
    display: flex;
    align-items: center;
    padding: 2% 4%;
    margin: 0 auto;
	justify-content: space-between;
	.limitRight{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.limitRight1{
			display: flex;
		}
		.timespan{
			color: #e84413;
			font-size: 36rpx;
			margin-right: 15rpx;
		}
	}
    .head1 {
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

    .span2 {
      font-size: 24rpx;color: #9f9898;
    }
    h3 {
      margin-left: 10rpx;
      color: #b36b00;
      font-size: 44rpx;
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
			margin-right: 5%;
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
          p {
            color: #969696;
            font-size: 24rpx;
            padding: 3% 0;
          }
          .price {
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
}
</style>
<style lang="scss">
.time {
  @include flex;
  align-items: center;
  &__custom {
    width: 48rpx;
    height: 48rpx;
    background-color: $u-warning;
    border-radius: 4rpx;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
    &__item {
      color: #fff;
      font-size: 30rpx;
      text-align: center;
    }
  }
  &__doc {
    color: $u-primary;
    padding: 0rpx 4rpx;
  }
  &__item {
    color: #606266;
    font-size: 15rpx;
    margin-right: 4rpx;
  }
}
</style>
