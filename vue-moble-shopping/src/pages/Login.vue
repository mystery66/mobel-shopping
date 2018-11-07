<template>
  <div class="login">
    <v-header>
      <h1>登陆页</h1>
    </v-header>
    <div class="user-info">
      <mt-field label="昵称" placeholder="请输入昵称" v-model="username"></mt-field>
      <mt-field label="手机号码" placeholder="请输入手机号码" type="tel" v-model="Tel"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="地址" placeholder="请输入地址" type="text" v-model="address"></mt-field>
    </div>
    <div class="login-button">
      <mt-button plain size="large" @click="login" >登录</mt-button>
    </div>
  </div>
</template>

<script>
import VHeader from '@/common/Header'
export default {
  components: {
    VHeader
  },
  data() {
    return {
      username: '',
      Tel: '',
      password: '',
      address: ''

    }
  },
  methods: {
    login() {
      let Tel = this.Tel
      let address = this.address
      let username = this.username
      console.log(address);
      this.$store.dispatch('userName',username)
      this.$store.dispatch('address',address)
      this.$store.dispatch('Tel',Tel)
        //  this.$store.commit('USER_INFO',password)
       setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
    }
  }
}
</script>

<style lang="stylus" scoped>
.login

  h1 
    width 70%
    text-align center
    color #fff
  .login-button
    margin-top 2rem 
    margin-left 10%
    width 80%
    background #ff5d00
    color #fff 
    button
      color #fff
      letter-spacing 0.5rem
      border none
      
</style>
