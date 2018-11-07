// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import './config/rem.js'
import store from './store'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(Mint);
Vue.use(Vuex);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {  //路由守卫  
  if(to.meta.requireAuth) {
    if(store.state.username) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
