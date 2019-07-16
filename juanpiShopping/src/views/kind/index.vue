<template>
  <div class="container">
    <div class="seachGoods" @click="seachGo">
      <!-- <input type="text" placeholder="搜索商品"/> -->
      <i class="iconfont icon-sousuo2"></i>
      <span>搜索商品</span>
      <!-- <van-search placeholder="搜索商品" v-model="value" /> -->
    </div>
    <div class="classify">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="女装"/>
        <van-sidebar-item title="男装"/>
        <van-sidebar-item title="母婴"/>
        <van-sidebar-item title="鞋子"/>
        <van-sidebar-item title="箱包"/>
        <van-sidebar-item title="居家百货"/>
        <van-sidebar-item title="家电数码"/>
        <van-sidebar-item title="内衣配饰"/>
        <van-sidebar-item title="美妆"/>
        <van-sidebar-item title="运动户外"/>
        <van-sidebar-item title="美食"/>
        <van-sidebar-item title="车品文娱"/>
         <van-sidebar-item title="通讯旅游"/>
          <van-sidebar-item title=""/>
      </van-sidebar>
      <!-- <div class="classifyLeft">
        <ul>
          <li>女装</li>
          <li>男装</li>
          <li>母婴</li>
          <li>鞋子</li>
          <li>箱包</li>
          <li>居家百货</li>
          <li>家电数码</li>
          <li>内衣配饰</li>
          <li>美妆</li>
          <li>运动户外</li>
          <li>美食</li>
          <li>车品文娱</li>
          <li>通讯旅游</li>
          <li></li>
        </ul>
      </div> -->
      <!-- <div class="wraper">
      </div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Sidebar, SidebarItem, Toast } from 'vant'

Vue.use(Icon)
Vue.use(Sidebar).use(SidebarItem)
Vue.use(Toast)
// Vue.use(SidebarItem)

export default {
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {
    seachGo () {
      // console.log('111')
      Toast('进入搜索')
      this.$router.replace('/search')
    }
  }
}
</script>

<style lang="scss">
.seachGoods {
  width: 3.2rem;
  height: 0.36rem;
  // background-color: red;
  margin-top: 0.12rem;
  margin-left: 0.26rem;
  border: 1px solid #ccc;
  border-radius: 0.16rem;
  color: #ccc;
  i {
    margin-top: 0.1rem;
    margin-left: 0.14rem;
    font-size: 21px;
  }
  span {
    font-size: 14px;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    padding-top: 0.1rem;
  }
}
.classify {
  overflow: scroll;
  margin-top: 0.18rem;
  .classifyLeft {
    width: 25%;
    float: left;
    background-color: #f9f9f9;
    // overflow: hidden;
    overflow: scroll;
    font-size: 14px;
    margin-top: 0.18rem;
    ul {
      text-align: center;
      overflow: scroll;
      li {
        height: 0.46rem;
        line-height: 0.46rem;
        border-bottom: 1px solid #ebebeb;
        cursor: pointer;
        position: relative;
        overflow: scroll;
      }
    }
  }
  van-sidebar {
    width: 25%;
    float: left;
    // background-color: #f9f9f9;
    // overflow: hidden;
    overflow: scroll;
    font-size: 14px;
    margin-top: 0.18rem;
    van-sidebar-item {
      height: 0.46rem;
      line-height: 0.46rem;
      cursor: pointer;
    }
  }
}
</style>
