<template>
  <div class="sectionone">
    <div class="sectionone-tilte"><slot>Title</slot></div>
    <ul class="sectionone-list" >
      <li v-for="(item,index) in recommend" :key="index">
        <router-link :to="{name:'详情页'}">
        <div class="sectionone-goods">
            <img  class="cover" v-lazy="item.img">
            <span class="description">{{item.description}}</span>
            <span class="price">{{item.price}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <router-link :to="{name:'详情页'}" class="sectionnoe-banner">
      <img  alt="111">
    </router-link> -->
  </div>
</template>

<script>
export default {
  props: ['recommend']
   
      
  
}
</script>

<style lang="stylus" scoped>
.sectionone
  background #ffffff
  margin-top 0.5rem
  border-radius 1rem
  z-index 9
  // box-shadow: 0.4rem 0.4rem 0.2rem #888888;
  
 .sectionone-tilte
    text-align center
    font-size 1rem
    font-weight bold
    padding 0.5rem
    -webkit-border-bottom 1px solid #e6e6e6
    border-bottom 1px solid #e6e6e6
    color #303030
  
  .sectionone-list
    display: -webkit-flex
    display flex
    flex-wrap wrap
    justify-content space-around
    padding 0.6rem 
    // border-bottom 1px solid #e6e6e6
    li
      width 50%
      --webkit-box-sizing border-box
      box-sizing border-box
      padding 0 0.25rem 0.5rem 0.25rem
      
     .cover
      width 100%
      height 7.5rem
    span
      padding 5%
    .description
      display block
      width 90%
      font-size 0.8rem 
      color #303030
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    .price 
      color #ff4d00
      font-size 0.9rem
        

    
    



</style>
