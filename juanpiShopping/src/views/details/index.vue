<template>
    <div class="detail">
        <div class="goods">
            <img :src="pic_url" alt="">
            <van-action-sheet
              v-model="show2"
              :actions="actions2"
              @select="onSelect"
            />
            <van-action-sheet
              v-model="show3"
              :actions="actions"
              @select="onSelect"
            />
            <div class="first">
              <span class="red">￥{{ oprice }}</span>
              <span class="old">￥{{ cprice }}</span>
              <span class="bao">{{ time_left }}</span>
              <span class="right">{{ rightText }}</span>
              <p>{{ title_long }}</p>
            </div>
            <div class="second">
              <div class="top">
                <span class="man">满件折</span>
                <span class="zhe">满一件八折，满两件七折</span>
                <span class="iconfont icon-sandian" @click="dian1"></span>
              </div>
              <div class="buttom">
                <span>24小时发货</span>
                <span>七天包退</span>
                <span>售后补偿</span>
                <span class="iconfont icon-sandian" @click="dian2"></span>
              </div>
            </div>
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
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Button, Toast, ActionSheet } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Sku)
Vue.use(Button)
Vue.use(Toast)
Vue.use(ActionSheet)
export default {
  data () {
    return {
      title: '',
      id: '',
      show: false,
      goodsId: '',
      show3: false,
      actions2: [
        { name: '满一件八折，满两家七折' }
      ],
      show2: false,
      actions: [
        { name: '24小时发货' },
        { name: '七天 包退' },
        { name: '收获补贴', subname: '商品存在问题时，卷皮将提供价值10元的退货运费补贴。' }
      ],
      title_long: '',
      time_left: '',
      oprice: '',
      cprice: '',
      pic_url: '',
      leftText: '',
      rightText: '',
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
    },
    onSelect () {

    },
    dian1 () {
      this.show2 = true
    },
    dian2 () {
      this.show3 = true
    }
  },
  mounted () {
    const { $route: { params: { id } } } = this
    // console.log(id)
    fetch('http://10.11.56.162:3000/api/singleProduct/details?id=' + id)
      .then(res => res.json()).then(data => {
        // console.log(data[0])
        this.title = data[0].title
        this.id = data[0].id
        this.title_long = data[0].title_long
        this.oprice = data[0].oprice
        this.cprice = data[0].cprice
        this.pic_url = data[0].pic_url
        this.leftText = data[0].leftText
        this.rightText = data[0].rightText
        this.goods.title = data[0].title
        this.time_left = data[0].time_left
        this.sku.price = data[0].oprice
        this.sku.list[0].price = data[0].oprice * 100
        this.sku.list[1].price = data[0].oprice * 100
        // console.log(data[0].title_long)
      })
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
html,body,#app,.detail{width:100%;height:100%}
.detail{
  background:#f4f4f4;
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
        .first{
          background:#fff;
          .red{
            color:#f00;
            margin-left: 0.1rem;
            font-size: 0.2rem;
          }
          .old{
            color: #bbbbbb;
            margin-right: 0.1rem;
            text-decoration: line-through;
          }
          .bao{
            color:#fff;
            background:#f00;
            font-size:0.1rem;
          }
          .right{
            margin-left:1.5rem;
            color:#999;
          }
          p{
            margin: 0.05rem 0.1rem;
          }
        }
        .second{
          padding:00.1rem;
          background:#fff;
          .top{
            border-bottom: 1px solid rgb(238, 235, 235);
            overflow: hidden;
            .man{
              background:#f00;
              color:#fff;
              font-size:0.12rem;
              font:0.12rem;
              margin-top:0.08rem;
              float: left;
            }
            .zhe{
              color:#333;
              margin-left:0.1rem;
              font-size:0.12rem;
              font:0.12rem/3 "";
              float: left;
            }
            .iconfont{
              display:block;
              width:0.3rem;
              height:0.3rem;
              background:rgb(236, 233, 233);
              float: right;
            }
          }
          .buttom{
            overflow: hidden;
            span{
              margin-left:0.1rem;
              font:0.15rem/2 "";
              color:#666;
              font:0.12rem/3 "";
              float: left;
            }
            .iconfont{
              display:block;
              width:0.3rem;
              height:0.3rem;
              background:rgb(236, 233, 233);
              float: right;
            }
          }
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
