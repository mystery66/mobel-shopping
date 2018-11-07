<template>
  <div class="detail">

    <swiper :swiperImg="swiperImg" />
    <choose :info="info"/>
    <v-content :contentImg="contentImg"/>
    <base-line></base-line>
    <v-footer :name="name" :info="info"  :cover="cover"></v-footer>
  </div>
</template>

<script>
import Swiper from '@/components/detail/Swiper'
import Choose from '@/components/detail/Choose'
import VContent from '@/components/detail/Content'
import VFooter from '@/components/detail/Footer'
import BaseLine from '@/common/Baseline'
import { getDetailList } from '@/api/data.js'
export default {
  components: {
    Swiper,
    Choose,
    VFooter,
    BaseLine,
    VContent
  },
  data() {
    return{
      detailList: '',
      swiperImg: '',
      info: '',
      contentImg: '',
      name: '',
      cover: ''
    }
  },
  created() {
    let id = this.$route.query.id;
    getDetailList().then(res => {
      const list = res.data.data.detailList
      this.detailList = list.filter(item => item.id === id)
      this.swiperImg = this.detailList[0].img
      this.info = this.detailList[0].info
      this.name = this.detailList[0].info.title
      this.contentImg = this.info.contentImg
      this.cover = this.swiperImg[0]

      console.log(this.contentImg);
    })
  }
}
</script>

<style lang="stylus" scoped>
.detail 
  width 100%
  height 100%
</style>
