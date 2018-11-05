<template>
  <div class="wrap">
    <v-header>
      <div class="title">商品分类</div>
    </v-header>
    <div class="view">
      <side-nav :items="items"></side-nav>
      <router-view :categoryList="categoryList"></router-view>
    </div>
  </div>
</template>

<script>
import VHeader from '@/common/Header'
import SideNav from '@/components/category/SideNav'
import { getCategoryList } from '@/api/data.js'
export default {
components: {
  VHeader,
  SideNav,
  
},
data() {
    return {
      items: ['iphone','小米','vivo','oppo','华为','荣耀','三星','魅族'],
      categoryList: ''
    }
  },
  created() {
    getCategoryList().then(res =>{
      this.categoryList = res.data.data.categorylist
      console.log(this.categoryList)
    })
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  width 100%
  height 100%
  display -webkit-box
  display flex
  -webkit-box-orient vertical
  -webkit-box-direction norma;
  flex-flow column nowrap
  .title
    display inline-block
    letter-spacing 0.25rem
    font-weight 500
    font-size 1.1rem
    width 70%
    text-align center
    color #ffffff
   .view 
     display flex
     display -webkit-flex
    //  padding 2rem
</style>
