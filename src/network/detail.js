import {request} from "./request";
export function getdetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })

}
export class Goods {
  constructor(iteminfo,colums,servies) {
    this.title=iteminfo.title;
    this.desc=iteminfo.desc;
    this.newprice=iteminfo.price;
    this.discount=iteminfo.discountDesc;
    this.oldprice=iteminfo.oldPrice;
    this.colums=colums;
    this.servies=servies;
    this.realPrice=iteminfo.lowNowPrice
  }

}
export class Shop {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodcount=shopInfo.cGoods
  }
}
