<template>
    <div class="detail">
        <div class="goods">
            <img src="" alt="">
            <span>￥:{{ id }}</span>
            <p>描述:{{ title }}</p>
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
                <div class="bye">
                  <!-- <van-sku
                    v-model="show"
                    :sku="sku"
                    :goods="goods"
                    :goods-id="goodsId"
                    :quota="quota"
                    :quota-used="quotaUsed"
                    :hide-stock="sku.hide_stock"
                    :message-config="messageConfig"
                    @buy-clicked="onBuyClicked"
                    @add-cart="onAddCartClicked"
                  /> -->
                  <van-goods-action-button
                        type="warning"
                        text="购买"
                        @click="clickButton"
                  />
                </div>
                    <!-- <van-button type="primary" size="large">购买</van-button> -->
                <!-- <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="rightClickButton"
                /> -->
            </van-goods-action>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Button } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Sku)
Vue.use(Button)
export default {
  data () {
    return {
      title: '',
      id: '',
      show: false,
      goodsId: '',
      quota: 0,
      quotaUsed: 0,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
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
    clickButton () {

    },
    onBuyClicked () {

    },
    onAddCartClicked () {

    }
  },
  mounted () {
    const { $route: { params: { id } } } = this
    fetch('https://www.daxunxun.com/detail?id=' + id)
      .then(res => res.json()).then(data => {
        this.title = data[0].title
        this.id = data[0].id
      })
    const news = document.querySelector('.news')
    console.log(news)
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
