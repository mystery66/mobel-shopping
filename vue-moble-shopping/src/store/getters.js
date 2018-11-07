export const getters = {
  // 过滤出购物车里已选择的商品
  selectedList(state) {
    
    if(state.carList) {
      var arr = state.carList.filter(item =>
        item.chooseBool == true
      )
    }
    // console.log(arr)
    return arr
  },
  //过滤出未选择的商品
  unSelectedList(state) {
    if(state.carList) {
      var arr = state.carList.filter(item =>
      item.chooseBool == false
    )
    }
    return arr;
  }
}