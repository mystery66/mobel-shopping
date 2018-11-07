<template>
  <div class="footer">
    <div class="selecte-all">
      <i class="icon iconfont icon-roundcheckfill-copy" v-if="hasSelect" @click="selectAll()"></i> 
      <i class="icon iconfont icon-round" @click="selectAll()" v-else></i>
     <span>全选</span>
    </div>
    <div class="right">
      <div class="total-money">
        合计:<span>￥{{allMoney}}</span>
        
      </div>
      <div class="total-num">
        <span class="num" @click="goPay">结算(<span>{{count}}</span>)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSelect: false,
      
    }
  },
  computed: {
    count() {
     let num =0;
     num = this.$store.getters.selectedList.length
     return num
    },

    allMoney() {
      let sum = 0;
      //全选价钱
      if(this.hasSelect) {
        this.$store.state.carList.forEach(item => {
          sum += parseInt(item.price)
        })   // 部分选择价钱
      } else if(this.$store.getters.selectedList) {
          this.$store.getters.selectedList.forEach(item => {
            sum += parseInt(item.price)
          }) 
       } 
       return sum
    }
   },
  methods: {
   selectAll() {
     //全选carList图标变为已选
      this.hasSelect = !this.hasSelect
      console.log(this.hasSelect)
      if(this.hasSelect) {
        this.$store.state.carList.forEach(item => {
        item.chooseBool = true
      })
      } else {
         this.$store.state.carList.forEach(item => {
        item.chooseBool = false
      })
       this.$store.commit('RESET_CARLIST')
      }
    },
  goPay () {

      // 如果有选择商品才能跳转
      if (this.$store.getters.selectedList.length) {
        // 保存+缓存选择的商品 ,在支付页能用到
        this.$store.dispatch('setSelectedList')
        this.$router.push({ name: '支付页' })

      } else {

        alert('你还没选择商品')

      }

    }  
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position fixed
  left 0
  bottom 0
  height 2.8rem
  width 100%
  z-index 1
  display -webkit-flex
  display flex
  justify-content space-between
  align-items center
  padding 0 0.6rem
  border-top 1px solid #f5f5f5
  background #ffffff
  .selecte-all
    height 100%
    display -webkit-flex
    display flex
    align-items center
    justify-content center
    .iconfont
      font-size 1.5rem
    .icon-roundcheckfill-copy
      color #fd5500  
    span 
      font-size 1rem
      margin-left 0.4rem
      letter-spacing 2px
  .right
    height 100%
    width 58%
    display flex    
    align-items center
    justify-content space-around
    .total-money
      font-size 0.9rem
      color #333
      
      span 
        font-size 0.9rem
        color #fd5500
    .total-num
      
      padding 5px 10px 
      .num
        margin-right 2px
        display block
        padding .4rem .5rem
        background #fd5500
        border-radius 0.87rem
        font-size 0.9rem
        color #fff
            
</style>
