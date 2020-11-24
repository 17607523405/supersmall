<template>
    <div>
      <Detailnavbar></Detailnavbar>
      <Detailswiper :swipe="topimage"></Detailswiper>
      <DetailsBaseinfo :goods="goods"/>
      <DetailShopinfo :shops="shops"/>
    </div>
</template>

<script>
  import DetailShopinfo from "./Childen/DetailShopinfo";
  import DetailsBaseinfo from "./Childen/DetailsBaseinfo";
  import Detailswiper from "./Childen/Detailswiper";
  import Detailnavbar from "./Childen/Detailnavbar";

  import {getdetail,Goods,Shop} from 'network/detail';
    export default {
        name: "Detail",
      components:{
        Detailnavbar,
        Detailswiper,
        DetailsBaseinfo,
        DetailShopinfo

      },
         data(){
          return {
          iid:null,
          topimage:[],
            goods:{},
            shops:{}
          }
         },
      created() {
       this.iid=this.$route.params.iid
        //依据iid获取详情页的数据
        getdetail(this.iid).then(res=>{
          //获取详情页轮播图的数据
          const data=res.result
          this.topimage=data.itemInfo.topImages
          //获取商品具体信息
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          //获取店铺的信息
          this.shops=new Shop(data.shopInfo)
          console.log(data)
        })
      }
    }
</script>

<style scoped>

</style>
