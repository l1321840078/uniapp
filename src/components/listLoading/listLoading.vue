<template>
  <view>
    <slot></slot>
    <view class="loading" v-if="loading" :class="{'center':position === 'center'}">
      <image src="@/static/icon/loading.png" mode="" class="image" />
      <text class="text">{{text}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20rpx 0;
  .image {
    width: 50rpx;
    height: 50rpx;
    animation: loading 1s infinite linear;
  }
  .text {
    font-size: 24rpx;
    color: #999;
  }
}

.center {
  position: absolute;
  width: 100%;
  height: 100%;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
