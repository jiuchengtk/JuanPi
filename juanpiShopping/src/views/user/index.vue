<template>
  <div class="container">
    <div class="header">
      <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft"/>
      <router-view></router-view>
    </div>
    <!-- <router-view></router-view> -->
    <div class="content">
      <van-cell-group>
        <van-cell title="我的订单" value="全部订单"/>
        <div class="info">
          <ul>
            <li>
              <p class="iconfont icon-fukuan2"></p>
              <p class="inIco">待付款</p>
            </li>
            <li>
              <p class="iconfont icon-daichengtuan"></p>
              <p class="inIco">待成团</p>
            </li>
            <li>
              <p class="iconfont icon-daishouhuo"></p>
              <p class="inIco">待收货</p>
            </li>
            <li>
              <p class="iconfont icon-tuikuan"></p>
              <p class="inIco">退款/售后</p>
            </li>
          </ul>
        </div>
        <div class="separate"></div>
        <van-cell title="我的优惠卷" value=""  @click="discount"/>
        <van-cell title="我的地址管理" value=""  @click="address"/>
        <van-cell title="我的收藏" value="" />
        <van-cell title="我的拼团" value="" />
        <van-cell title="我的免单卷" value="0张" />
        <van-cell title="借钱" value="新用户免费领1000元" />
        <div class="separate"></div>
        <van-cell title="客服中心" value="" />
        <van-cell title="关于卷皮" value="" />
        <div class="separate"></div>
        <div class="inFooter">
          <span @click="returnHome">返回首页</span>
          <span @click="returnHome">客户端</span>
          <span @click="returnHome">电脑端</span>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Image, Cell, CellGroup, Toast } from 'vant'
import * as types from '@/mutation-types'

Vue.use(NavBar)
Vue.use(Image)
Vue.use(Cell).use(CellGroup)
Vue.use(Toast)

export default {
  mounted () {
    if (localStorage.getItem('isLogin') === 'ok') {
      this.$router.push('/user/login')
    } else {
      this.$router.push('/user/nologin')
    }
  },
  // 组件内导航守卫,在进入user 之前判断是登录还是未登录的状态，显示不同的组件
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // const loginState = vm.$store.state.loginState
      const { $store: { state: { loginState } } } = vm
      if (to.name === 'user') {
        if (loginState === 'ok') {
          vm.$router.replace('/user/login')
        } else {
          vm.$router.replace('/user/nologin')
        }
      } else {
        next()
      }
    })
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    returnHome () {
      this.$router.replace('/home')
    },
    register () {
      Toast('欢迎注册')
    },
    login () {
      Toast('欢迎登录')
    },
    address () {
      Toast('进入我的地址')
      this.$router.replace('/addresslist')
    },
    discount () {
      Toast('进入我的优惠卷')
      this.$router.replace('/discountVolum')
    }
  },
  watch: {
    // 监听当前的路由
    $route (newVal, oldVal) {
      // const loginState = this.$store.state.loginState
      const { $store: { state: { loginState } } } = this
      if (newVal.name === 'user') {
        if (loginState === 'ok') {
          this.$route.replace('/user/login')
        } else {
          this.$route.replace('/user/nologin')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 0.08rem;
  overflow: scroll;
  .info {
    height: 0.8rem;
    border-bottom: 0.1rem #f1f1f1;
    ul {
      padding-top: 0.18rem;
      li {
        width: 18%;
        height: 0.6rem;
        float: left;
        margin-left: 0.2rem;
        margin-bottom: 0.1rem;
        // background-color: skyblue;
        color: #666;
        text-align: center;
        p {
          font-size: 24px;
        }
        .inIco {
          font-size: 12px;
        }
      }
    }
  }
  .separate {
    width: 100%;
    height: 0.1rem;
    background-color: #f2f2f2;
  }
  .inFooter {
    height: 0.4rem;
    border-bottom: 1px solid #ccc;
    padding-top: 0.12rem;
    color: #444;
    font-size: 12px;
    span {
      // display: inline-block;
      padding-top: 0.1rem;
      margin-top: 0.4rem;
      width: 25%;
      margin-left: 12%;
      margin-right: 10%;
      text-align: center;
    }
  }
}
</style>
