<template>
  <div class="main">
    <h2 class="title">{{Lists.type}}</h2>
    <ul>
      <li v-for="(list,index) in Lists.list" :key="index">
        <router-link :to="{name: '详情页', query:{ id:list.id }}">
          <img :src="list.img" alt="">
          <span>{{list.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
props:['categoryList'],
computed: {
  Lists() {
    let tabIndex = this.$store.state.tabIndex
    return this.categoryList[tabIndex]
  }
  }
}
</script>

<style lang="stylus" scoped>
.main
  display inline-block
  width 84%
  background #f2f2f2
  h2
    font-size 1.2rem
    padding 0.5rem 1rem
    text-align center
  ul
    background #f2f2f2
    width 100%
    display flex
    flex-wrap wrap
    li
      background #f2f2f2
      width 33%
      text-align center
      img 
        width 75%
        height 65%
      span 
        display block
        margin 10% 0 
        font-size 0.8rem
</style>
