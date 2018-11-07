<template>
  <div class="no-goods">
    <go-login v-if="show"></go-login>
    <div class="no-goods img">
      <img src="../../assets/cart.svg" alt="">
    </div>
    <div class="no-goods go-shopping">
      <p>购物车是空的</p>
      <router-link :to="{name: '分类页'}">
        去逛逛
      </router-link>
    </div>
   
  </div>
</template>

<script>
import GoLogin from '@/components/car/GoLogin'
export default {
  components: {
    GoLogin
  },
  computed: {
    
    show() {
      if(this.$store.state.username) {
        return false
      }  else {
        return true
      }
    }
  },
  mounted() {
    this.$store.commit('USER_NAME')
  }
}
</script>

<style lang="stylus" scoped>
  .no-goods
    text-align center
    .img
      text-align center
      background-color rgba(251,240,217,0.3)
      height 10rem
      line-height 10rem
    .go-shopping
      display -webkit-flex 
      display flex   
      justify-content space-between
      align-items center
      padding 0.6rem
      font-size 0.8rem
    a
      background-color #ffb300
      border-radius 0.2rem
      color #fff 
      padding 3px 6px 
      
</style>
