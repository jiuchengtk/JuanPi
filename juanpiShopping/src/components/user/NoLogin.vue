<template>
  <div class="nolog">
    <span>注册</span>
    <span class="noIcon">|</span>
    <span>登录</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nolog {
    height: 1rem;
    color: #fff;
    background-color: orangered;
    padding-top: 0.4rem;
    span {
      margin-right: 0.4rem;
      text-align: center;
      margin-left: 0.5rem;
      font-size: 20px;
      .noIcon {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
  }
</style>
