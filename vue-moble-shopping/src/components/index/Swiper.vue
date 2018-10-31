<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in swiperImg" :key="index">
      <router-link :to="{name: '详情页'}">
        <img :src="item.img" alt="">
      </router-link>
    </mt-swipe-item>
   
  </mt-swipe>
</template>

<script>
export default {
props: ['swiperImg']
  
  
}
</script>

<style lang="stylus" scoped>
.mint-swipe 
  margin-top 2.8rem
  width 100%
  height 210px
  img 
    width 100%
    height 100%
    

</style>
