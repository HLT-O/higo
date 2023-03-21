<template>
  <view>
    <view class="shopping-page-container">
      <view class="title"> 购物车 </view>
      <view class="empty-container" v-if="shoppingCartList.length <= 0">
        <view class="empty-title"> 购物车空空如也 </view>
        <view class="empty-sub-title"> 赶紧犒劳一下自己吧 </view>
        <view class="empty-btn" @click="goIndexPage"> 去逛逛 </view>
      </view>
      <view class="shopping-cart-list">
        <u-swipe-action>
          <u-swipe-action-item
            :options="[{ text: '删除' }]"
            v-for="(item, index) in shoppingCartList"
            :key="index"
            @click="deleteShoppingItem"
          >
            <view class="shopping-cart-item">
              <checkbox-group name="" @change="changeChecked($event, index)">
                <checkbox :value="true" :checked="item.isChecked" color="#ED8F58" />
              </checkbox-group>
              <view class="info">
                <view class="info-cover">
                  <img :src="item.detail_img[0]" alt="" />
                </view>
                <view class="info-text">
                  <view class="info-name">
                    {{ item.detail.name }}
                  </view>
                  <view class="info-type">
                    {{ item.type }}
                  </view>
                  <view class="info-bottom">
                    <view class="info-sale">
                      {{ item.detail.sale }}
                    </view>
                    <view class="info-count">
                      <u-number-box v-model="item.count" @change="changeCount($event, index)">
                      </u-number-box>
                      <!-- {{item.count}} -->
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </u-swipe-action-item>
        </u-swipe-action>
      </view>
      <view class="recommend-container">
        <view class="recommend-title">
          <view class="left"></view>
          <view class="text">为你推荐</view>
          <view class="right"></view>
        </view>
        <view class="recommend-content">
          <!-- todo -->
          <view class="recommend-item" v-for="item in [1, 2, 3, 4]" :key="item" @click="goDetail">
            <view class="item-cover">
              <img src="../../static/shopping-img/cover1.png" alt="" />
            </view>
            <view class="item-title">云南香格里拉 野生山核桃150g*6</view>
            <view class="item-label">
              <view>特价</view>
              <view>24H发货</view>
            </view>
            <view class="item-price">
              <view>￥</view>
              <view class="price-text">39.9/箱</view>
            </view>
            <view class="item-icon">
              <img src="../../static/shopping-img/shopping-icon.png" alt="" />
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="count-container">
      <view class="select-all">
        <label class="radio">
          <checkbox-group name="" @change="changeShoppingCheckedAll">
            <checkbox :value="true" :checked="isShoppingCheckedAll" color="#ED8F58" />
            <text>全选</text>
          </checkbox-group>
        </label>
      </view>
      <view class="settlement">
        <view class="">
          <text>合计: ￥</text>
          <text>{{ allSale }}</text>
        </view>
        <view class="settlement-btn">去结算</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 购物车列表
    shoppingCartList() {
      console.log(this.$store.state.shoppingCartList);
      return this.$store.state.shoppingCartList;
    },
    // 是否全选
    isShoppingCheckedAll() {
      return this.$store.getters.isShoppingCheckedAll;
    },
    // 总价格
    allSale() {
      let sum = 0;
      const { shoppingCartList } = this.$store.state;
      shoppingCartList.map((item) => {
        if (item.isChecked) {
          sum += parseInt(item.detail.sale.substring(1)) * item.count;
          console.log(parseInt(item.detail.sale.substring(1)), item.count);
        }
      });
      return sum;
    },
  },
  methods: {
    // 跳转到商品详情
    goDetail() {
      // todo
    },
    // 改变数量
    changeCount(e, index) {
      const { value: count } = e;
      this.$store.commit("changeShoppingItem", {
        index,
        count,
      });
    },
    // 跳转至首页
    goIndexPage() {
      uni.switchTab({
        url: "/pages/index-page/index-page",
      });
    },
    // 改变选择
    changeChecked(e, index) {
      const isChecked = e.detail.value[0] ? true : false;
      this.$store.commit("changeShoppingItem", {
        index,
        isChecked,
      });
    },
    // 改变全选状态
    changeShoppingCheckedAll(e) {
      const isChecked = e.detail.value[0] ? true : false;
      this.$store.commit("changeShoppingCheckedAll", isChecked);
    },
    // 删除购物车单项
    deleteShoppingItem(e) {
      if (e.index !== void 0) {
        this.$store.commit("deleteShoppingItem", e.index);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.shopping-page-container {
  padding-top: 100rpx;
}

.title {
  height: 100rpx;
  text-align: center;
  font-weight: bold;
}

// 空内容
.empty-container {
  height: 200rpx;
  padding: 80rpx 0;
  background-color: #f5f5f5;
  text-align: center;

  > * {
    margin-bottom: 40rpx;
  }

  .empty-title {
    font-weight: bold;
    font-size: 40rpx;
    height: 40rpx;
    line-height: 40rpx;
  }

  .empty-sub-title {
    color: rgb(186, 186, 186);
  }

  .empty-btn {
    margin: 0 auto;
    width: 200rpx;
    height: 60rpx;
    line-height: 60rpx;
    border: 1px solid #75bf58;
    color: #75bf58;
    border-radius: 40rpx;
  }
}

.shopping-cart-list {
  padding: 20rpx;

  .shopping-cart-item {
    width: 100%;
    display: flex;
    margin: 20rpx 0;

    .info {
      margin: -10rpx 0 0 30rpx;
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
        border: 1px solid #ed8f58;
        border-radius: 20rpx;
        margin-top: 20rpx;
      }

      .info-bottom {
        margin-top: 30rpx;
        display: flex;
        align-items: center;

        .info-sale {
        }
      }
    }
  }
}

// 为你推荐
.recommend-container {
  margin: 50rpx auto 0 auto;

  .recommend-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600rpx;
    margin: 0 auto;

    .text {
      text-align: center;
      margin: 0 20rpx;
      font-weight: bold;
    }

    .left,
    .right {
      background-color: #ed8f58;
      height: 4rpx;
      width: 150rpx;
    }
  }

  .recommend-content {
    margin: 30rpx 35rpx;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30rpx;

    .recommend-item {
      position: relative;
      background-color: #f5f5f5;

      .item-cover {
        img {
          width: 100%;
        }
      }

      .item-title {
        margin: 20rpx 10rpx 20rpx 10rpx;
        font-size: 30rpx;
        color: rgb(110, 109, 109);
      }

      .item-label {
        margin: 20rpx 0 20rpx 10rpx;
        display: flex;

        > * {
          margin-right: 20rpx;
          border-radius: 20rpx;
          color: #f09b69;
          border: 2px solid #f09b69;
          font-size: 20rpx;
          padding: 5rpx 10rpx;
        }
      }

      .item-price {
        color: rgb(110, 110, 110);
        display: flex;
        align-items: center;
        margin: 20rpx 0 20rpx 10rpx;

        .price-text {
          font-size: 38rpx;
        }
      }

      .item-icon {
        position: absolute;
        bottom: 10rpx;
        right: 20rpx;

        img {
          width: 50rpx;
        }
      }
    }
  }
}

// 底部
.count-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  bottom: 0;
  margin: 0 auto;
  padding: 0 50rpx;
  position: fixed;
  z-index: 999;
  background-color: #fdfdfd;
  border-top: 1px solid #f5f5f5;
  box-shadow: 2px -1px 2px 0.5px rgba(0, 0, 0, 0.2);
  height: 100rpx;

  .select-all {
  }

  .settlement {
    display: flex;
    align-items: center;

    .settlement-btn {
      padding: 10rpx 15rpx;
      background-color: #4bc227;
      color: #fff;
      font-size: 26rpx;
      border-radius: 25rpx;
      margin-left: 20rpx;
    }
  }
}
</style>
