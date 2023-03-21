<script>
export default {
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
	html{
		font-size: 62.5%
	}
	/*每个页面公共css */
	@import "uview-plus/index.scss";
	.uni-tabbar {
			// tab 样式
			// 背景色
			// tabBar 样式
			// 上边框
			.uni-tabbar-border {
				background-color: #333 !important; // tabBar 上边框的颜色
			}
			.uni-tabbar__item {
				// tabBar 单项样式
				height: 100rpx !important;
				.uni-tabbar__icon {
					// tabBar 图标样式
					width: 40rpx !important;
					height: 40rpx !important;
				}
				.uni-tabbar__label {
					// tabBar 文字样式
					// color:yellow !important
					font-size: 20rpx!important;
				}
			}
		}
</style>
