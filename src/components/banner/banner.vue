<template>
  <view class="banner-box overflow-hidden" :style="{backgroundImage: background,paddingTop:top}">
    <swiper class="swiper border-radius-16 overflow-hidden" :indicator-dots="false" :autoplay="true" :interval="3000" :current="current" @change="swiperChange" @transition="transition">
      <swiper-item v-for="(item,index) in list" :key="index" class="swiper-item border-radius-16 overflow-hidden">
        <image :src="item.url" mode="aspectFill" class="swiper-img"></image>
      </swiper-item>

    </swiper>
    <view class="dots">
      <view class="dot-item" v-for="(item,index) in list" :class="index === current ? 'active' : ''" :key="index"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    top: {
      type: String,
      default: 0
    },
  },
  data() {
    return {
      current: 0,
      background: ''
    }
  },
  mounted() {
    this.background = this.list[this.current].bgColor
  },
  methods: {
    swiperChange(e) {
      this.current = e.detail.current
      this.background = this.list[this.current].bgColor
    },
    transition(e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-box {
  padding: 20rpx;
  position: relative;
  transition: background-position 1s;
  .swiper {
    height: 300rpx;

    .swiper-item {
    }
    .swiper-img {
      width: 100%;
      height: 100%;
    }
  }
  .dots {
    position: absolute;
    right: 60rpx;
    bottom: 40rpx;
    display: flex;
    align-items: center;
    .dot-item {
      width: 20rpx;
      height: 6rpx;
      background-color: #fff;
      border-radius: 100rpx;
      margin-left: 20rpx;
      opacity: 0.6;
      transition: 0.5s;
    }
    .active {
      width: 36rpx;
      opacity: 1;
    }
  }
}
</style>