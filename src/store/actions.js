import {
  ADDCOUNTER,
  ADDPRODUCT
}from './Mutation-types'

export default {
  addcart(context,payload){
    let oldProudct=context.state.cartlist.find(item=> item.iid ===payload.iid)
    if(oldProudct){
      context.commit(ADDCOUNTER,oldProudct)
    }
    else {
      payload.count=1
      context.commit(ADDPRODUCT,payload)
    }
  }
}
