import {request} from "./request";
export function getdetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })

}
export function recommond() {
  return request({
    url: '/recommend'
  })
}
//获取商品
export class Goodssmall {
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
//获取店铺的信息
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
//获取商品的参数信息
export class GoodsParam {
 constructor(info,rules) {
   //注images可能没有值(有些商品有值，有些没有)
   this.image=info.images ?info.images[0]:'';
   this.infos=info.set;
   this.sizes=rules.tables
 }

}
