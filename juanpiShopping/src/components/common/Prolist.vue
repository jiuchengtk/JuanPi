<template>
    <div class="list">
        <ul class="first-ul">
            <div class="h4">
                <h4 @click="change1">精选专场</h4>
                <h4 @click="change2">精选单品</h4>
            </div>
            <li class="first-li">
                <ul class="second-ul" v-show="display1">
                    <li>
                        <img src="" alt="">
                        <span>1-1</span>
                        <p>1-1</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>1-2</span>
                        <p>1-2</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>1-3</span>
                        <p>1-3</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>1-4</span>
                        <p>1-4</p>
                    </li>
                </ul>
            </li>
            <li class="first-li">
                <ul class="second-ul" v-show="display2">
                    <li>
                        <img src="" alt="">
                        <span>2-1</span>
                        <p>2-1</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>2-2</span>
                        <p>2-2</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>2-3</span>
                        <p>2-3</p>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>2-4</span>
                        <p>2-4</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
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
