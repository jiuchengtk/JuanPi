<template>
  <div class="backTop" v-show="show" @click="backTop">
    <van-icon name="upgrade" size="34px"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  props: ['show'],
  methods: {
    backTop () {
      const content = document.querySelector('#content')
      content.scrollTop = 0
    }
  }
}
</script>

<style lang="scss">
</style>
