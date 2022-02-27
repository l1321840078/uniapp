<template>
  <view class="overflow-hidden">
    <view class="card bg-gradual-blue margin-bottom-20" :style="{paddingTop: customBar+'px'}">
      <view class="car-info">
        <image src="/static/icon/icon_car.png" class="margin-right-20"></image>
        <view>
          <view>车号：闽A123456</view>
          <view class="margin-top-10">品牌：劳斯莱斯</view>
        </view>
      </view>
      <view class="flex row-between margin-top-20 margin-right-50 margin-left-50">
        <view>车系：幻影</view>
        <view>车型：中型</view>
      </view>
    </view>

    <view class="menu margin-between-20 border-radius-16">
      <cell title="车辆管理" iconUrl="/static/icon/icon_car_manage.png" url="1"></cell>
      <cell title="账户管理" iconUrl="/static/icon/icon_account.png" url="1"></cell>
      <cell title="预约单管理" iconUrl="/static/icon/icon_appoint.png" url="1"></cell>
      <cell title="订单管理" iconUrl="/static/icon/icon_order.png" url="/pages/mine/order"></cell>
      <cell title="活动记录" iconUrl="/static/icon/icon_activity.png" url="1"></cell>
      <cell title="消费记录" iconUrl="/static/icon/icon_consume.png" :border="false" url="1"></cell>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      customBar: 0
    }
  },
  onLoad() {
    this.customBar = this.CustomBar
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30rpx;
  .car-info {
    display: flex;
    align-items: center;

    image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
    }
  }
}
.menu {
  background-color: #fff;
}
</style>