<template>
  <div id="app">
    <!-- <div class="container">
      <div class="search">搜索框</div>
      <div class="carousel">轮播图</div>
      <div class="content">
        <div class="icon">图标</div>
        <div class="data">内容区</div>
      </div>
    </div> -->
    <router-view></router-view>
    <router-view name="footer"></router-view>
    <!-- <footer class="footer">
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
    </footer> -->
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html,body,#app{
  @include rect(100%,100%);
}
#app{
  @include flexbox();
  @include flex-direction(column);
  .container{
    @include flexbox();
    @include flex-direction(column);
    @include flex();
    @include rect(100%,auto);
    .search{
      @include background-color(#c8c8c8);
    }
    .carousel{
      @include background-color(rgb(194, 56, 199));
    }
    .content{
      @include flexbox();
      @include flex-direction(column);
      @include flex();
      @include rect(100%,auto);
      .data{
        @include flexbox();
        @include flex-direction(column);
        @include flex();
        @include rect(100%,auto);
      }
    }
  }
  .footer{
    @include rect(100%,0.5rem);
    ul{
      @include rect(100%,100%);
      @include flexbox();
      li{
        @include flex();
        @include rect(auto,100%);
        @include flexbox();
        @include flex-direction(column);
        @include align-items();
        @include justify-content();
        span{
          @include font-size(0.2rem);
        }
        &.router-link-active{
          @include color(rgb(221, 40, 94));
        }
      }
    }
  }
}
</style>
