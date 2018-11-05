<template>
  <div class="sectiontwo">
    <div class="recommend">
      <i class="icon iconfont icon-huoHOT"></i>
      <span>爆款推荐</span>
    </div>
    <div class="sectiontwo-list">
      <ul>
        <li v-for="(list,index) in list" :key="index">
          <router-link :to="{name:'详情页',query:{id:list.id}}">
            <img v-lazy="list.img" >
             <h2 class="section2-list-title ac">
              {{list.name}}
              </h2>
              <p class="section2-list-intro">
                {{list.info}}
              </p>
              <p class="section2-list-price">
                {{list.price}}
              </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="section2-img">
      <router-link class="section2-banner" :to="{name:'详情页',query:{id:img.id}}">
        <img v-lazy="img.path">
      </router-link>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['list','img']
}
</script>

<style lang="stylus" scoped>
.sectiontwo
  background #fff
  margin-top 0.5rem 
  margin-bottom 0.5rem
  width 100%
  .recommend
    padding 0.6rem
  .iconfont
    color #ef820a
    font-size 1.3rem  
  span 
    color #303030
    font-size 1rem  
    font-weight bold
  .sectiontwo-list
    overflow-x auto
    width 100% 
    -webkit-overflow-scrolling touch
    ul
      display -webkit-flex
      display flex
      padding 0 0.6rem 0.8rem 0.6rem
      width 240%
      li
        margin-right 0.7rem
        width 5rem
        img 
          width 5rem
          height 5rem
        h2
          font-size 0.7rem 
          color #303030 
          font-weight bold
          text-align center
          padding 0.25rem 0 0.25rem 0
        p
          overflow hidden
          white-space nowrap
          text-overflow ellipsis 
        .section2-list-intro
          font-size 0.4rem
        .section2-list-price
          margin-top 0.25rem
          font-size 0.8rem 
          color #ff4d00
.section2-img 
  margin 0 0.6rem
  padding-bottom 0.8rem       
  .section2-banner
    img 
      height 4.5rem
      width 99% 
      border-radius 0.5rem      
</style>
