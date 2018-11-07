<template>
  <div class="go-login">
    <router-link :to="{name: '登录页'}" class="login">
      <span>登录后享受更多优惠</span>
      <span>去登录</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .go-login
    background #fff
    padding 0.3rem 0.6rem
    .login
      display -webkit-flex
      display flex
      justify-content space-between
      font-size 0.8rem
      color #333
      span
        letter-spacing 1px
        &:last-of-type
          color rgba(0,0,0,.6)
          position relative 
          padding-right 0.5rem
          &::after
            content ''
            position absolute
            top 46%
            right 0
            width 0.45rem
            height 0.45rem
            border-left 1px solid currentColor
            border-top 1px solid currentColor
            transform translate3d(0, -50%, 0) rotateZ(135deg)
            -webkit-transform translate3d(0, -50%, 0) rotateZ(135deg)
        
</style>
