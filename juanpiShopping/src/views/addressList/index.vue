<template>
  <div class="container">
    <van-nav-bar
      title="我的地址列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { AddressList, NavBar, Toast } from 'vant'

Vue.use(AddressList)
Vue.use(NavBar)
Vue.use(Toast)
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '18233215547',
          address: '上海市宝山区同济之路'
        },
        {
          id: '2',
          name: '李四',
          tel: '15433428896',
          address: '上海市浦东新区航头路'
        }
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onAdd () {
      Toast('进入新增地址')
      this.$router.replace('/addressediting')
    },
    onEdit (item, index) {
      Toast('进入编辑地址')
    }
  }
}
</script>

<style lang="scss">
</style>
