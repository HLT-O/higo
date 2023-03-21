<template>
  <view class="allsearch">
    <view class="searchAll">
      <view class="search">
        <u-search
          placeholder="搜索内容"
          :disabled="true"
          :clearabled="true"
          bgColor='#f3f3f3'
          :showAction="false"
          height="64rpx"
          margin="0 auto"
          @click="pageJump()"
        />
      </view>
    </view>
  </view>

</template>

<script>

export default {
  name: 'CommonSearch',
  data() {
    return {
      history: {},
    };
  },
  onLoad() {

  },
  methods: {
    pageJump() {
      uni.navigateTo({
        url: '../../subpages/searchPage/searchPage',
        // success: res => {},
        // fail: () => {},
        // complete: () => {}
      });
    },
  },
};
</script>

<style lang="less" scoped>
.allsearch{
	.searchAll{
		position: absolute;
			width: 100%;
			top: 70rpx;
		.search{
			background-size: 100% 100%;
			background-size:cover;
			height: 100%;
			.u-search{
				width: 600rpx;
			}
			::v-deep .u-search__action span{
				color: #fff;

			}
		}
	}
}
</style>
