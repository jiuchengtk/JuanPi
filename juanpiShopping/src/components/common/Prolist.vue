<template>
    <div class="list">
        <ul class="first-ul">
            <div class="h4">
                <h4 @click="change1">精选单品</h4>
                <h4 @click="change2">精选专场</h4>
            </div>
            <li class="first-li">
                <ul class="second-ul" v-show="display1">
<<<<<<< HEAD
                    <router-link :to="{ name: 'details', params: { id:items.id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.images.small" alt="">
                        <span>{{ items.id }}</span>
                        <p>{{ items.title }}</p>
=======
                    <router-link :to="{ name: 'details', params: { id:items.goods_id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.pic_url" alt="">
                        <p>{{ items.title }}</p>
                        <span>￥{{ items.cprice }}</span>
                        <span class="opr">￥{{ items.oprice }}</span>
                        <span class="te">{{ items.leftText }}</span>
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
                    </router-link>
                </ul>
            </li>
            <li class="first-li">
                <ul class="second-ul" v-show="display2">
<<<<<<< HEAD
                    <router-link to="" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.images.small" alt="">
                        <span>{{ items.title }}</span>
                        <p>{{ items.id }}</p>
=======
                    <router-link :to="{ name: 'details', params: { id:items.goods_id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.pic_url" alt="">
                        <p>{{ items.title }}</p>
                        <span>￥{{ items.cprice }}</span>
                        <span class="opr">￥{{ items.oprice }}</span>
                        <span class="te">{{ items.leftText }}</span>
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
                    </router-link>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    prolist: Array
  },
  data () {
    return {
      display1: true,
      display2: false
    }
  },
  methods: {
    change1 () {
      this.display1 = true
      this.display2 = false
    },
    change2 () {
      this.display1 = false
      this.display2 = true
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.list{
    background:#f4f4f4;
    .first-ul{
        @include flexbox();
        @include flex-direction(column);
        width:100%;
        .h4{
            @include rect(auto,100%);
            h4{
                font-size:14px;
                float: left;
                @include margin(0.05rem);
            }
        }
        .first-li{
            width:100%;
            .second-ul{
                width:100%;
                li{
                    width:46%;
                    float:left;
                    margin-right: 2%;
                    margin-left: 2%;
                    margin-top: 0.1rem;
                    img{
                        display:block;
                        width:100%;
<<<<<<< HEAD
                        height:1rem;
                        background:#f4f4f8;
=======
                        height:2rem;
                        background:#f4f4f4;
>>>>>>> 5ddad44214dabc903988d968d15da98f829bbd3d
                    }
                    span{
                        // color:#3b3b3b;
                        color: #ff464e;
                        margin-left:0.1rem;
                        font-size:0.12rem;
                    }
                    p{
                        // color:#ff464e;
                        color: #3b3b3b;
                        margin-left:0.1rem;
                        font-size:0.11rem;
                        margin-top:2px;
                    }
                    .te{
                        color:#bbb;
                        margin-left:0.09rem;
                        font-size:0.1rem;
                    }
                    .opr {
                        color: #ccc;
                        font-size: 0.08rem;
                        text-decoration: line-through;
                        margin-left: 0.03rem;
                    }
                }
            }
        }
    }
}
</style>
