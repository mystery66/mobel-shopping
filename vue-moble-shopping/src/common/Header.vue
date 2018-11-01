<template>
  <header class="header">
    <router-link class="icon-go" :to="{name: '首页'}" 
      v-if="$route.matched[0].path == '/category'">
      <i class="icon iconfont icon-back"></i>
    </router-link>
    <div class="icon-go" @cilck="$router.go(-1)" v-else>
      <i class="icon iconfont icon-back"></i>
    </div>
    <slot></slot>
  </header>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../style/mixin.styl'
  .header 
    background: -webkit-linear-gradient(left, #ff8b00 , #fd5500)
    background linear-gradient(left, #ff8b00, #fd5500)
    // text-align center
    // position relative
    height 2.8rem
    display flex
    display -webkit-flex
    align-items center
    .icon-go
      width 18%
      text-align center

    .iconfont
      font-size 1.5rem
      

      

  
    
      
</style>

