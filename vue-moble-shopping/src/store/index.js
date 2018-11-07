import Vue from 'vue'
import Vuex from'vuex'
import {getters} from './getters'
import mutations from './mutations'
import {actions} from './actions'
Vue.use(Vuex)

const state = {
  tabIndex: 0,  //category
  // details
  productDatas: '',  //detail父组件请求当前页面数据
  colSelected: 0,  //默认第一个 颜色选择
  sizeSelected: 0,  // 内存选择
  count: 0,
  carList: '', //购物车商品列表
  Loading: false,
  selectedList: '', //已选择的购物车商品列表
  unSelectedList: '', //未选择列表

  //login
  username: '',
  Tel: '',
  address: '',
  password: ''

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})