export default {
  common: {
    baseURL: 'https://www.fastmock.site/mock/74f9838477eab1de44a93ee164c0589e/hibuy',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      // "Content-Type":"application/x-www-form-urlencoded",
    },
    dataType: 'json',
  },
  request(option = {}) {
    // uni.showLoading({
    // 	title:'加载中'
    // })
    const options = { ...option };

    options.url = this.common.baseURL + options.url;
    options.data = options.data || this.common.data;
    options.headers = options.headers || this.common.headers;
    options.method = options.method || this.common.method;
    options.dataType = options.dataType || this.common.dataType;

    return new Promise((res, rej) => {
      uni.request({
        ...options,
        success: (result) => {
          if (result.statusCode !== 200) {
            return rej();
          }
          // setTimeout(function(){
          // 	uni.hideLoading()
          // },2000);
          const { data } = result;
          return res(data);
        },
      });
    });
  },
};
