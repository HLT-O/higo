<template>
  <view class="contentKingkong">
    <u-grid
      :border="false"
      col="4"
    >
      <u-grid-item
        v-for="(listItem, listIndex) in indexList"
        :key="listIndex"
      >
        <u--image
          :showLoading="true"
          :src="listItem.src"
          shape="circle"
          width="112rpx"
          height="112rpx" />
        <text class="grid-text" style="font-size: 24rpx;">{{listItem.title}}</text>
      </u-grid-item>
    </u-grid>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  name: 'CommonKingkong',
  data() {
    return {

    };
  },
  props: ['indexList'],
  options: { styleIsolation: 'shared' },
  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`);
    },
  },
};
</script>

<style lang="scss" scoped>
	.contentKingkong{
		padding-top: 3%;
	}
    .grid-text {
        font-size: 14rpx;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
