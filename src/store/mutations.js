import {
  ADDCOUNTER,
  ADDPRODUCT
}from './Mutation-types'


export default {
  [ADDCOUNTER](state,payload){
    payload.count++
  },
  [ADDPRODUCT](state,payload){
    payload.checked=true
    state.cartlist.push(payload)
  }
}
