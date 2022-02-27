<template>
  <view>
    <view class="list-item border-radius-16" v-for="(item,index) in list" :key="index">
      <view class="flex row-between title">
        <text>订单号：1234561567612375</text>
        <text class="text-red">待付款</text>
      </view>
      <view class="info margin-top-20">
        <view>车牌号：闽A999999</view>
        <view>品牌：布加迪</view>
        <view>服务类型：洗车</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  // watch: {
  //   list(newVal, oldVal) {
  //     console.log(newVal, 222);
  //   }
  // },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  background-color: #fff;
  margin: 20rpx 20rpx 0;
  padding: 0 30rpx 20rpx;
  .title {
    height: 80rpx;
    border-bottom: 1rpx dotted #e2e2e2;
  }
  .info {
    line-height: 1.8;
  }
}
</style>
