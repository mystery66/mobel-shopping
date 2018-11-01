<template>
  <div class="header">
    <div class="header-item left">
      <router-link :to="{name: ''}" >
        <i class="icon iconfont icon-scan"></i>
        <p>扫一扫</p>
      </router-link> 
    </div>
    <div class="header-item middle">
      <router-link :to="{name: '搜索页'}" >
      <div class="search">
        <i class="icon iconfont icon-search"></i>
        <span>搜索</span>
      </div>
    </router-link>
    </div> 
    <div class="header-item right">
      <router-link :to="{name: ''}" >
      <i class="icon iconfont icon-qrcode"></i>
      <p>会员码</p>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../style/mixin.styl'
.header
  position fixed
  top 0
  left 0
  z-index 1
  width 100%
  height 2.8rem
  background: -webkit-linear-gradient(left, #ff8b00 , #fd5500)
  background: linear-gradient(left, #ff8b00 , #fd5500)
  display -webkit-flex
  display flex
  rl(space-around,center)
  .header-item
    text-align center
    .iconfont
      font-size 1.2rem
      color #fff
    p
      font-size 0.6rem 
      color #fff
  .middle
    width 70%  
    .search
      height 2rem 
      width 100% 
      border-radius 1.4rem
      background #fff
      display flex
      display -webkit-flex
      // align-items center
      rl(flex-start,center)
      .icon-search
        margin-left 0.8rem
        color #969696
      span 
        margin-left 0.5rem
        font-size 1rem
        letter-spacing 1px
        font-weight 500
        
        
</style>
