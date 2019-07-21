<template>
  <div class="container">
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { AddressEdit, NavBar, Toast, Area } from 'vant'

Vue.use(AddressEdit)
Vue.use(NavBar)
Vue.use(NavBar)
Vue.use(Area)
export default {
  data () {
    return {
      areaList: '',
      searchResult: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.replace('/addresslist')
    },
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style lang="scss">
</style>
