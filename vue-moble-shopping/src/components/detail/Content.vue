<template>
  <div class="content">
    <h3>商品图片</h3>
    <div class="img-wrap" v-for="(img,index) in contentImg" :key="index">
      <img :src="img.path" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:['contentImg']
}
</script>

<style lang="stylus" scoped>
.content
  background #ffffff
  width 100%
  margin-top 0.5rem
  
  h3
    font-weight 400
    height 1.6rem
    line-height 1.6rem
    position relative
    padding 6px 0 0 12px
    font-size 0.8rem
    color #666
    border-left 3px solid #FF0036
  img 
    width 100%

</style>
