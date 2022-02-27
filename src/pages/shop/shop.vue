<template>
  <view>
    <swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <image :src="item" mode="aspectFill"></image>
      </swiper-item>
    </swiper>

    <view class="VerticalBox">
      <scroll-view class="VerticalNav nav" scroll-y scroll-with-animation style="height:calc(100vh - 474rpx)">
        <view>
          <view class="cu-item text-center" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in menuList" :key="index" @tap="TabSelect" :data-id="index"> {{item.label}} </view>
        </view>

      </scroll-view>
      <!-- #ifdef MP-WEIXIN -->
      <scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)">
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <scroll-view class="VerticalMain" scroll-y scroll-with-animation :style="`height:calc(100vh - 474rpx - ${phoneBottom}px)`">
          <!-- #endif -->
          <view class="margin-bottom-30">
            <view class="">

              <listLoading :loading="loading" position="center">
                <view class="cu-list menu-avatar">
                  <view class="cu-item" v-for="(ele,idx) in list" :key="idx">
                    <view class="cu-avatar round lg" :style="{backgroundImage:'url('+ele.imgUrl+')'}">
                    </view>
                    <view class="content">
                      <text class="text-cut">{{ele.name}}</text>
                      <view class="text-gray text-sm flex row-between">
                        <text class="text-cut">
                          {{ele.description}}
                        </text>
                      </view>
                      <view class="text-gray text-sm flex row-between">
                        <text class="text-cut">
                          {{ele.description}}
                        </text>
                      </view>
                    </view>
                  </view>
                </view>
              </listLoading>
              <empty v-if="noData"></empty>
            </view>
          </view>
        </scroll-view>
    </view>
  </view>
</template>
 
<script>
import { classifyList, goodsList } from '@/static/js/json'
export default {
  data() {
    return {
      bannerList: [
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3094856384-66E43504B4C23642FCBDF1613D86B285%2F0%3Ffmt%3Djpg%26size%3D187%26h%3D506%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579595&t=9afbb4193f2352bbf62350daa3abd382`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F200311%2F12-200311111055.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579649&t=d6ef990d31196565ef51073c5ca7933e`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.cntonan.com%2Fuploadfile%2F2020%2F0316%2F20200316201431wj5myzifiw3.jpg&refer=http%3A%2F%2Fstatic.cntonan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579709&t=fd5e5896e599cbfa0348e5dde12d4e05`
      ],//轮播数据
      menuList: [],//左侧菜单数据
      list: [],//右侧数据
      tabCur: 0,
      phoneBottom: 0,//手机底部安全区域
      loading: false,
      noData: false
    };
  },
  onLoad() {
    this.phoneBottom = this.PhoneBottom
    this.menuList = classifyList
    this.getList()
  },

  methods: {
    getList() {
      this.loading = true
      this.noData = false
      this.list = []
      setTimeout(() => {
        this.list = goodsList
        this.loading = false
        this.noData = true
      }, 1000);
    },
    TabSelect(e) {
      this.tabCur = e.currentTarget.dataset.id;
      this.getList()
    },

  },
}
</script>
 
<style>
.text-green,
.line-green,
.lines-green {
  color: #5bc8ff;
}
.fixed {
  position: fixed;
  z-index: 99;
}

.VerticalNav.nav {
  width: 200upx;
  white-space: initial;
}

.VerticalNav.nav .cu-item {
  width: 100%;
  text-align: center;
  background-color: #f1f1f1;
  margin: 0;
  border: none;
  height: 50px;
  position: relative;
}
.cu-list {
  margin: 0 20rpx;
}
.cu-list.menu-avatar > .cu-item {
  padding: 0;
  display: flex;
  justify-content: flex-start;
  height: auto;
  padding: 20rpx 0;
  align-items: flex-start;
}
.cu-list.menu-avatar > .cu-item .content {
  width: 100%;
  position: relative;
  left: 0;
  flex: 1;
  padding-left: 20rpx;
}

.VerticalNav.nav .cu-item.cur {
  background-color: #fff;
}

.cu-list.menu-avatar > .cu-item > .cu-avatar {
  position: relative;
  left: 0;
}

.VerticalNav.nav .cu-item.cur::after {
  /* content: "";
  width: 8upx;
  height: 30upx;
  border-radius: 10upx 0 0 10upx;
  position: absolute;
  background-color: currentColor;
  top: 0;
  right: 0upx;
  bottom: 0;
  margin: auto; */
}

.VerticalBox {
  display: flex;
}

.VerticalMain {
  background-color: #fff;
  flex: 1;
}
</style>