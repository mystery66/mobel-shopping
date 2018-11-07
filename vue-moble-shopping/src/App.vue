<template>
  <div id="app">
    
    <loading v-show="isLoading"/>
    
    <router-view></router-view>
    <!-- <tab-bar/> -->
  </div>
</template>

<script>
import Loading from '@/common/Loading'
import TabBar from '@/common/Tabbar'
export default {
  name: 'App',
  components: {
    Loading,
    TabBar
  },
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="stylus">
  @import './style/common.styl'
  #app
    background-color #f2f2f2
    width 100%
    height 100%
     
</style>
