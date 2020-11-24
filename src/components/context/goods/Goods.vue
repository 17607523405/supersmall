<template>
    <div class="goods">
        <goodsitem v-for="(item,index) in goods" :goods-item="item" :key="index"/>
    </div>
</template>

<script>
  import goodsitem from "./goodsitem";
    export default {
        name: "Goods",
      props:{
        goods:{
          type:Array,
          default(){
            return[]
          }
        }
      },
      components:{
          goodsitem
      }
    }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap:wrap ;
  justify-content: space-around;
  padding: 3px;
}
</style>
