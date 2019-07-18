<template>
    <div class="nogoods">
        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt="">
        <p>看到好看的就带回家吧!</p>
        <a href="">今日推荐</a>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.container{
    background:#f4f4f8;
}
.nogoods{
    // background:#f4f4f8;
    color:#666;
    img{
        margin:0 auto;
        width:2rem;
        display: block;
    }
    p{
        text-align: center;
        font:14px/4 "";
    }
    a{
        color:red;
        margin:0 auto;
        text-align: center;
        width:1rem;
        font:14px/40px "";
        border:1px solid red;
        display:block;
    }
}
</style>
