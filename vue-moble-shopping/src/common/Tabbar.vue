<template>
  <div class="tabbar" @click='toRouter'>
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i slot="icon" class="icon iconfont icon-home"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="分类页">
      <i slot="icon" class="icon iconfont icon-apps"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="购物车页">
      <i slot="icon" class="icon iconfont icon-cart"></i>
      购物车
    </mt-tab-item>
    <mt-tab-item id="用户页">
      <i slot="icon" class="icon iconfont icon-my"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
  mounted() {
    console.log(this.$route.name)
    let Rname = this.$route.name;
    switch (Rname) {
      case '首页':
      this.selected = '首页';
      break;
        case '分类页':
      this.selected = '分类页';
      break;
        case '购物车页':
      this.selected = '购物车页';
      break;
        case '用户页':
      this.selected = '用户页';
      break;
    }
  },
  methods: {
    toRouter() {
      this.$router.push({
        name: this.selected 
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.mint-tab-item-label:hover 
  color #333

.tabbar
  .mint-tabbar
    background #fff
    -webkit-box-shadow 0 0 0.5rem 0  0 hsla(0, 6%, 50%, .13)
    box-shadow 0 0 0.5rem 0  0 hsla(0, 6%, 50%, .13)
    .mint-tab-item 
      .iconfont
        font-size 1rem     
      .mint-tab-item-label
        font-size 1.5rem  
    .is-selected 
      color #fd5500
      background #fff
     
       
           

 


</style>
