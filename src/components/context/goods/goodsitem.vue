<template>
<div class="goodsitem">
  <img :src="showimage" alt="" @load="imgload" @click="itemclick">
  <div class="goodsinfo">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collection">{{goodsItem.cfav}}</span>

  </div>
</div>
</template>

<script>
    export default {
        name: "goodsitem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return{}
            }

    }
      },
      methods:{
          imgload(){
            this.$bus.$emit('itemimgload')
          },
        itemclick(){

           this.$router.push('/detail/'+this.goodsItem.iid)
        }
      },
      computed:{
          showimage(){
            //判断传入的数据是image还是show.img
            return this.goodsItem.image ||this.goodsItem.show.img
          }
      }
    }
</script>

<style scoped>
 .goodsitem{
   padding-bottom: 40px;
   position: relative;
   width: 48%;
 }
  .goodsitem img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsinfo{
    font-size: 12px;
    position: absolute;
    text-align: center;
    overflow: hidden;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .goodsinfo p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goodsinfo .price{
    color: var(--color-tint);
    margin-right: 30px;
  }
  .goodsinfo .collection{
    position: relative;
  }
  .goodsinfo .collection::before{
    content: '';
    position: absolute;
    left: -20px;
    top: -1px;
    width: 18px;
    height: 18px;
    background: url("../../../assets/img/common/collect.svg") 0 0/18px 18px;
  }
</style>
