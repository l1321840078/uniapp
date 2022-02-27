<template>
  <view>
    <view class="tab flex row-between f-s-28">
      <view class="tab-item flex color-333" @click="tabChange(0)">全部</view>
      <view class="tab-item flex color-333" @click="tabChange(1)">待付款</view>
      <view class="tab-item flex color-333" @click="tabChange(2)">已完成</view>
      <view class="slider" :style="{left:left }"></view>
    </view>

    <swiper class="swiper" :current="current" duration="200" @change="swiperChange">
      <swiper-item>
        <scroll-view scroll-y class="scroll-view">
          <listLoading :loading="loading">
            <view class="order-list overflow-hidden">
              <order-list :list="list0"></order-list>
            </view>
            <empty v-if="noData0"></empty>
          </listLoading>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="scroll-view">
          <listLoading :loading="loading">
            <view class="order-list overflow-hidden">
              <order-list :list="list1"></order-list>
            </view>
            <empty v-if="noData1"></empty>
          </listLoading>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="scroll-view">
          <listLoading :loading="loading">
            <view class="order-list overflow-hidden">
              <order-list :list="list2"></order-list>
            </view>
            <empty v-if="noData2"></empty>
          </listLoading>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import orderList from './components/orderList.vue';
export default {
  components: { orderList },
  data() {
    return {
      current: 0,
      left: 0,
      loading: false,
      list0: [],
      list1: [],
      list2: [],
      noData0: false,
      noData1: false,
      noData2: false,
    };
  },
  onLoad() {
    this.getList(0)
  },
  onReady() {
    this.setSliderLeft()
  },
  methods: {
    // 获取数据列表
    getList(index) {
      this.loading = true
      this[`list${index}`] = []
      this[`noData${index}`] = false
      setTimeout(() => {
        this[`list${index}`] = [1, 2, 3, 4, 5, 6, 7, 8]
        this.loading = false
        this[`noData${index}`] = true
      }, 1500);
    },
    // 列表切换
    swiperChange(e) {
      this.current = e.detail.current
      this.setSliderLeft()
      this.getList(this.current)
    },
    // tab切换
    tabChange(val) {
      this.current = val
      this.setSliderLeft()
    },
    // 设置tab滑块的位置
    setSliderLeft() {
      uni.createSelectorQuery().select('.tab').boundingClientRect(data => {
        this.left = (data.width * 0.333333) * (this.current + 0.5) + 'px'
      }).exec()
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  height: 88rpx;
  background-color: #fff;
  position: relative;
  .tab-item {
    width: 33.33%;
  }
  .slider {
    height: 10rpx;
    width: 60rpx;
    background-color: #5bc8ff;
    border-radius: 100rpx;
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    transition: 0.2s;
  }
}
.swiper {
  /* #ifdef MP-WEIXIN */
  height: calc(100vh - 88rpx);
  /* #endif */
  /* #ifdef H5 */
  height: calc(100vh - 88rpx);
  /* #endif */
  .scroll-view {
    /* #ifdef MP-WEIXIN */
    height: calc(100vh - 88rpx);
    /* #endif */
    /* #ifdef H5 */
    height: calc(100vh - 88rpx);
    /* #endif */
  }
  .order-list {
  }
}
</style>
