<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <!-- <div class="info"></div> -->
      <van-cell-group>
        <van-cell title="跨店促销" value="" icon="hot-o" />
      </van-cell-group>
      <ul v-if="cartlist.length > 0 ">
        <li v-for="item of cartlist" :key="item.id">
          <!-- <img :src="item.img" alt="" class="cartimg">
          <span class="s1">{{ item.title }}</span>
          <span class="s2">{{ item.price }}</span>
          <button>-</button> {{ item.num }} <button>+</button>
          <button>删除</button> -->
          <van-card
            :num="item.num"
            tag="促销"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.img"
            :origin-price="item.total"
          >
          <div slot="tags">
            <van-tag plain type="danger">上新</van-tag>
            <van-tag plain type="danger">特惠</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">添加</van-button>
            <van-button size="mini">删除</van-button>
          </div>
         </van-card>
        </li>
      </ul>
      <div class="total">
        <p>
          <span>总数量：</span>
          <span>{{ totalNum }}</span>
        </p>
        <p>
          <span>总价：</span>
          <span> {{ totalPrice }}</span>
        </p>
      </div>
      <!-- <div>总数量</div>
      <div>总价</div> -->
      <!-- <van-cell-group>
        <van-cell title="总数量" value=""/>
        <van-cell title="总价" value="内容" />
      </van-cell-group> -->
    </div>
    <!-- <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      origin-price="10.00"
    >
    <div slot="tags">
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </div>
    <div slot="footer">
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </div>
    </van-card> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Card, Cell, CellGroup, Icon } from 'vant'
import { mapState } from 'vuex'
Vue.use(NavBar)
Vue.use(Card)
Vue.use(Cell).use(CellGroup)
Vue.use(Icon)
export default {
  computed: {
    ...mapState({
      cartlist (state) {
        return state.cartlist
      }
    }),
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // const loginState = vm.$store.state.loginState
      const { $store: { state: { loginState } } } = vm
      if (loginState === 'ok') {
        next()
      } else {
        next('/login')
      }
    })
  },
  mounted () {
    // 请求数据
    let arr = [
      {
        id: 1,
        title: '碎花吊带高腰连衣裙',
        price: 199,
        desc: 'TimeRoaD汤米诺时尚小清新碎花吊带高腰连衣裙2018夏新修身送腰带',
        num: 1,
        img: 'https://goods2.juancdn.com/goods/180906/2/4/5b9067d133b0893f684e4c78_800x800.jpg?imageMogr2/thumbnail/310x310!'
      },
      {
        id: 2,
        title: '潮流前线男装休闲裤',
        price: 123,
        desc: '潮流前线男装韩版夏季修身小脚九分休闲裤',
        num: 1,
        img: 'https://goods6.juancdn.com/tao/190623/a/1/5d0f2ad7b6f8ea2c595081fc_800x800.jpg?imageMogr2/thumbnail/310x310!'
      }
    ]
    arr.map(item => {
      item.flag = true
    })
    if (this.cartlist.length > 0) {
      return
    }
    // 将数据存放到状态管理当中
    this.$store.commit('changeCartList', {
      result: arr
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.van-nav-bar {
  background: #ff464e;
  margin-bottom: 6%;
  .van-nav-bar__text,.van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
.content {
  van-cell-group {
    icon {
      color: #ff464e;
    }
  }
  ul {
    margin-top: 0.3rem;
    li {
      width: 100%;
      // height: 0.6rem;
      img {
        width: 0.74rem;
        height: 0.8rem;
        margin-left: 4%;
        margin-bottom: 6%;
      }
    }
  }
  .total {
    margin-top: 0.8rem;
    p {
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
         &:nth-child(1) {
           margin-left: 0.22rem;
         }
         &:nth-child(2) {
            color: #ff464e;
            margin-right: 0.3rem;
            font-size: 0.2rem;
         }
      }
    }
  }
}
</style>
