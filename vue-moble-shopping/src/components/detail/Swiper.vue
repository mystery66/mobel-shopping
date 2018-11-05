<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="(item,index) in swiperImg" :key="index">
          <img v-lazy="item.path">
        </mt-swipe-item>
      </mt-swipe> 
      <div class="back" @click="$router.go(-1)">
        <i class="icon iconfont icon-back"></i>
      </div>  
  </div>
</template>

<script>
export default {
props:['swiperImg']
}
</script>

<style lang="stylus" scoped>
  .swiper
    width 100%
    height 
    position relative
    .mint-swipe
      width 100%
      height 18.75rem
      img 
        display block
        width 100%
        height 100%
  
    .back
      margin 7px 0 7px 10px
      width 1.5rem
      height 1.5rem
      position absolute
      top 0.5em
      left 0.8rem
      background-color rgba(0,0,0,0.4)
      border-radius 50%
      display -webkit-flex
      display flex
      align-items center
      justify-content center
      .iconfont
        font-size 1rem
        color #fff

</style>
