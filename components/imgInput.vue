<template>
  <view class="i-container">
    <image :src="iSrc" mode="widthFix"></image>
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
    />
    <image v-if="showPassword" @click="handlePassword" :src="eyeUrl" mode="widthFix"></image>
  </view>
</template>

<script>
export default {
  name: "imgInput",
  props: {
    value: [String],
    iSrc: {
      default: "../static/login-img/user.png",
    },
    type: {
      type: String,
      default: "text",
    },
    showPassword:{
      type:Boolean,
      default:false
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
  },
  data() {
    return {
      passwordVisible:false
    };
  },
  computed:{
    eyeUrl:function(){
      return this.passwordVisible ? '../static/login-img/invisibility.png' : '../static/login-img/visible.png'
    }
  },
  methods: {
    handleInput(event) {
      this.$emit("update:value", event.detail.value);
    },
    handlePassword(){
      this.passwordVisible = !this.passwordVisible
    }
  },
};
</script>

<style lang="less" scoped>
.i-container {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(114, 114, 114);
  border-radius: 999rpx;
  margin-bottom: 50rpx;
  overflow: hidden;
}
image {
  margin: 0 20rpx;
  width: 50rpx;
}
input {
  flex-grow: 1;
  height: 80rpx;
  font-size: 36rpx;
}
</style>
