<template>
   <div class="car">
      <header class="header">
          <div class="header-icon">
              <i class="icon iconfont icon-my"></i>
          </div>
          <span>{{username}}</span>
      </header>
      <div class="main">
          <router-link class="my-indent" :to="{ name: ''}">
              <span class="my-indent-left">我的订单</span>
              <div class="my-indent-right">
                  <span>全部订单</span>
                  <i class="icon iconfont icon-right"></i>
              </div>
          </router-link>
        <section class="my-section pay">
              <router-link :to="{ name: ''}">
                 <i class="icon iconfont icon-pay"></i>
                  <p>代付款</p>
              </router-link>
              <router-link :to="{ name: ''}">
                 <i class="icon iconfont icon-deliver"></i>
                  <p>待收货</p>
              </router-link>
              <router-link :to="{ name: ''}">
                 <i class="icon iconfont icon-icon1460357660847"></i>
                  <p>退换修</p>
              </router-link>
            </section>
          <section class="my-vip">
            <router-link class="my-section ho" :to="{ name: ''}" >
              <div class="my-vip-top-div">
                <i class="icon iconfont icon-huiyuan"></i>
                <span>会员福利</span>
                 <i class="icon iconfont icon-right"></i>
              </div>
            </router-link>
            <router-link class="my-vip-bottom ho" :to="{ name: ''}">
              <div class="my-vip-top-div">
                 <i class="icon iconfont icon-youhui-copy"></i>
                 <span>我的优惠</span>
                 <i class="icon iconfont icon-right"></i>
              </div>
            </router-link>
          </section>
          <section class="my-vip">
              <router-link :to="{ name: ''}" class="my-settle-bottom">
                <div class="my-vip-top-div">
                  <i class="icon iconfont icon-settings"></i>
                  <span>设置</span>
                  <i class="icon iconfont icon-right"></i>
                </div>
              </router-link>
          </section>
        </div>
      <tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from '@/common/Tabbar'
export default {
components: {
  TabBar
},
computed: {
  username() {
    return this.$store.state.username
  }
},
mounted() {
  this.$store.commit('USER_NAME')
}
}
</script>

<style lang="stylus" scoped>
  .car 
    width 100%
   
    background-color #F8FCFF
    .header 
      width 100%
      height 6rem
      background -webkit-linear-gradient(left, #ff8b00 , #fd5500)
      background linear-gradient(left, #ff8b00 , #fd5500)
      background-size auto 100%
      display -webkit-box
      display flex
      -webkit-box-align center
      align-items center
      .header-icon 
        position relative
        // border 2px solid #ffffff
        margin-left 2rem
        -webkit-box-sizing border-box
        box-sizing border-box
        width 3rem
        height 3rem
        text-align center
        border-radius 50%
        .iconfont
          position absolute
          left 0
          top 0
          color #fff
          font-size 2.5rem
          border-radius 50%
          line-height 3rem
      span 
        font-size 1.2rem
        color #ffffff
.main
  padding 0.6rem 0.6rem 0 0.6rem
  background-color #fff
  .my-indent
    display flex
    display -webkit-flex  
    justify-content space-between 
    border-bottom 1px solid #f8f8f8
    padding-bottom 0.6rem
    color #333
    
    .my-indent-right
      font-size 0.85rem   
      opacity 0.5
  .my-section
    display flex
    justify-content space-between
    padding 0.6rem
    border-bottom 1px solid #f8f8f8
    a
      text-align center 
      i 
        font-size 1.3rem  
        opacity 0.5
      p
        margin-top 0.6rem  
        opacity 0.7
  .my-vip
    margin-top 0.5rem 
    width 100%
    .my-vip-top-div
      display flex
      display -webkit-flex
      align-items center
      width 100%
      position relative
      padding-bottom 0.6rem
      border-bottom 1px solid #f8f8f8
      i 
        font-size 1.5rem 
      .icon-huiyuan
        color #ff7d00 
      span 
        margin-left 1.5rem  
      .icon-right
        font-size 1.2rem
        position absolute
        right 0
           
</style>
