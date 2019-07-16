<template>
   <div class="login">
      <van-image
        width="60"
        height="60"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="stat">
        <p>jp_23811d7b9</p>
        <p>我的账户</p>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'vant'

Vue.use(Image)
export default {
}
</script>

<style lang="scss">
.login {
    height: 1rem;
    color: #fff;
    background-color: orangered;
    padding-top: 0.28rem;
    padding-left: 0.2rem;
    .stat {
      width: 1.2rem;
      float: right;
      margin-right: 1.4rem;
      p {
        margin-bottom: 0.02rem;
      }
    }
  }
</style>
