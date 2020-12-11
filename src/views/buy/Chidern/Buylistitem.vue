<template>
  <div class="listitem">
    <div class="check">
      <CheckButton @click.native="checckclick" :checkshow="cartlists.checked"/>
    </div>
    <div class="item-img">
      <img :src="cartlists.image" alt="">
    </div>
    <div>
      <div class="item-title">
      {{cartlists.title}}
    </div>
    <div class="item-desc">
      {{cartlists.desc}}
    </div>
      <div class="item-counter">
         <div class="item-price">￥{{cartlists.price}}</div>
         <div class="item-count"> x{{cartlists.count}}</div>
      </div>


    </div>



  </div>

</template>

<script>
  import CheckButton from "components/context/checkbutton/CheckButton";
    export default {
        name: "Buylistitem",
      props:{
        cartlists:{
          type:Object,
          default(){
            return{}
          }
        }
      },
      components:{
          CheckButton
      },
      methods:{
        checckclick(){
          // this.checkshow != this.checkshow
           this.cartlists.checked = !this.cartlists.checked
        }
      }
    }
</script>

<style scoped>
  .listitem{
    display: flex;
    margin-top: 14px;
    padding-bottom: 15px;
    border-bottom: 2px solid #cccccc;
  }
  .check{
    margin-top: 22px;
    margin-left: 3px;
  }
  .item-img{
    margin-right: 10px;
    margin-left: 5px;
  }
.item-img img{
  overflow: hidden;
  width: 70px;
  border-radius: 8%;
  height: 100px;
}
  .item-title{
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
  }
  .item-desc{
    margin-left: 1px;
    margin-top: 10px;
    color: #666666;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
  }
  .item-counter{
    display: flex;
  }
  .item-price{
    margin-top: 30px;
    font-size: 13px;
    color: #ff5777;

  }
  .item-count{
    font-size: 13px;
    margin-top: 30px;
    margin-left: 120px;

  }

</style>
