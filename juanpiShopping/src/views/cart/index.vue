<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-nav-bar {
  background: #f00;
  .van-nav-bar__text,.van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
