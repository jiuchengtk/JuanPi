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
                <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="leftClickButton"
                />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="rightClickButton"
                />
            </van-goods-action>
        </div>
        <div class="mask"></div>
        <div class="news">
          <img src="" alt="">
          <div class="box">
            <p>￥:{{ id }}</p>
            <p>描述:{{ title }}</p>
          </div>
          <div class="style">
            <dl>
              <dt>颜色</dt>
              <dd>红色</dd>
              <dd>白色</dd>
              <dd>紫色</dd>
              <dd>黑色</dd>
            </dl>
            <dl>
              <dt>样式</dt>
              <dd>XL</dd>
              <dd>XXL</dd>
              <dd>XXXL</dd>
              <dd>XXXXL</dd>
              <dd>M</dd>
              <dd>L</dd>
            </dl>
            <div class="small">
              <p>购买数量：</p>
              <div>
                <span @click="reduce">-</span>
                <p ref='num'>1</p>
                <span @click="add">+</span>
              </div>
            </div>
          </div>
          <van-button type="danger" size="large" @click='sure'>确定</van-button>
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
      id: ''
    }
  },
  methods: {
    leftClick () {
      this.$router.push('/home')
    },
    rightClick () {
      this.$router.push('/cart')
    },
    leftClickButton () {

    },
    rightClickButton () {

    },
    sure () {

    },
    reduce () {

    },
    add () {

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
    // .footer{
    // }
    .mask{
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
      display: none;
    }
    .news{
      position:absolute;
      width: 100%;
      height: 70%;
      background: #fff;
      top: 30%;
      // top: 110%;
      @include flexbox();
      img{
        width:0.7rem;
        height:0.8rem;
        position:absolute;
        top: -0.3rem;
        left: 0.2rem;
        background:#f0f;
      }
      .box{
        position:absolute;
        left: 1rem;
      }
      .van-button{
        position:absolute;
        bottom: 0;
      }
      .style{
        overflow: hidden;
        width:90%;
        margin:1rem 5% 0;
      }
      dl{
        @include rect(100%,1rem);
        dt{
          display:block;
          margin-bottom:0.1rem;
        }
        dd{
          float:left;
          width:0.7rem;
          text-align: center;
          margin-right:0.1rem;
          margin-bottom:0.1rem;
          font: 12px/2 "";
          border:1px solid #000;
        }
      }
      .small{
        @include flexbox();
        justify-content:space-between;
        @include rect(100%,1rem);
        p{
          font:0.15rem/0.2rem "";
        }
        span{
          display:inline-block;
          height:0.2rem;
          width:0.2rem;
          text-align: center;
          background:#f7f7f7;
          color:red;
        }
        div{
          p,span{
            float:left;
          }
          p{
            margin-left:10px;
            margin-right:10px;
          }
        }
      }
    }
}
</style>
