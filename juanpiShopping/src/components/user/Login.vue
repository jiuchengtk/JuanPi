<template>
   <div class="login">
      <van-image
        width="60"
        height="60"
        src="https://img2.woyaogexing.com/2019/06/30/f8c45182f992439a8529b3009aff9e79!400x400.jpeg"
      />
      <p>{{ account }}</p>
      <p>我的账户</p>
      <p @click="withdraw">退出</p>
  </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'vant'

Vue.use(Image)
export default {
  computed: {
    account () {
      return localStorage.getItem('username')
    }
  },
  methods: {
    withdraw () {
      localStorage.clear()
      this.$router.push('/user/nologin')
    }
  }
}
</script>

<style lang="scss">
.login {
    height: 1rem;
    color: #fff;
    background-color: #ff464e;
    .van-image {
      margin: 6% 8%;
    }
    p {
      margin-top: -26%;
      margin-left: 34%;
      &:nth-child(3) {
         margin-top: 5%;
         margin-left: 36%;
      }
      &:nth-child(4) {
        margin-top: -14%;
        margin-left: 82%;
        font-size: 17px;
      }
    }
  }
</style>
