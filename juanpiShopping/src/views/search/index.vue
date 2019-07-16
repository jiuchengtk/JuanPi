<template>
  <div class="container">
    <!-- <div class="search">
      <i class="iconfont icon-sousuo2"></i>
      <span>717卷皮清仓节抢先看</span>
    </div>
    <div class="cancel">取消</div>-->
    <form action="/">
      <van-search
        placeholder="717卷皮清仓节抢先看"
        show-action
        @cancel="onCancel"
      />
    </form>
    <van-divider />
    <div class="tag">
      <p>热搜</p>
      <van-tag round type="danger" size="medium">717卷皮清仓节抢先看</van-tag>
      <van-tag round type="danger" size="medium">潮鞋清仓19元起</van-tag>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Divider, Tag } from 'vant'

Vue.use(Search)
Vue.use(Divider)
Vue.use(Tag)
export default {
  methods: {
    onCancel () {
      // this.$router.replace('/kind')
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.tag {
  margin-top: 0.1rem;
  margin-left: 0.28rem;
  p {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 0.1rem;
  }
  van-tag {
    margin-right: 0.1rem;
  }
}
</style>
