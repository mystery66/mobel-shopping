<template>
  <div class="side-nav">
    <ul>
      <li v-for="(item,index) in items" :key="index" @click="changeTabIndex(index)">
        <router-link :to="{path:'/category/' +item}" :class='{active:tabIndex == index}'> 
          {{item}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['items'],
  computed: {
    tabIndex() {
      return this.$store.state.tabIndex
    }
  },
  methods: {
    changeTabIndex(index) {
      this.$store.commit('CHANGE_TABINDEX',index)
    }
  }
}

</script>

<style lang="stylus" scoped>
.side-nav
  height 100%
  width 16%
  overflow-y auto
  -webkit-overflow-scrolling touch
  ul
    height 100%
    width 100% 
    li
      text-align center
      color #303030
      a
        display block
        padding 1rem 0
        font-size 0.8rem
      .active
        font-size 0.9rem
        position relative
        &::before
          width: 3px;
          height 1rem
          content: "";
          position: absolute;
          left: 0;
          top 50%
          vertical-align middle
          transform translateY(-50%)
          background-color #ff5500
</style>
