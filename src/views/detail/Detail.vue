<template>
    <div class="detail">
      <Detailnavbar class="detail-nav" @itemclick="navclick" ref="navbar"></Detailnavbar>
      <Scroll class="content" ref="scroll" @scroll="tabscroll" :probeType="3">
        <Detailswiper :swipe="topimage" @swipeImageLoad="swipeImageLoad"></Detailswiper>
        <DetailsBaseinfo :goods="goods"/>
        <DetailShopinfo :shops="shops"/>
        <DetailGoodsInfo :detailInfo="detailInfo" @imageload="imageload"/>
        <DetailGoodsparam :goodsparam="goodsparam" ref="param"/>
        <DetailComment :commentinfo="comments" ref="comment"/>
        <Goods :goods="recommend " ref="recommend"/>
      </Scroll>
      <backtop @click.native="backtop" v-show="isshow"></backtop>
      <Detailbottom @cartlick="cartlick"/>
    </div>
</template>

<script>
  import Detailbottom from "./Childen/Detailbottom";
  import DetailComment from "./Childen/DetailComment";
  import DetailGoodsparam from "./Childen/DetailGoodsparam";
  import DetailGoodsInfo from "./Childen/DetailGoodsInfo";
  import DetailShopinfo from "./Childen/DetailShopinfo";
  import DetailsBaseinfo from "./Childen/DetailsBaseinfo";
  import Detailswiper from "./Childen/Detailswiper";
  import Detailnavbar from "./Childen/Detailnavbar";

  import Goods from "components/context/goods/Goods";
  import Scroll from "components/common/scroll/Scroll";

  import {mixin,backtopmix} from "common/mixin";

  import {getdetail,Goodssmall,Shop,GoodsParam,recommond} from 'network/detail';
    export default {
        name: "Detail",
      mixins:[mixin,backtopmix],
      components:{
        Detailnavbar,
        Detailswiper,
        DetailsBaseinfo,
        DetailShopinfo,
        DetailGoodsInfo,
        DetailGoodsparam,
        DetailComment,
        Detailbottom,
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
            recommend:[],
            Topshowy:[],
            countindex:0

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
          // console.log(this.goods)
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
          // console.log(res.data.list)
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
          //可以使用防抖函数或者先等待所有图片加载完成获取标题点击对应的位置
          this.Topshowy=[]
          this.Topshowy.push(0);
          this.Topshowy.push(this.$refs.param.$el.offsetTop);
          this.Topshowy.push(this.$refs.comment.$el.offsetTop);
          this.Topshowy.push(this.$refs.recommend.$el.offsetTop);
          this.Topshowy.push(Number.MAX_VALUE);
           // console.log(this.Topshowy);

        },
        navclick(index){
          this.$refs.scroll.scrollto(0,-(this.Topshowy[index]),500)
        },
        tabscroll(postion){
          const postiony=-postion.y
          let length=this.Topshowy.length
          for(let i=0;i<length-1;i++){

            // if (this.countindex !==i &&((i<length-1&&postiony>=this.Topshowy[i] && postiony<this.Topshowy[i+1])
            //   ||( i===length-1 && postiony>=this.Topshowy[i]))){
            //   this.countindex=i
            //    // console.log(this.countindex);
            //   this.$refs.navbar.countindex=this.countindex
            //
            // }
            //对上面复杂条件进行了简化
            if (this.countindex !==i&&(postiony>=this.Topshowy[i] && postiony<this.Topshowy[i+1])){
                    this.countindex=i
              //    // console.log(this.countindex);
                 this.$refs.navbar.countindex=this.countindex
            }
          }
          // console.log(postiony)
          //判断是否显示回到顶部按妞，isshow是在mixin里面混入进来的
          this.isshow=-(postion.y)>1000
        },
        //加入购物车传递过来的事件，将物品信息保存到购物车
        cartlick(){
          // console.log('------')
          //1.获取商品的相关信息
          const product = {}
          product.image=this.topimage[0];
          product.title=this.goods.title;
          product.desc=this.goods.desc;
          product.price=this.goods.realPrice;
          product.iid=this.iid

          //2.将商品加入购物车中的vuex
          this.$store.dispatch('addcart',product)

        }
      },
      mounted() {

      },
      destroyed() {
          this.$bus.$off('itemimgload',this.itemlisten)
        // console.log('destroy');
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
    height: calc(100% - 44px - 49px);
  }
  .detail-nav{
    position: relative;
    z-index: 11;
    background-color: #f6f6f6;
  }
</style>
