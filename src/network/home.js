import {request} from "network/request";
export function gethomerequest() {
  return request({
    url:'/home/multidata'
  })

}
export function homedata(type,page ) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })

}
