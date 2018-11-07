<template>
  <div class="pay">
    <v-header>
      <h1>支付订单</h1>
    </v-header>
    <div class="pay-address">
      <div>
        <p class="pay-person">
          收货人:<span>{{username}}</span>
        </p>
        <p class="tel">{{Tel}}</p>
      </div>
      <p class="address">收货地址:<span>{{address}}</span></p>
    </div>
    <div class="pay-product" v-if="!confirm">
      <ul>
        <li v-for="(item,index) in carList" :key="index">
          <a>
            <img :src="item.imgpath.path" alt="">
            <div>
              <h2><span style="color:#ee7150"> {{item.size}} - {{item.color}} </span>- {{item.title}} -</h2>
              <p>￥{{item.price}}</p>
            </div>
          </a>
        </li>
      </ul>
       <h3 class="pay-allpay">总需要支付:<i>￥</i><span>{{allPay}}</span></h3>
    </div>
      <!-- 支付成功后的提示 -->
    <div class="pay-confirm" v-else>
      支付成功!!!
    </div>
    <footer class="pay-footer" @click="pay">
      <span>立即支付</span>
    </footer>
  </div>
</template>

<script>
import VHeader from '@/common/Header.vue'
import { MessageBox } from 'mint-ui'
export default {
  components: {
    VHeader
  },
  data () {
    return {
      confirm: ''
    }
  },
  computed: {
    carList () {
      return this.$store.state.selectedList
    },
    username() {
      return this.$store.state.username
    },
    address() {
      return this.$store.state.address
    },
     Tel() {
      return this.$store.state.Tel
    },
    allPay() {
    let sum = 0;
    let selectedList = this.carList
    console.log(selectedList)
    selectedList.forEach(item => {
      sum += parseInt(item.price)
    })
    return sum
  }
  },
  
  mounted() {
    if(!this.$store.state.selectedList) {
      this.$store.commit('SET_SELECTEDLIST')
    }
   this.$store.commit('USER_NAME')
   this.$store.commit('USER_ADDRESS')
   this.$store.commit('USER_TEL')
  },
   methods: {
    pay() {
      this.confirm = true
      this.$store.dispatch('resetCarList'); 
      this.$store.dispatch('resetCount');
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.pay
  width 100%
  background-color #f7f7f7
  h1
    width 70%
    text-align center
    color #fff
  .pay-address
    background #ffffff
    border-bottom 1px solid #dedede
    padding 0.6rem
    div
      display flex
      display -webkit-flex
      justify-content space-between
      p
        color #868686
        font-size 0.9rem
    .address  
      font-size 0.9rem
      color #868686
      padding-top 0.8rem  
      letter-spacing 1px 

  .pay-product
    background #ffffff
    // height 10rem  
    // overflow auto
    li
      a
        display flex
        display -webkit-flex
        box-sizing border-box
        padding 0.6rem  
        color #4d4d4d
        font-size 0.8rem
        border-bottom 1px solid #dedede
        img 
          display block
          width 4.7rem
          height 4.7rem
        div
          box-sizing border-box
          padding-left 1.3rem 
          h2
            overflow  hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
          p
            color #ff5d00
            font-size 1rem 
            text-align right
            padding-top 1.4rem  
  .pay-allpay
    text-align right
    margin-top 1rem
    padding 0.6rem
    font-size 0.9rem
    color #999999
    background #ffffff
    i 
      color #ff5d00   
    span 
      color #ff5d00
      font-size 1.2rem  
  .pay-footer
    position fixed
    bottom 2rem
    left 0
    width 100%
    span 
      display block
      width 85%
      background #ff5d00  
      border-radius .4rem 
      color #ffffff
      font-size 1rem   
      padding 0.8rem 
      text-align center
      margin 0 auto  
  .pay-confirm
    padding 1rem 0
    width 100%
    text-align center
    color #ff5d00
    font-size 2rem
    margin auto 0
    
    
    
</style>
