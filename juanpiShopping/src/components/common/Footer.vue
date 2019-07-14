<template>
    <footer class="footer">
      <ul>
        <router-link class="active" tag="li" to="/home">
          <span class="iconfont icon-home"></span>
          <p>首页</p>
        </router-link>
        <router-link tag="li" to="/kind">
          <span class="iconfont icon-fenlei1"></span>
          <p>分类</p>
        </router-link>
        <router-link tag="li" to="/caet">
          <span class="iconfont icon-icon7"></span>
          <p>购物车</p>
        </router-link>
        <router-link tag="li" to="/user">
          <span class="iconfont icon-gouwuche"></span>
          <p>我的卷皮</p>
        </router-link>
      </ul>
    </footer>
</template>
