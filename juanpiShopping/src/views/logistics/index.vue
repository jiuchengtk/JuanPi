<template>
  <div class="container">
    <van-nav-bar
      title="我的物流"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>正在派件中</h3>
        <p>2019-07-22 16:10</p>
      </van-step>
      <van-step>
        <h3>上海</h3>
        <p>2019-07-22 08:40</p>
      </van-step>
      <van-step>
        <h3>浙江义乌</h3>
        <p>2019-07-21 18:30</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2019-07-20 14:20</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Step, Steps } from 'vant'

Vue.use(NavBar)
Vue.use(Step).use(Steps)

export default {
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
</style>
