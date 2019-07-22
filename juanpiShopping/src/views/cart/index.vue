<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      origin-price="10.00"
    >
    <div slot="tags">
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </div>
    <div slot="footer">
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </div>
    </van-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Card } from 'vant'
Vue.use(NavBar)
Vue.use(Card)
export default {
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // const loginState = vm.$store.state.loginState
      const { $store: { state: { loginState } } } = vm
      if (loginState === 'ok') {
        next()
      } else {
        next('/login')
      }
    })
  },
  mounted () {
    let arr = []
    arr.map(item => {
      item.flag = true
    })
    if (this.cartlist.length > 0) {
      return
    }
    // 将数据存放到状态管理当中
    this.$store.commit('changeCartList', {
      result: arr
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-nav-bar {
  background: #ff464e;
  .van-nav-bar__text,.van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
