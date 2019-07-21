<template>
  <dvi class="container">
    <van-nav-bar
      title="我的优惠卷"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </dvi>
</template>

<script>
import Vue from 'vue'
import { CouponCell, CouponList, NavBar } from 'vant'

Vue.use(CouponCell)
Vue.use(CouponList)
Vue.use(NavBar)
export default {
  data () {
    return {
      // chosenCoupon: -1,
      // coupons: [coupon],
      // disabledCoupons: [coupon]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      // this.coupons.push(coupon)
    }
  }
}
</script>

<style lang="scss">
</style>
