<template>
   <div class="shop-info">
      <div class="shop-top">
        <img :src="shops.logo">
        <span class="shop-title">{{shops.name}}</span>
      </div>
     <div class="shop-modlie">

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
        }
    }
</script>

<style scoped>
  .shop-info{

  }
 .shop-top img{
   width: 40px;
   height: 40px;
 }
</style>
