<template>
  <view>
    <view class="cu-bar search">
      <view class="search-form round">
        <text class="cuIcon-search" />
        <input placeholder="输入关键字搜索" v-model="keywords" :focus="focus" confirm-type="search" @confirm="getList" />
      </view>
    </view>
    <!-- #ifdef H5 -->
    <scroll-view scroll-y style="height: calc(100vh - 100rpx)" v-if="keywords">
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
      <scroll-view scroll-y style="height: calc(100vh - 100rpx)" v-if="keywords">
        <!-- #endif -->
        <listLoading :loading="loading">
          <view class="list overflow-hidden">
            <view class="list-item  border-radius-16 overflow-hidden" v-for="(item,index) in list" :key="index">
              <view class="image">
                <image src="https://img1.baidu.com/it/u=1849921850,855881343&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" mode="aspectFill" />
              </view>
              <view class="info margin-left-20">
                <view class="f-s-30 margin-top-20">啦啦洗车</view>
                <view class="f-s-24 margin-top-10 color-999">很慢、洗车不方便，可能会洗坏</view>
              </view>
            </view>
            <empty v-if="noData"></empty>
          </view>
        </listLoading>
      </scroll-view>

      <view class="history" v-else>
        <view class="title color-333 f-s-28">历史记录
          <image src="@/static/icon/icon_delete.png" class="delete-btn" v-if="searchHistory.length !== 0" @click="deleteHistory"></image>
        </view>
        <view class="tag">
          <view class="margin-top-20 margin-right-20 f-s-28 color-666" v-for="(item,index) in searchHistory" :key="index" @click="getKeyword(item)">{{item}}</view>
        </view>
        <empty v-if="searchHistory.length === 0" title="暂无搜索记录~"></empty>
      </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      list: [],
      loading: false,
      noData: false,
      focus: true,
      searchHistory: []
    };
  },
  onLoad() {
    this.getSearchHistory()
  },
  methods: {
    // 点击历史搜索记录时，进行搜索
    getKeyword(value) {
      this.keywords = value
      this.getList()
    },
    // 获取列表
    getList() {
      this.loading = true
      this.noData = false
      this.list = []
      setTimeout(() => {
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.loading = false
        this.noData = true
      }, 2000);
      this.getSearchHistory()
    },
    // 获取历史搜索的关键字数据
    getSearchHistory() {
      // 从本地存储中获取关键字数据
      let searchKewords = uni.getStorageSync('searchHistory') ? uni.getStorageSync('searchHistory') : []

      // 输入的关键字如果跟历史搜索的关键字不相同，则一起存到本地，如果相同，则不存
      if (this.keywords && searchKewords.findIndex(item => item === this.keywords) === -1) {
        this.keywords && searchKewords.push(this.keywords)
      }
      uni.setStorageSync('searchHistory', searchKewords)

      // 重新获取本地存储的关键字数据，用于页面上实时更新
      this.searchHistory = uni.getStorageSync('searchHistory')
    },
    // 删除历史搜索关键字数据
    deleteHistory() {
      uni.showModal({
        title: '',
        content: '确定删除全部搜索历史？',
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync('searchHistory');
            this.getSearchHistory()
          } else if (res.cancel) {
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
}
.form {
  width: 100%;
}
.list {
  .list-item {
    display: flex;
    background-color: #fff;
    margin: 20rpx 20rpx 0;
    .image {
      width: 240rpx;
      height: 200rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .info {
    }
  }
}
.history {
  background-color: #fff;
  padding: 20rpx 30rpx;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delete-btn {
      width: 40rpx;
      height: 40rpx;
    }
  }
  .tag {
    display: flex;
    flex-wrap: wrap;
    margin-right: -20rpx;
    view {
      border-radius: 100rpx;
      padding: 6rpx 20rpx;
      background-color: #eeeeee;
    }
  }
}
</style>
