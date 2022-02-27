<template>
  <view>
    <!-- #ifdef H5 -->
    <map id="mymap" style="width: 100%; height: calc(100vh - 100rpx)" :latitude="latitude" :longitude="longitude" :markers="covers">
      <image src="@/static/icon/icon_refresh.png" mode="" class="refresh" @click="initMap" />
    </map>
    <!-- #endif -->
    <!-- #ifdef MP-WEIXIN -->
    <map id="mymap" style="width: 100%; height: 100vh" :latitude="latitude" :longitude="longitude" :markers="covers">
      <image src="@/static/icon/icon_refresh.png" mode="" class="refresh" @click="initMap" />
    </map>
    <!-- #endif -->
  </view>
</template>

<script>
import { nearSite } from '@/static/js/json'
export default {
  data() {
    return {
      id: 0, // 使用 marker点击事件 需要填写id
      title: 'map',
      latitude: 39.909,
      longitude: 116.39742,
      covers: [],
      includePoints: [],
      mapCtx: null
    }
  },
  onLoad() {

  },
  onReady: function () {
    this.initMap()
  },
  methods: {
    initMap() {
      this.covers = nearSite
      this.mapCtx = wx.createMapContext('mymap');
      this.onIncludePoints();
    },
    onIncludePoints() {
      const points = nearSite.map(item => {
        return {
          longitude: item.longitude,
          latitude: item.latitude,
        }
      })
      this.mapCtx.includePoints({
        padding: [100, 100, 100, 100],
        points: points
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#mymap {
  .refresh {
    width: 50rpx;
    height: 50rpx;
    position: absolute;
    right: 50rpx;
    bottom: 50rpx;
    z-index: 99;
  }
}
</style>