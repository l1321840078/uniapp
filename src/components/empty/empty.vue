<template>
  <view class="empty flex" :style="{paddingTop:top+'rpx',paddingBottom:bottom+'rpx'}">
    <text class="text"></text>
    <view class="tips color-999 f-s-24">{{title}}</view>
    <text class="text"></text>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '没有更多数据~'
    },
    top: {//距离上一个标签的距离
      type: [Number, String],
      default: 20
    },
    bottom: {//距离下一个个标签的距离
      type: [Number, String],
      default: 20
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  .text {
    display: block;
    width: 30rpx;
    height: 1rpx;
    border-top: 1rpx solid #999;
  }
  .tips {
    margin: 0 20rpx;
  }
}
</style>