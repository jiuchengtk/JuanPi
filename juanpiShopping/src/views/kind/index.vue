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
        <van-sidebar-item title="女装" @click="f1"/>
        <van-sidebar-item title="男装" @click="f2"/>
        <van-sidebar-item title="母婴" @click="f3"/>
        <van-sidebar-item title="鞋子" @click="f4"/>
        <van-sidebar-item title="箱包" @click="f5"/>
        <van-sidebar-item title="居家百货" @click="f6"/>
        <van-sidebar-item title="家电数码" @click="f7"/>
        <van-sidebar-item title="内衣配饰" @click="f8"/>
        <van-sidebar-item title="美妆" @click="f9"/>
        <!-- <van-sidebar-item title="运动户外" @click="f2"/>
        <van-sidebar-item title="美食" @click="f2"/>
        <van-sidebar-item title="车品文娱" @click="f2"/>
        <van-sidebar-item title="通讯旅游" @click="f2"/>
        <van-sidebar-item title=""/> -->
      </van-sidebar>
      <div class="lei">
        <ul>
          <li v-for="(items, index) of prolist" :key='index'>
            <img :src="items.img" alt="">
            <p>{{ items.title }}</p>
          </li>
        </ul>
      </div>
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
      activeKey: 0,
      prolist: []
    }
  },
  methods: {
    seachGo () {
      // console.log('111')
      Toast('进入搜索')
      this.$router.replace('/search')
    },
    f1 () {
      console.log(this.activeKey)
    },
    f2 () {
      console.log(this.activeKey)
    },
    f3 () {

    },
    f4 () {

    },
    f5 () {

    },
    f6 () {

    },
    f7 () {

    },
    f8 () {

    },
    f9 () {

    }
  },
  mounted () {
    fetch('http://10.11.56.162:3000/api/kind/womenDress')
      .then(res => res.json()).then(data => {
        // data[0].womenDress
        this.prolist = data[0].womenDress
        console.log(data[0].womenDress)
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.seachGoods {
  // width: 3.2rem;
  // height: 0.36rem;
  // background-color: red;
  width: 82%;
  height: 0.36rem;
  margin-top: 0.12rem;
  // margin-left: 0.26rem;
  margin-left: 9%;
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
  @include flexbox();
  // .classifyLeft {
  //   width: 25%;
  //   float: left;
  //   background-color: #f9f9f9;
  //   // overflow: hidden;
  //   overflow: scroll;
  //   font-size: 14px;
  //   margin-top: 0.18rem;
  //   ul {
  //     text-align: center;
  //     overflow: scroll;
  //     li {
  //       height: 0.46rem;
  //       line-height: 0.46rem;
  //       border-bottom: 1px solid #ebebeb;
  //       cursor: pointer;
  //       position: relative;
  //       overflow: scroll;
  //     }
  //   }
  // }
  // van-sidebar {
  //   width: 23%;
  //   float: left;
  //   // background-color: #f9f9f9;
  //   // overflow: hidden;
  //   overflow: scroll;
  //   font-size: 14px;
  //   margin-top: 0.18rem;
  //   van-sidebar-item {
  //     height: 0.46rem;
  //     line-height: 0.46rem;
  //     cursor: pointer;
  //   }
  // }
  .lei{
    // float:right;
    // position:absolute;
    background:#f00;
    width:77%;
    height:5rem;;
    // height:0.46rem;
    // top:0.48rem;
    left:23%;
    ul{
      width:100%;
      height:auto;
      li{
        float:left;
        height:100px;
        background:#ccc;
        width:33.3%;
        // height:auto;
        img{
          display: block;
          width:80%;
          height:80px;
          // height:auto;
        }
        p{
          text-align: center;
        }
      }
    }
  }
}

</style>
