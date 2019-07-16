<template>
    <div class="list">
        <ul class="first-ul">
            <div class="h4">
                <h4 @click="change1">精选专场</h4>
                <h4 @click="change2">精选单品</h4>
            </div>
            <li class="first-li">
                <ul class="second-ul" v-show="display1">
                    <router-link :to="{ name: 'details', params: { id:items.id } }" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.images.small" alt="">
                        <span>{{ items.id }}</span>
                        <p>{{ items.title }}</p>
                    </router-link>
                </ul>
            </li>
            <li class="first-li">
                <ul class="second-ul" v-show="display2">
                    <router-link to="" tag="li" v-for="(items, index) of prolist" :key="index">
                        <img :src="items.images.small" alt="">
                        <span>{{ items.title }}</span>
                        <p>{{ items.id }}</p>
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
                        height:1rem;
                        background:#00f;
                    }
                    span{
                        color:#0f0;
                    }
                    p{
                        color:#f00;
                    }
                }
            }
        }
    }
}
</style>
