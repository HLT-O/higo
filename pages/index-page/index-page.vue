<template>
  <view class="all">
    <u-swiper
      class='swiper'
      :list="indexList.Carousel"
      indicator
      indicatorMode="line"
      circular
      height="386rpx"
    />
    <view class="CommonSearch">
      <CommonSearch />
    </view>
    <view class="CommonKingkong">
      <CommonKingkong :indexList='indexList.navList' />
    </view>
    <view class="NewBenefits" style="text-align: center;">
      <img :src="indexList.newList" alt="新人专属服务">
    </view>
    <view class="CommonViparea">
      <CommonViparea :indexList='indexList.memberList' />
    </view>
    <view class="CommonIntrduce">
      <CommonIntrduce :indexList='indexList.recommendList' />
    </view>
    <view class="CommonLimitedsale">
      <CommonLimitedsale :indexList='indexList.saleList' />
    </view>
  </view>
</template>

<script>
import $http from '../../common/api';
import CommonKingkong from '../../components/CommonKingkong.vue';
import CommonViparea from '../../components/CommonViparea.vue';
import CommonIntrduce from '../../components/CommonIntrduce.vue';
import CommonLimitedsale from '../../components/CommonLimitedsale.vue';
import CommonSearch from '../../components/CommonSearch.vue';

export default {
  name: 'index-page',
  components: {
    CommonKingkong,
    CommonViparea,
    CommonIntrduce,
    CommonLimitedsale,
    CommonSearch,
  },
  data() {
    return {
      indexList: {},
    };
  },
  onLoad() {
    $http.request({
      url: '/index/indexList',
    }).then((res) => {
      // console.log(res.data);
      this.indexList = res.data;
    }).catch(() => {
      uni.showToast({
        title: '请求失败！',
        icon: 'none',
      });
    });
  },
  methods: {
    // pageJump(value) {
    //   uni.navigateTo({
    //     url: value,
    //     // success: res => {},
    //     // fail: () => {},
    //     // complete: () => {}
    //   });
    // },
  },
};
</script>

<style lang="less" scoped>
	.all{
		padding-bottom: calc(var(--window-bottom) + 10rpx);
		.swiper{
			width: 100%;
			position: relative;
		}
	}

	.content {
		display: flex;
		flex-direction: column;

	}

	.CommonKingkong,.CommonViparea,.CommonIntrduce,.CommonLimitedsale{
		margin: 2% 0;
	}
	.NewBenefits{
		width: 100%;
		img{
			width: 100%;
		}
	}
</style>
