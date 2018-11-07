import util from './util.js'
import * as types from './mutations-types.js'
import { getters} from './getters.js'
export const actions ={
  //购物车数量增减 true + false -
  setLocalCount({ commit }, bool = true) {
    let count  = util.getLocal('count') || 0;
    if(bool) {
     
      util.setLocal(++count,'count')
    } else {
      util.setLocal(--count,'count')
    }
    commit(types.CHANGE_COUNT)
  },
 
  //向购物车添加商品
  addCarList({ commit }, res) {
    util.setLocal(res, 'carList', true);
    commit(types.ADD_GOODS)
  },
//删除购物车的某一项  用新数组替换原数组
  cutCarList({commit}, res) { 
    util.setLocal(res,'carList');
    commit(types.RESET_CARLIST)
  },

  setSelectedList({commit,getters}) {
    util.setLocal(getters.selectedList,'selectedList');
    commit(types.SET_SELECTEDLIST);
    util.setLocal(getters.unSelectedList,'unSelectedList');
    commit(types.SET_UNSELECTEDLIST);

  },
//重新设置购物车商品列表,把打钩并提交的商品去掉,即保留unSelectedList
  resetCarList({ commit, getters }) {
    const unSelectedList = util.getLocal('unSelectedList');
    util.setLocal(unSelectedList,'carList')
    commit(types.RESET_CARLIST)
  },
// 重置购物车数量Count,即没打钩的商品的数量
  resetCount({commit,getters}) {
    const count = util.getLocal('unSelectedList').length;
    util.setLocal(count,'count');
    commit(types.RESET_COUNT);
  },

  userName({ commit }, res) {
    util.setLocal(res,'username')
    commit(types.USER_NAME)
  },

  address({ commit }, res) {
    
    util.setLocal(res,'address')
    commit(types.USER_ADDRESS)
  },
  Tel({ commit }, res) {
    util.setLocal(res,'Tel')
    commit(types.USER_TEL)
  }

}
 