<template>
  <div class="has-goods">
    <ul>
      <li v-for="(item,index) in carList" :key="index">
        <div class="goods-left" @click="toggle(index)">
          <i class="icon iconfont icon-roundcheckfill-copy" v-if="item.chooseBool"></i>
          <i class="icon iconfont icon-round" v-else></i>
        </div>
        <div class="goods-middle">
          <img :src="item.imgpath.path" alt="">
        </div>
        <div class="goods-right">
          <p>{{item.title}}</p>
          <p>{{item.color}} - {{item.size}}</p>
          <p>￥{{item.price}}</p>
          <div class="goods-delete"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      hasSelect: false
    }
  },
  computed: {
    carList() {
      return this.$store.state.carList
    }
  },
  mounted() {
    //刷新会使得state.carList为空 重置将localstorage 的数据赋值给carList
    if(this.$store.state.carList == '') {
      this.$store.commit('RESET_CARLIST')
    }
  },
  methods: {
    toggle(index) {
      this.carList[index].chooseBool = !this.carList[index].chooseBool
      this.$nextTick(() => {
        console.log(111)
        this.$store.dispatch('cutCarList',this.carList)
    })
    }
    
  }
}
</script>

<style lang="stylus" scoped>
.has-goods
  width 100%
  ul
    width 100%
    li
      display -webkit-flex
      display flex
      justify-content space-around
      align-items center
      padding 0.6rem
      height 5rem
      border-bottom 1px solid #f5f5f5
      .goods-left
        flex 2
        -webkit-box-flex 2
        .iconfont
          font-size 1.5rem
        .icon-roundcheckfill-copy
          color #fd5500  
      .goods-middle
        height 4.8rem
        flex 4
        -webkit-flex-box 3
        img 
          width 100%
          height 100%
      .goods-right
        flex 7
        -webkit-box-flex 7 
        margin-left 1rem  
        p 
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
          font-size 0.85rem 
          &:last-of-type
            color #ff5d00
            font-size 1rem
          &:nth-of-type(2)
            color rgba(168, 168, 168,1)
              
</style>
