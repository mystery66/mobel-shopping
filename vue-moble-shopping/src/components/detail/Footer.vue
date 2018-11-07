<template>
  <div class="footer">
    <div class="footer-left">
      <router-link :to="{name: '首页'}" class="footer-index">
        <i class="icon iconfont icon-home"></i>
      </router-link>
      <router-link :to="{name:'购物车页'}" class="footer-gocart">
        <i class="icon iconfont icon-cart"></i>
      <span class="count" v-if="count">{{count}}</span>
    </router-link>
    </div>
    <span class="footer-right addcart" @click="addToCart">加入购物车</span>
  </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui';
export default {
  props:['name','info','cover'],
  computed: {
    count () {
      if(this.$store.state.count == '') {
        this.$store.commit('CHANGE_COUNT');
      }
      return this.$store.state.count
    },
    colorSelected() {
      return this.$store.state.colSelected
    },
    sizeSelected() {
      return this.$store.state.sizeSelected
    }
  },
  methods: {
    addToCart() {
      // console.log(this.name)
      const goods = [{
        title: this.name,
        price: this.info.price,
        size: this.info.size[this.sizeSelected].size,
        color: this.info.color[this.colorSelected].color,
        imgpath: this.cover,
        chooseBool: false
      }];

      MessageBox.confirm(
        `商品名称：${goods[0].title}</br>` +
        `价格:${goods[0].price}元</br>` +
        `规格：${goods[0].size}</br>` +
        `颜色:${goods[0].color}</br>`
        )
        .then(action => {
          this.$store.dispatch('setLocalCount',true);
          this.$store.dispatch('addCarList',goods);

          Toast({
            message:'添加成功',
            duration: 1000
          });
        },function(err) {
          console.log(err)
        })

    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position fixed
  left 0
  bottom 0
  background #ffffff
  z-index 1
  width 100%
  height 2.5rem
  display -webkit-flex
  display flex
  // justify-content center
  

  .footer-left
    width 50%
    height 100%
    display -webkit-flex
    display flex
    justify-content center
    align-items center
    a
      flex 1
      text-align center
      .iconfont
        font-size 1.5rem
    .footer-gocart
      position relative
      .count
        height 1rem
        width 1rem
        line-height 1rem
        background-color #ff7d00
        border-radius 50%
        color #fff
        position absolute  
        top -.25rem
        right 0.8rem 
        // padding 2px
        font-size 0.5rem
  .footer-right
    display inline-block
    width 50%  
    height 100%
    text-align center 
    font-size 1.2rem 
    background  #ff7d00
    color #fff
    line-height 2.5rem
button 
 .mint-msgbox-btn
   .mint-msgbox-confirm
    color #ff7d00  

</style>
