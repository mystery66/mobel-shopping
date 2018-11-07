import * as types from './mutations-types'
import util from './util.js'
export default {
  // category 获取slidernav数组下标
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  },

//  获取商品颜色数组下标
   [types.CHANGE_COL_SELECTED] (state,res) {
     state.colSelected = res
   },

//获取商品size数组下标
   [types.CHANGE_SIZE_SELECTED] (state,res) {
    state.sizeSelected = res
  },

// 向购物车添加商品
  [types.ADD_GOODS] (state) {
    state.carList = util.getLocal('carList')
  },

//获取购物车商品数量
  [types.CHANGE_COUNT] (state) {
    state.count = util.getLocal('count')
    console.log("state.count"+state.count)
  },

 //重置购物车商品数量 （当页面刷新是state.count为空）
  [types.RESET_COUNT] (state) {
    state.count = util.getLocal('carList').length
    // console.log(state.count)
  },

  //重置购物车 （当页面刷新时state.carList为空）
  [types.RESET_CARLIST] (state) {
    console.log(util.getLocal('carList'))
    state.carList = util.getLocal('carList')
  },

  //购物车选择准备付款的商品
  [types.SET_SELECTEDLIST] (state,res) {
    state.selectedList = util.getLocal('selectedList')
  },

  [types.SET_UNSELECTEDLIST] (state,res) {
    console.log(1)
    state.unSelectedList = util.getLocal('unSelectedList')
  },

  [types.USER_NAME] (state,res) {
    state.username = util.getLocal('username')
  },
  [types.USER_ADDRESS] (state,res) {
    state.address = util.getLocal('address')
  },
  [types.USER_TEL] (state,res) {
    state.Tel = util.getLocal('Tel')
  }
}