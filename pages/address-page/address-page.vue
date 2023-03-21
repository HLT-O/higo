<template>
  <view>
    <u-navbar
      title="我的收货地址"
      height="60"
      :placeholder="true"
      :autoBack="true"
      rightText="设置"
    >
    </u-navbar>
    <view class="addressList">
      <view class="addressItem" v-for="(item, index) in addressList" :key="index">
        <view class="textContent" @click="jump(item)">
          <u-avatar
            :text="item.name[0]"
            fontSize="18"
            bg-color="#ffe3d8"
            color="#eb661f"
            style="margin-right: 20rpx"
          ></u-avatar>
          <view>
            <view class="infoText">
              <span style="font-weight: 600; margin-right: 20rpx">
                {{ item.name }}
              </span>
              <span style="font-size: 28rpx; color: #959595 ;">{{ item.phone }}</span>
            </view>
            <view style="font-size: 30rpx">{{ item.address }}</view>
          </view>
        </view>
        <view class="editAddress">
          <u-icon name="edit-pen" size="50rpx"></u-icon>
        </view>
      </view>
    </view>
    <view class="addAddress">
      <u-icon name="plus" color="#fff"></u-icon>
      <text>点击添加新的地址</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      addressList: [
        {
          name: "李银河",
          phone: "13325637891",
          address: "重庆巴南区南泉",
        },
        {
          name: "李银河",
          phone: "13325637891",
          address: "重庆巴南区南泉都是符合国家司法和概括来说几乎还是尽快给回家是靠近对方给金卡是",
        },
      ],
    };
  },
  methods: {
    jump(item) {
      console.log(item);
      // uni.$emit('setAddress', item)
      // uni.navigateBack({
      //   //uni.navigateTo跳转的返回，默认1为返回上一级
      //   delta: 1
      // })
    },
  },
};
</script>

<style lang="less" scoped>
.addressList {
  padding: 20rpx 30rpx;
  overflow: hidden;
}
.addressItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30rpx;
  background-color: #f3f3f3;
  padding: 20rpx 20rpx 10rpx;
  margin-bottom: 20rpx;
}
.textContent {
  display: flex;
  align-items: center;
}
.infoText {
  margin-bottom: 10rpx;
}
.addAddress {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100rpx;
  color: #fff;
  background-image: linear-gradient(to right, #f6ad46, #fd7e64);
  position: fixed;
  bottom: 0;
}
</style>
