<template>
  <div class="loading">
    <p>正在努力加载中</p>
    <div class="spinner">
      <div class="bounce one"></div>
      <div class="bounce two"></div>
      <div class="bounce three"></div>
      
    </div> 
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">

.loading
  width 100%
  height 100%
  background #ffffff
  position fixed
  left 0
  top 0
  z-index 999
  display flex
  justify-content center
  align-items center

  .spinner 
    width 3rem
    height 3rem
    position relative
    display flex
    align-items center
    .bounce
      width 0.8rem
      height 0.8rem
      border-radius 50%
      background #facd2d
      opacity 0.6
      display inline-block
      --webkit-animation bouncing 2s infinite ease-in-out
      animation bouncing 2s infinite ease-in-out

    .two
      width 1rem
      height 1rem
      background green
      -weblit-animation-delay 0.5s
      animation-delay 0.5s 

    .three
      width 1.2rem
      height 1.2rem
      background blue
      -weblit-animation-delay 1s
      animation-delay 1s 
  p
    text-align center
    font-size 24px

 @-webkit-keyframes bouncing 
    0%, 100%
      --webkit-transform scale(0)
    50%
      -webkit-transform scale(1.0)   

  @keyframes bouncing 
    0%, 100%
      transform scale(0)
    50%
      transform scale(1.0)     


</style>
