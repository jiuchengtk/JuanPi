<template>
    <footer class="footer">
      <ul>
        <router-link class="active" tag="li" to="/home">
          <span class="iconfont icon-shouye2"></span>
          <p>首页</p>
        </router-link>
        <router-link tag="li" to="/kind">
          <span class="iconfont icon-fenlei1"></span>
          <p>分类</p>
        </router-link>
        <router-link tag="li" to="/cart">
          <span class="iconfont icon-gouwuche4"></span>
          <p>购物车</p>
        </router-link>
        <router-link tag="li" to="/user">
          <span class="iconfont icon-wode3"></span>
          <p>我的卷皮</p>
        </router-link>
      </ul>
    </footer>
</template>
