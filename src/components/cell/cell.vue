<template>
  <view class="cell" @click="jump">
    <image :src="iconUrl" class="image"></image>
    <view class="cell-right" :style="border ? '' : 'border:none'">
      <text class="title color-333 f-s-28">{{title}}</text>
      <text class="row" v-if="url"></text>
      <text class="rightText" v-if="!url">
        <slot></slot>
      </text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    iconUrl: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    jump() {
      if (this.url) {
        uni.navigateTo({
          url: this.url
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  border-bottom: 1rpx solid #e2e2e2;
  &:active {
    background-color: #eeeeee;
  }

  .image {
    width: 40rpx;
    height: 40rpx;
    margin: 0 20rpx 0 0;
  }
  .cell-right {
    height: 100rpx;
    display: flex;
    align-items: center;

    flex: 1;
    width: 100%;
    position: relative;
    justify-content: space-between;
    .title {
    }
    .row {
      position: absolute;
      right: 10rpx;
      width: 15rpx;
      height: 15rpx;
      top: 50%;
      border-top: 1px solid #333;
      border-right: 1px solid #333;
      transform: rotate(45deg) translateY(-50%);
    }
    .rightText {
      margin-right: 30rpx;
      color: #666;
    }
  }
}
</style>