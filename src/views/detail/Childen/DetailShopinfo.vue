<template>
   <div class="shop-info">
      <div class="shop-top">
        <img :src="shops.logo">
        <span class="shop-title">{{shops.name}}</span>
      </div>
     <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="shop-sell">
          <div class="shop-sell-count">{{shops.sells |showcount}}</div>
          <div class="shop-sell-text"><span>总销量</span></div>
        </div>
        <div class="shop-good">
          <div class="goods-count">{{shops.goodcount}}</div>
          <div class="goods-count-text">全部宝贝</div>
        </div>
      </div>
       <div class="shop-middle-item shop-middle-right">
         <table class="shop-others" cellspacing="15px">
           <tr v-for="(item ,index) in shops.score" :key="index" class="shop-others-text" >
             <td >{{item.name}}</td>
             <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
             <td class="better" :class="{'better-more':item.isBetter}"><span>
               {{item.isBetter ? '高':'低'}}
             </span></td>
           </tr>
         </table>
       </div>

     </div>
     <div class="shop-bottom">
       <div class="enter-shop">进店逛逛</div>
     </div>

   </div>
</template>

<script>


  export default {
        name: "DetailShopinfo",
        props:{
          shops:{
            type:Object,
            default(){
              return{}
            }
          }
        },
       filters:{
          //过滤器的使用，使得销量保留一位小数
         showcount (sells){
           const sell=sells/10000
           return  sell.toFixed(1)+'万'
         }
       }
    }
</script>

<style scoped>
  .shop-info{

  }
  .shop-top{
    display: flex;
  }

 .shop-top img{
   border-radius: 10px;
   width: 80px;
   height: 80px;
   margin-top:20px;
   margin-left: 15px;
 }
 .shop-title{
   font-size: 14px;
   margin-left: 20px;
  margin-top: 60px;
 }
  .shop-middle{
    display: flex;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 5px;
    font-size: 13px;
    border-right: solid 1px silver;
    /*padding-top: 10px;*/
  }
  .shop-sell{
    margin-top: 30px;
  }
  .shop-good{
    margin-top: 30px;
  }
  .goods-count-text{
    padding-top: 8px;
    font-size: 14px;
  }
  .shop-sell-text{
    font-size: 14px;
    padding-top: 8px;
  }
  .shop-middle-right{
    margin-top: 4px;
    font-size: 13px;
  }
  .shop-others{
    margin-left: 35px;
  }
  .score{
    color: green;
  }
  .score-better{
    color: var(--color-hight-text);
  }
  .better{
    color: green;
  }
  .better-more{
    color: var(--color-hight-text);
  }
  .shop-bottom{

    margin-top: 25px;
    margin-bottom: 20px;

  }
  .enter-shop{
    text-align: center;
    background-color: #cccccc;
    margin-left: 35%;
    margin-right: 35%;
    border-radius: 5px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
  }







</style>
