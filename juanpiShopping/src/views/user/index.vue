<template>
  <div class="container">
    <div class="header">
      <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft"/>
      <div class="nolog">
        <span>注册</span>
        <span class="noIcon">|</span>
        <span>登录</span>
      </div>
      <!-- <div class="login">
      <van-image
        width="60"
        height="60"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="stat">
        <p>jp_23811d7b9</p>
        <p>我的账户</p>
      </div>
      </div>-->
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
        <van-cell title="我的优惠卷" value="" />
        <van-cell title="我的收藏" value="" />
        <van-cell title="我的拼团" value="" />
        <van-cell title="我的免单卷" value="0张" />
        <van-cell title="借钱" value="新用户免费领1000元" />
        <div class="separate"></div>
        <van-cell title="客服中心" value="" />
        <van-cell title="关于卷皮" value="" />
        <div class="separate"></div>
        <div class="inFooter">
          <span>返回首页</span>
          <span>客户端</span>
          <span>电脑端</span>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Image, Cell, CellGroup } from 'vant'

Vue.use(NavBar)
Vue.use(Image)
Vue.use(Cell).use(CellGroup)

export default {
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.header {
  .nolog {
    height: 1rem;
    color: #fff;
    background-color: orangered;
    padding-top: 0.4rem;
    span {
      margin-right: 0.4rem;
      text-align: center;
      margin-left: 0.5rem;
      font-size: 20px;
      .noIcon {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
  }
  // .login {
  //   height: 1rem;
  //   color: #fff;
  //   background-color: orangered;
  //   padding-top: 0.28rem;
  //   padding-left: 0.2rem;
  //   .stat {
  //     width: 1.2rem;
  //     float: right;
  //     margin-right: 1.4rem;
  //     p {
  //       margin-bottom: 0.02rem;
  //     }
  //   }
  // }
}
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
      margin-left: 0.59rem;
      text-align: center;
    }
  }
}
</style>
