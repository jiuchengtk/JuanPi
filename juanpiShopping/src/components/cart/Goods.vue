<template>
    <div class="goods">
        <ul>
            <li>
                <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
            </li>
            <li>
                <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
            </li>
        </ul>
        <div class="last">
            <van-checkbox v-model="checked" checked-color="red">全选</van-checkbox>
            <div class="money">
                <p>合计:</p>
                <span>￥990</span>
            </div>
            <a class="pay" src="">去结算</a>
        </div>
    </div>
</template>
<script>
import { RadioGroup, Radio, Checkbox, CheckboxGroup } from 'vant'
import Vue from 'vue'
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Checkbox).use(CheckboxGroup)
export default {
  data () {
    return {
      radio: '1',
      checked: false
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.van-icon{
    margin-left:0.1rem;
    // justify-content: center;
    align-items: center;
}
.goods{
    background:#f4f4f4;
    @include flex();
    @include rect(100%,auto);
    ul{
        li{
            @include flexbox();
            @include rect(100%,1rem);
            margin: 5px 0;
            background:#fff;
        }
    }
    .last{
        position:fixed;
        bottom:0.5rem;
        background:#fff;
        @include flexbox();
        @include flex();
        @include rect(100%,0.5rem);
        .van-icon{
            margin-left:0.1rem;
            align-items: center;
        }
        .money{
            @include flex();
            p{
                font:0.15rem/0.25rem "";
                text-align :right;
                margin-right:10px;
            }
            span{
                display: block;
                font:0.1rem/0.25rem;
                color:red;
                text-align :right;
                margin-right:10px;
            }
        }
        .pay{
            @include rect(1rem,100%);
            display: block;
            color:#fff;
            background:red;
            text-align:center;
            font:0.2rem/0.5rem "";
        }
    }
}
</style>
