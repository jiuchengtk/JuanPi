<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
<<<<<<< HEAD
    <router-view></router-view>
=======
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
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
  </div>
</template>

<script>
import Vue from 'vue'
<<<<<<< HEAD
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     const { $store: { state: { loginState } } } = vm
  //     if (loginState === 'ok') {
  //       next('/cart/goods')
  //     } else {
  //       next('/cart/nogoods')
  //     }
  //   })
  // },
=======
import { NavBar, Card } from 'vant'
Vue.use(NavBar)
Vue.use(Card)
export default {
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
<<<<<<< HEAD

    }
=======
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
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-nav-bar {
<<<<<<< HEAD
  background: #f00;
=======
  background: #ff464e;
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
  .van-nav-bar__text,.van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
