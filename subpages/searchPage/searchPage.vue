<template>
  <view id="search">
    <!-- 搜索栏目 -->
    <u-sticky>
      <view class="search">
        <u-icon
          name="arrow-left"
          color="#333"
          size="28"
          @click="pageJump('../../pages/index-page/index-page')" />
        <view class="u-search">
          <u-search
            v-model='search'
            :show-action="true"
            actionText="搜索"
			placeholder="家具"
            bgColor='#f3f3f3'
            :actionStyle='actionStyle'
            @search='addHistory()'
            @custom="pageJump1('../../pages/classify-page/classify-page')"
            height="64rpx"
            margin="0 auto"
          />
        </view>
      </view>
    </u-sticky>
    <!-- 历史搜索 暂未完成-->
    <view class="search_history" v-show="show">
      <view class="history_title">
        <text>历史搜索</text>
        <u-modal
          :show="modelShow"
          :title="title"
          :content='content'
          :showCancelButton='true'
          @confirm='closeModel'
          @cancel='cancel'
        />
        <u-icon name="trash" @click="modelShow = true" />
      </view>
      <view class="history_content">
        <u-tag
          class="utag"
          :text="item"
          shape="circle"
          color='#464646'
          plain
          size="large"
          bgColor='#F8F8F8'
          v-for="(item, index) in historyList"
          :key='index'
          @click='pageJupm(item)'
        />
      </view>
    </view>

    <!-- 搜索推荐 -->
    <view class="search_advice">
      <text>搜索推荐</text>
      <view class="advice_content">
        <u-tag
          class="utag"
          :text="item"
          size="large"
          shape="circle"
          color='#ffffff'
          plain
          bgColor='#f9ae3d'
		  type="warning"
          v-for="(item, index) in searchHistory.history"
          :key='index'
          @click='pageJupm(item)'
        />
      </view>
    </view>
    <!-- 同城热搜 -->
    <view class="search_advice">
      <text>搜索推荐</text>
      <view class="advice_content">
        <u-tag
          class="utag"
          :text="item"
          size="large"
          shape="circle"
          color='#ffffff'
		  type="warning"
          :icon="item.icon"
          plain

          bgColor='#f9ae3d'
          v-for="(item, index) in searchHistory.hot"
          :key='index'
          @click='pageJupm(item)'
        />
      </view>
    </view>
  </view>
</template>

<script>
import $http from '../../common/api';

export default {
  data() {
    return {
      searchHistory: [],
      modelShow: false,
      // title:'标题',
      content: '确定删除全部历史记录',
      search: '',
      historyList: [],
    };
  },
  onLoad() {
    $http.request({
      url: '/search/history',
    }).then((res) => {
      console.log(res.data);
      this.searchHistory = res.data;
    }).catch(() => {
      uni.showToast({
        title: '请求失败！',
        icon: 'none',
      });
    });
  },
  computed: {
    show() {
      return this.historyList.length;
    },
  },
  methods: {
    getList() {
      console.log('没有更多了');
    },
    pageJump(value) {
      uni.switchTab({
        url: value,
        // success: res => {},
        // fail: () => {},
        // complete: () => {}
      });
    },
	pageJump1(value) {
	  uni.redirectTo({
	    url: value,
	    // success: res => {},
	    // fail: () => {},
	    // complete: () => {}
	  });
	},
    addHistory() {
      if (this.search !== '') {
        this.historyList.unshift(this.search);
      }
      console.log(this.search);
      console.log(this.historyList);
    },
    closeModel() {
      this.modelShow = !this.modelShow;
      this.historyList = [];
    },
    cancel() {
      this.modelShow = !this.modelShow;
    },
    pageJupm(val) {
      const searchData = JSON.stringify(val);
      uni.navigateTo({
        url: `?Data=${searchData}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#search{
	background: #FFFFFF;
	// padding: 10rpx;
	height: 1000rpx;
	.search{
		padding: 10rpx;
		display: flex;
		width: 100%;
		margin-top: 70rpx;
		background-color: #fff;
		.u-search{
			width: 600rpx;
			margin: 0 auto;
		}
		.actionStyle{
			color: red;
		}
	}
	.search_history{
		padding: 10rpx;
		padding-top: 50rpx;
		.history_title{
			display: flex;
			justify-content: space-between;
			text{
				font-size: 36rpx;
				font-weight: 800;

			}
		}

		.history_content{
			padding-top: 10rpx;
			width: 100%;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			.utag{
				// width: 150rpx;
				// margin: 10rpx 0;
				padding:10rpx 10rpx;
				border: none;

				::v-deep text{
					font-size: 24rpx;
					margin: auto;
					// text-align: center;
				}
			}
		}
	}
	.search_advice{
		padding: 10rpx;
		text{
			font-size: 36rpx;
			font-weight: 800;
		}
		.advice_content{
			padding-top: 10rpx;
			width: 100%;
			display: flex;
			justify-content:flex-start;
			flex-wrap: wrap;
			.utag{
				// width: 150rpx;
				// margin: 10rpx 0;
				margin: 10rpx 0 10rpx 10rpx;
				padding:5rpx 10rpx;
				border: none;

				::v-deep text{
					margin: 0 auto;
					font-size: 24rpx;
					text-align: center;
				}
			}
		}
	}
}
</style>
