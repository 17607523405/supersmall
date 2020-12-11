<template>
    <div class="bottom-nav">
      <div class="checkbutton">
        <CheckButton  :checkshow="false"/>
      </div>
      <p>全选</p>
      <div class="price">合计:{{totprice}}</div>
      <div class="counter">去计算{{counter}}</div>
    </div>
</template>

<script>
   import {mapGetters} from 'vuex'

   import CheckButton from "components/context/checkbutton/CheckButton";
    export default {
        name: "Buybottom",
      components:{
          CheckButton
      },
      computed:{
          ...mapGetters(['cartlists']),
        totprice(){
          return  '￥'+this.cartlists.filter(item => {
            return item.checked
          }).reduce((preval,item)=>{
            return preval +item.price *item.count
          },0).toFixed(2)
        },
        counter(){
            return this.cartlists.filter(item =>{
               return  item.checked
            }).reduce((preval,item)=>{
              return preval +item.count
            },0)


        }
      }
    }
</script>

<style scoped>
.bottom-nav{
  position: relative;
  align-items: center;
  display: flex;
  background-color: #f6f6f6;
  height: 40px;
}
  .checkbutton{
    margin-left: 10px;

  }
  .checkbutton span{
    letter-spacing: 12px;
  }
  .price{
    margin-left: 20px;
    font-size: 14px;
    color: red;
    flex: 1;
  }
  .counter{
    width: 100px;
    margin-right: 0;
    background-color: red;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

</style>
