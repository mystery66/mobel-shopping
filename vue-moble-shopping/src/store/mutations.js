import * as types from './mutations-types'

export default {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  },

   [types.SET_DATAS] (state, res) {
     state.productDatas = res
   }
}