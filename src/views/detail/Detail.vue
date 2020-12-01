<template>
    <div class="detail">
      <Detailnavbar class="detail-nav"></Detailnavbar>
      <Scroll class="content" ref="scroll">
        <Detailswiper :swipe="topimage" @swipeImageLoad="swipeImageLoad"></Detailswiper>
        <DetailsBaseinfo :goods="goods"/>
        <DetailShopinfo :shops="shops"/>
        <DetailGoodsInfo :detailInfo="detailInfo" @imageload="imageload"/>
        <DetailGoodsparam :goodsparam="goodsparam"/>
        <DetailComment :commentinfo="comments"/>
        <Goods :goods="recommend"/>
      </Scroll>

    </div>
</template>

<script>
  import DetailComment from "./Childen/DetailComment";
  import DetailGoodsparam from "./Childen/DetailGoodsparam";
  import DetailGoodsInfo from "./Childen/DetailGoodsInfo";
  import DetailShopinfo from "./Childen/DetailShopinfo";
  import DetailsBaseinfo from "./Childen/DetailsBaseinfo";
  import Detailswiper from "./Childen/Detailswiper";
  import Detailnavbar from "./Childen/Detailnavbar";

  import Goods from "components/context/goods/Goods";
  import Scroll from "components/common/scroll/Scroll";

  import {getdetail,Goodssmall,Shop,GoodsParam,recommond} from 'network/detail';
    export default {
        name: "Detail",
      components:{
        Detailnavbar,
        Detailswiper,
        DetailsBaseinfo,
        DetailShopinfo,
        DetailGoodsInfo,
        DetailGoodsparam,
        DetailComment,
        Goods,
        Scroll

      },
         data(){
          return {
          iid:null,
          topimage:[],
            goods:{},
            shops:{},
            detailInfo:{},
            goodsparam:{},
            comments:{},
            recommend:[]
          }
         },
      created() {
       this.iid=this.$route.params.iid
        //依据iid获取详情页的数据
        getdetail(this.iid).then(res=>{
          //1.获取详情页轮播图的数据
          const data=res.result
          this.topimage=data.itemInfo.topImages
          //2.获取商品信息
          this.goods=new Goodssmall(data.itemInfo,data.columns,data.shopInfo.services)
          //3.获取店铺的信息
          this.shops=new Shop(data.shopInfo)
          //4.获取商品的具体信息
          this.detailInfo=data.detailInfo

          //5.获取商品的参数信息
          this.goodsparam=new GoodsParam(data.itemParams.info,data.itemParams.rule)

          //6.获取商品评论信息
          if (data.rate.cRate !==0){
               this.comments=data.rate.list[0]
          }


        })
        //获取推荐信息
        recommond().then(res=>{
          console.log(res.data.list)
          this.recommend=res.data.list
        })
      },
      methods:{
        swipeImageLoad(){
               //解决无法向下滚动的bug
               this.$refs.scroll.refresh();
        },
        imageload(){
          //所有图片加载完以后进行一次刷新
          this.$refs.scroll.refresh();
        }
      }
    }
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 11;
  height: 100vh;
  background-color: #f6f6f6;
}
  .content{
    /*overflow: hidden;*/
    /*position: absolute;*/
    /*top: 44px;*/
    /*left: 0;*/
    /*right: 0;*/
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 11;
    background-color: #f6f6f6;
  }
</style>
