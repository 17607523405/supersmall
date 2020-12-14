import {
  ADDCOUNTER,
  ADDPRODUCT
}from './Mutation-types'

export default {
  addcart(context,payload){
    return new Promise((resolve) => {
      let oldProudct=context.state.cartlist.find(item=> item.iid ===payload.iid)
      if(oldProudct){
        context.commit(ADDCOUNTER,oldProudct)
        resolve('商品数量+1')
      }
      else {
        payload.count=1
        context.commit(ADDPRODUCT,payload)
        resolve('添加商品成功')
      }
    })
  }
}
