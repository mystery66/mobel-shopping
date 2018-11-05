<template>
  <div class="choose">
    <div class="choose-view">
      <span class="symbol">￥</span>
      <span>{{info.price}}</span>
      <h1 class="choose-view-title">
        {{info.title}}
        <span></span>
      </h1>
    </div>
    <div class="choose-model">
       <p>颜色及内存选择</p>
      <div class="color-choose">
        <span  v-for="(item,index) in info.color" :key="index" 
          :class="{active:colSelected == index}"
          @click="colorSelect(index)">{{item.color}}</span>
      </div>
      <div class="size-choose">
        <span v-for="(item,index) in info.size" :key="index" 
          :class="{active: sizeSelected == index}" 
          @click="sizeSelect(index)">{{item.size}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props:['info'],
  computed : mapState({
    colSelected: state => state.colSelected,
    sizeSelected: state => state.sizeSelected
  }),
  methods: {
    colorSelect(index) {
      console.log(1)
      this.$store.commit('CHANGE_COL_SELECTED', index)
    },
    sizeSelect(index) {
      console.log(2)
      this.$store.commit('CHANGE_SIZE_SELECTED', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .choose-view
    padding 0.6rem
    background #ffffff
    .symbol
      font-size 1rem
      font-weight normal
    h1 
      font-size 0.9rem
      color #333333
      line-height 0.9rem
    span 
      color #ff4d00
      font-size 1.3rem  
      font-weight 500
  .choose-model
    margin-top 0.5rem
    background #ffffff
    padding 0.6rem
    font-size 0.8rem
    .color-choose
      padding-top 1rem
      display -webkit-flex
      display flex
      margin-bottom 0.8rem
    span 
      font-size 0.6rem
      display inline-block
      padding 6px 10px 
      border 1px solid #6f6f6f
      margin-right 1rem
    .active
      color #ffaa00  
      border-color #ffaa00
       
        
</style>
