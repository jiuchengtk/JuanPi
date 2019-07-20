<template>
    <div class="detail">
        <div class="goods">
            <img src="" alt="">
            <span>￥:{{ id }}</span>
            <p>描述:{{ title }}</p>
            <!-- <p>{{ title }}</p> -->
        </div>
        <div class="footer">
            <van-goods-action>
                <van-goods-action-icon
                    icon="wap-home"
                    text="首页"
                    @click="leftClick"
                />
                <van-goods-action-icon
                    icon="cart-o"
                    text="购物车"
                    @click="rightClick"
                />
                <van-button type="primary" size="large" @click="buy">购买</van-button>
                <van-sku
                  v-model="show"
                  :sku="sku"
                  :goods="goods"
                  :goods-id="goodsId"
                  :quota="quota"
                  :quota-used="quotaUsed"
                  :close-on-click-overlay="closeOnClickOverlay"
                  @buy-clicked="onBuyClicked"
                  @add-cart="onAddCartClicked"
                />
            </van-goods-action>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Button, Toast } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Sku)
Vue.use(Button)
Vue.use(Toast)
export default {
  data () {
    return {
      title: '',
      id: '',
      show: false,
      goodsId: '',
      quota: 0,
      quotaUsed: 0,
      closeOnClickOverlay: true,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
          // {
          //   k: '样式', // skuKeyName：规格类目名称
          //   v: [
          //     {
          //       id: '1000', // skuValueId：规格值 id
          //       name: 'xl' // skuValueName：规格值名称
          //     },
          //     {
          //       id: '1111',
          //       name: 'xxl'
          //     },
          //     {
          //       id: '1222',
          //       name: 'xxxl'
          //     }
          //   ]
          // k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          // },
          // {
          //   k: 'bb', // skuKeyName：规格类目名称
          //   v: [
          //     {
          //       id: '1000', // skuValueId：规格值 id
          //       name: 'xl' // skuValueName：规格值名称
          //     },
          //     {
          //       id: '1111',
          //       name: 'xxl'
          //     },
          //     {
          //       id: '1222',
          //       name: 'xxxl'
          //     }
          //   ]
          // k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          // }
        ],
        list: [
          {
            // id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            // id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '110.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false // 是否无规格商品
      },
      goods: {
        // 商品标题
        title: '商品title' // 商品名称
        // 默认商品 sku 缩略图
        // picture: 'https://img.yzcdn.cn/1.jpg'
      }
    }
  },
  methods: {
    leftClick () {
      this.$router.push('/home')
    },
    rightClick () {
      this.$router.push('/cart')
    },
    onBuyClicked () {
      this.show = false
      console.log('onbuy')
    },
    onAddCartClicked () {
      Toast('加入购物车成功')
      this.show = false
      console.log('onadd')
    },
    buy () {
      if (this.show === false) {
        this.show = true
      }
    },
    close () {
      console.log('close')
    },
    on () {
      console.log('on')
    },
    click () {
      console.log('click')
    },
    overlay () {
      console.log('overlay')
    }
  },
  mounted () {
    const { $route: { params: { id } } } = this
    console.log(id)
    fetch('http://10.11.56.162:3000/api/singleProduct/details?id=' + id)
      .then(res => res.json()).then(data => {
        console.log(data[0])
        this.title = data[0].title
        this.id = data[0].id
        // console.log(this.goods.title)
        this.goods.title = data[0].title
        // console.log(data)
      })
      // fetch('http://10.11.56.162:3000/api/singleProduct?id=' + 128214551)
      // .then(res => res.json()).then(data => {
      //   // console.log(data[0])
      //   // this.title = data[0].title
      //   // this.id = data[0].id
      //   // // console.log(this.goods.title)
      //   // this.goods.title = data[0].title
      //   console.log(data)
      // })
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
html,body,#app,.detail{width:100%;height:100%}
.detail{
    @include flexbox();
    // @include rect(100%,100%);
    @include flex-direction(column);
    @include overflow();
    .goods{
        @include flex();
        width: 100%;
        img{
            @include rect(100%,auto);
        }
    }
  .van-goods-action{
    @include flexbox();
    .bye{
      @include flex();
    }
  }
}
</style>
