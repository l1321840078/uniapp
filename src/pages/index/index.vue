<template>
  <view>

    <view class="navBar fixed" :style="{height: customBar+'px',background:barBackground}">
      <view class="cu-bar search">
        <view class="search-form round" @tap="searchTap">
          <text class="cuIcon-search" />
          <input placeholder="搜索您想要的商品" disabled />
        </view>
      </view>
    </view>
    <!-- #ifdef H5 -->
    <scroll-view scroll-y class="scroll-view" :style="{height: `calc(100vh - ${phoneBottom}px - 100rpx)`}" @scroll="bindScroll">
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
      <scroll-view scroll-y class="scroll-view" @scroll="bindScroll">
        <!-- #endif -->
        <banner :list="bannerList" :top="customBar+10+'px'"></banner>

        <view class="grid-box margin-between-20 border-radius-16">
          <gridList :list_data='gridMenuData' @listTap='gridMenuTap' />
        </view>

        <view class="bottom-menu flex row-between">
          <view class="bottom-menu-item border-radius-16 overflow-hidden margin-bottom-20" v-for="(item,index) in bottomList" :key="index">
            <view class="title flex bg-gradual-blue">{{item.name}}</view>
            <view class="cover">
              <image :src="item.coverImg" mode="aspectFill"></image>
            </view>
          </view>
        </view>

        <empty></empty>
      </scroll-view>
  </view>
</template>

<script>
import { navList, bannerList } from '@/static/js/json'
import gridList from './components/gridList'
export default {
  components: { gridList },
  data() {
    return {
      bannerList: [],
      gridMenuData: [],
      bottomList: [
        { name: '养车必备', coverImg: 'https://img2.baidu.com/it/u=2207490389,21817886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281' },
        { name: '线上专项', coverImg: 'https://img2.baidu.com/it/u=2068710572,4140711313&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=370' },
        { name: '精彩活动', coverImg: 'https://img1.baidu.com/it/u=2495496530,3535538171&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360' },
        { name: '强烈推荐', coverImg: 'https://img1.baidu.com/it/u=1777050130,3564460242&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=435' },

      ],
      customBar: 0,
      phoneBottom: 0,
      barBackground: 'rgba(255,255,255,0)'
    }
  },
  onLoad() {
    this.gridMenuData = navList;
    this.bannerList = bannerList
    this.customBar = this.CustomBar
    this.phoneBottom = this.PhoneBottom
  },
  methods: {
    searchTap() {
      uni.navigateTo({
        url: `/pages/index/search`
      });
    },
    bindScroll(e) {
      this.barBackground = `rgba(255,255,255,${e.detail.scrollTop / 100})`
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .cu-custom .cu-bar .content {
  width: 100%;
}

.navBar {
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
}
.search {
  /* #ifdef H5 */
  min-height: 90rpx;
  width: 100%;
  /* #endif */
  // #ifdef MP-WEIXIN
  min-height: 80rpx;
  width: 70%;
  // #endif
  .search-form {
    height: 60rpx;
    line-height: 60rpx;
  }
}
.scroll-view {
  // #ifdef MP-WEIXIN
  height: 100vh;
  // #endif
  // #ifdef H5
  height: calc(100vh - 100rpx);
  // #endif
}

.grid-box {
  background-color: #fff;
}

.bottom-menu {
  flex-wrap: wrap;
  margin: 20rpx 20rpx 0;
  .bottom-menu-item {
    width: calc(50% - 10rpx);
    background-color: #fff;
    .title {
      height: 60rpx;
    }
    .cover {
      height: 240rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
