<template>
  <div class="goods-car">
    <v-header>
      <div class="title">购物车</div>
    </v-header>
    <has-goods v-if="count"></has-goods>
    <no-goods v-else></no-goods>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/common/Header'
import HasGoods from '@/components/car/HasGoods'
import NoGoods from '@/components/car/NoGoods'
import VFooter from '@/components/car/Footer'
export default {
components: {
  VHeader,
  HasGoods,
  NoGoods,
  VFooter
},
computed: {
  count() {
    return this.$store.state.count
  }
},
mounted() {
  if (!this.$store.state.count) {
    this.$store.commit('RESET_COUNT')
  }
}
}
</script>

<style lang="stylus" scoped>
.goods-car
  width 100%
  height 100%
  background #fff
  .title
    display inline-block
    letter-spacing 0.25rem
    font-weight 500
    font-size 1.1rem
    width 70%
    text-align center
    color #ffffff 

</style>
