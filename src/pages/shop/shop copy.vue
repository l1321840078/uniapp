<template>
  <view>
    <swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <image :src="item" mode="aspectFill"></image>
      </swiper-item>
    </swiper>

    <view class="VerticalBox">
      <scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 474rpx)">
        <view>
          <view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect" :data-id="index"> {{item.label}} </view>
        </view>

      </scroll-view>
      <!-- #ifdef MP-WEIXIN -->
      <scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)" :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <scroll-view class="VerticalMain" scroll-y scroll-with-animation :style="`height:calc(100vh - 474rpx - ${phoneBottom}px)`" :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
          <!-- #endif -->
          <view class="margin-bottom-30">
            <view class="padding-top-20 padding-left-20 padding-right-20" v-for="(item,index) in list" :key="index" :id="'main-'+index">
              <view class="cu-bar solid-bottom bg-white">
                <view class="action">
                  <text class="cuIcon-title text-green"></text> {{item.label}}
                </view>
              </view>
              <view class="cu-list menu-avatar">
                <view class="cu-item" v-for="(ele,idx) in item.subList" :key="idx">
                  <view class="cu-avatar round lg" :style="{backgroundImage:'url('+ele.imgUrl+')'}">
                    <!-- <view class="cu-tag badge">99+</view> -->
                  </view>
                  <view class="content">
                    <text class="text-cut">{{ele.name}}</text>
                    <view class="text-gray text-sm flex row-between">
                      <text class="text-cut">
                        {{ele.description}}
                      </text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
    </view>
  </view>
</template>
 
<script>
import { classifyList } from '@/static/js/json'
export default {
  data() {
    return {
      bannerList: [
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3094856384-66E43504B4C23642FCBDF1613D86B285%2F0%3Ffmt%3Djpg%26size%3D187%26h%3D506%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579595&t=9afbb4193f2352bbf62350daa3abd382`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F200311%2F12-200311111055.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579649&t=d6ef990d31196565ef51073c5ca7933e`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.cntonan.com%2Fuploadfile%2F2020%2F0316%2F20200316201431wj5myzifiw3.jpg&refer=http%3A%2F%2Fstatic.cntonan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646579709&t=fd5e5896e599cbfa0348e5dde12d4e05`
      ],
      list: [],
      tabCur: 0,
      mainCur: 0,
      verticalNavTop: 0,
      load: true,
      phoneBottom: 0
    };
  },
  onLoad() {
    this.phoneBottom = this.PhoneBottom
    this.list = classifyList.map((item, index) => {
      item.index = index
      return item
    });
  },

  methods: {
    TabSelect(e) {
      this.tabCur = e.currentTarget.dataset.id;
      this.mainCur = e.currentTarget.dataset.id;
      this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
    },
    //希望有大佬给我讲解一下这个双向联动函数
    VerticalMain(e) {
      let tabHeight = 0;
      if (this.load) {
        for (let i = 0; i < this.list.length; i++) {
          let view = uni.createSelectorQuery().select("#main-" + this.list[i].index);
          view.fields({
            size: true
          }, data => {
            this.list[i].top = tabHeight;
            tabHeight = tabHeight + data.height;
            this.list[i].bottom = tabHeight;
          }).exec();
        }
        this.load = false
      }
      let scrollTop = e.detail.scrollTop + 10;
      for (let i = 0; i < this.list.length; i++) {
        if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
          this.verticalNavTop = (this.list[i].index - 1) * 50
          this.tabCur = this.list[i].index
          return false
        }
      }
    }
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
  background-color: #fff;
  margin: 0;
  border: none;
  height: 50px;
  position: relative;
}

.cu-list.menu-avatar > .cu-item .content {
  width: 100%;
}

.VerticalNav.nav .cu-item.cur {
  background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
  content: "";
  width: 8upx;
  height: 30upx;
  border-radius: 10upx 0 0 10upx;
  position: absolute;
  background-color: currentColor;
  top: 0;
  right: 0upx;
  bottom: 0;
  margin: auto;
}

.VerticalBox {
  display: flex;
}

.VerticalMain {
  background-color: #f1f1f1;
  flex: 1;
}
</style>