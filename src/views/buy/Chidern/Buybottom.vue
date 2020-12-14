<template>
    <div class="bottom-nav">
      <div class="checkbutton">
        <CheckButton  :checkshow="checkall" @click.native="checkbutoon" />
      </div>
      <p>全选</p>
      <div class="price">合计:{{totprice}}</div>
      <div class="counter" @click="counterclick">去计算{{counter}}</div>
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
        },
        checkall(){
            if (this.cartlists.length === 0) return false
          return !this.cartlists.find(item => !item.checked)
        }
      },
      methods:{
        checkbutoon(){
          if (this.checkall){
            return this.cartlists.forEach(item => item.checked=false)
          }else {
            return  this.cartlists.forEach(item => item.checked=true)
          }
        },
        counterclick(){
         if (!this.checkall){
           this.$toast.show('请选择商品',2000)
         }
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
    color: #f6f6f6;
    width: 100px;
    margin-right: 0;
    background-color: red;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

</style>
