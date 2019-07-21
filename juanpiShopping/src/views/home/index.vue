<template>
    <div class="container" id="content">
      <!-- <div class="content" id="content1"> -->
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <div class="search" @click="search">
          <van-search placeholder="卷皮搜索" />
        </div>
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <div class="carousel">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(items, index) of bannerlist" :key='index'>
              <img :src="items" alt="">
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="icon">
            <img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt="">
            <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt="">
            <img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt="">
            <img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt="">
        </div>
        <div class="gif">
          <a class="img">
            <img src="https://s2.juancdn.com/jas/190712/f/9/5d2820d133b0897c8d42e339_1080x330.gif" alt="">
          </a>
        </div>
        <div class="hehe">
            <a href=""  class="time-limited">
              <img src="https://s2.juancdn.com/jas/190715/6/3/5d2bcff433b0890ae55a3fb8_540x656.gif" alt="">
            </a>
            <a href="" class="clearance">
              <img src="https://goods4.juancdn.com/jas/190715/7/7/5d2bd04333b0890aef143b01_540x328.png?imageMogr2/quality/85!/format/png" alt="">
            </a>
            <a href="" class="free">
              <img src="https://goods6.juancdn.com/jas/190715/b/d/5d2bd066b6f8ea44eb25ff46_540x328.png?imageMogr2/quality/85!/format/png" alt="">
            </a>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <Prolist :prolist= "prolist"/>
        </van-list>
      <!-- </van-pull-refresh> -->
      <BackTop v-show="flag" />
      </div>
    <!-- </div> -->
</template>
<script>
import Prolist from '@/components/common/Prolist.vue'
import Vue from 'vue'
import BackTop from '@/components/BackTop'
import { Swipe, SwipeItem, Search, Toast, List, PullRefresh } from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Toast)
Vue.use(List)
Vue.use(PullRefresh)
export default {
  data () {
    return {
      bannerlist: [],
      prolist: [],
      loading: false,
      finished: false,
      page: 1,
      count: 0,
      isLoading: false,
      flag: false
    }
  },
  components: {
    Prolist,
    BackTop
  },
  methods: {
    search () {
      Toast('进入搜索')
      this.$router.replace('/search')
    },
    onLoad () {
      // console.log('加载数据')
      this.loading = true
      fetch('http://10.11.56.162:3000/api/singleProduct?conunt=8&start=' + this.page * 8)
        .then(res => res.json()).then(data => {
          // console.log(data)
          this.loading = false
          this.page++
          if (data.length === 0) {
            console.log('没有数据了')
            this.finished = true
          } else {
            this.prolist = [...this.prolist, ...data]
          }
        })
      this.loading = false
      this.finished = true
    },
    onRefresh () {
      this.isLoading = true
      fetch('http://10.11.56.162:3000/api/banner')
        .then(res => res.json()).then(data => {
          this.isLoading = false
          this.prolist = data
          this.page = 1
          this.finished = false
        })
    },
    scrollFn () {
      // console.log(event.target.scrollFn)
      if (event.target.scrollTop > 250) {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  mounted () {
    fetch('http://10.11.56.162:3000/api/banner')
      .then(res => res.json()).then(data => {
        // console.log(data)
        var arr = []
        data.map(items => {
          items = items.pic
          arr.push(items)
        })
        this.bannerlist = arr
      })
    fetch('http://10.11.56.162:3000/api/singleProduct')
      .then(res => res.json()).then(data => {
        // var arr2 = []
        // data.map(items => {
        //   arr2.unshift(items)
        // })
        // this.prolist2 = arr2
        this.prolist = data
      })
    // fetch('https://www.daxunxun.com/douban')
    //   .then(res => res.json()).then(data => {
    //     console.log(data)
    //     this.prolist = data
      // console.log(this.prolist[0].images)
      // })
    const content = document.querySelector('#content')
    content.addEventListener('scroll', this.scrollFn)
  },
  // 导航守卫
  beforeRouteLeave (to, from, next) {
    const content = document.querySelector('#content')
    content.removeEventListener('scroll', this.scrollFn)
    let position = content.scrollTop
    localStorage.setItem('position', position)
    next()
  },
  watch: {
    // 通过watch监听路由
    $route (newVal, oldVal) {
      if (newVal.name === 'home') {
        const content = document.querySelector('#content')
        content.scrollTop = localStorage.getItem('position')
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.container{
  @include flexbox();
  @include flex-direction(column);
  @include overflow;
  .search{
    .text{
      margin-left:0.1rem;
      font-size:10px;
      line-height: 0.3rem;
      border-radius:0.15rem;
    }
  }
  .backTop {
    position: fixed;
    bottom: 0.7rem;
    right: 18px;
    width: 34px;
    height: 34px;
    // background-color: #fff;
    border-radius: 50%;
  }
  .carousel{
    .van-swipe{
      .van-swipe__track{
        height: 1.5rem;
        @include rect(100%,100%);
        @include flexbox();
        width: 100%;
        .van-swipe-item{
          @include rect(100%,100%);
          img{
            @include rect(100%,100%);
          }
        }
      }
    }
    img{
      @include rect(100%,auto);
    }
  }
  .icon {
    margin-top: 3%;
    margin-bottom: 3%;
    img {
      @include rect(25%,auto);
    }
  }
  .gif{
    .img{
      display: block;
      @include rect(100%,100%);
      img{
        display: block;
        @include rect(100%,100%);
      }
    }
  }
  .hehe{
    .time-limited{
      float: left;
      display: block;
      @include rect(50%,auto);
      img{
        display: block;
        @include rect(100%,100%);
      }
    }
    .clearance{
      float: left;
      display: block;
      @include rect(50%,auto);
      img{
        display: block;
        @include rect(100%,auto);
      }
    }
    .free{
      float: left;
      display: block;
      @include rect(50%,auto);
      img{
        display: block;
        @include rect(100%,auto);
      }
    }
  }
}
</style>
