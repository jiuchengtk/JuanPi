<template>
  <div class="nolog">
    <router-link to="/register"><span>注册</span></router-link>
    <span class="noIcon">|</span>
    <router-link to="/login"><span>登录</span></router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nolog {
    // width: 1rem;
    height: 1rem;
    color: #fff;
    background-color: #ff464e;
    padding-top: 0.4rem;
    // border-top-left-radius: 10%;
    // border-top-right-radius: 10%;
    // border-bottom-left-radius: 10%;
    // border-bottom-right-radius: 10%;
    span {
      // margin-right: 0.4rem;
      margin-right: 12%;
      text-align: center;
      // margin-left: 0.5rem;
      margin-left: 13%;
      font-size: 20px;
      .noIcon {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
  }
</style>
