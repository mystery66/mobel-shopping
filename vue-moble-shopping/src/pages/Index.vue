<template>
  <div class="index">
    <v-header/>
    <swiper :swiperImg ="swiperImg"/>
    <server/>
    <section-one :recommend='recommend'>—— 新品专区 ——</section-one>
    <section-two :list='list' :img="img"></section-two>
    <section-one :recommend='goodslist'>—— 精品推荐 ——</section-one>
    <base-line></base-line>
    <tab-bar/>
  </div>
</template>

<script>
import VHeader from '@/components/index/Header'
import TabBar from '@/common/Tabbar'
import BaseLine from '@/common/Baseline'
import Swiper from '@/components/index/Swiper'
import Server from '@/components/index/Server'
import SectionOne from '@/components/index/content/SectionOne'
import SectionTwo from '@/components/index/content/SectionTwo'
import { getSwiperImg, getRecommend, getList, getGoodsList, ERR_OK } from'@/api/data.js'
export default {
components: {
  VHeader,
  TabBar,
  BaseLine,
  Swiper,
  Server,
  SectionOne,
  SectionTwo,
  
},
data() {
  return {
    swiperImg: '',
    recommend: '',
    list: '',
    img: '',
    goodslist: ''
  }
  
},
created() {
   getSwiperImg().then(res => {
     if(res.status === ERR_OK) {
        this.swiperImg = res.data.data.swiper
        console.log(this.swiperImg);
      }
     }).catch(err => {
     console.log(err)
   }),
   getRecommend().then(res => {
     if(res.status === ERR_OK) {
       this.recommend = res.data.data.recommend
      }
   }) .catch(err => {
     console.log(err)
   }),
   getList().then(res => {
     if(res.status === ERR_OK) {
       this.list = res.data.data.list
       this.img = res.data.data.img
      }
   }) .catch(err => {
     console.log(err)
   })
    getGoodsList().then(res => {
     if(res.status === ERR_OK) {
       this.goodslist = res.data.data.goodslist
      //  console.log(this.goodslist)
      }
   }) .catch(err => {
     console.log(err)
   })
   
  }
}
</script>

<style lang="stylus" scoped>
.index
  background #f2f2f2
  margin-bottom 1rem
</style>
