<template>
    <div class="list">
        <ul class="first-ul">
            <div class="h4">
                <h4 @click="change1">精选单品</h4>
                <h4 @click="change2">精选专场</h4>
            </div>
            <li class="first-li">
                <ul class="second-ul" v-show="display1">
                    <router-link :to="{ name: 'details', params: { id:items.goods_id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.pic_url" alt="">
                        <p>{{ items.title }}</p>
                        <span>￥{{ items.cprice }}</span>
                        <span class="te">{{ items.leftText }}</span>
                    </router-link>
                </ul>
            </li>
            <li class="first-li">
                <ul class="second-ul" v-show="display2">
                    <router-link :to="{ name: 'details', params: { id:items.goods_id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.pic_url" alt="">
                        <p>{{ items.title }}</p>
                        <span>￥{{ items.cprice }}</span>
                        <span class="te">{{ items.leftText }}</span>
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
                    width:50%;
                    float:left;
                    img{
                        display:block;
                        width:100%;
                        height:2rem;
                        background:#f4f4f4;
                    }
                    span{
                        color:#3b3b3b;
                        margin-left:0.1rem;
                        font-size:0.12rem;
                    }
                    p{
                        color:#ff464e;
                        margin-left:0.1rem;
                        font-size:0.15rem;
                        margin-top:2px;
                    }
                    .te{
                        color:#bbb;
                        margin-left:0.5rem;
                        font-size:0.1rem;
                    }
                }
            }
        }
    }
}
</style>
