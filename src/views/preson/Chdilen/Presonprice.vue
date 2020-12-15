<template>
    <div class="navbar">
      <div  class="left">
        <div>
          <span>
          0.00元
        </span>
        </div>
        我的余额
      </div>
      <div  class="center">
       <div>
         <span>0张</span>
       </div>
        我的优惠券
      </div>
      <div  class="right">
        <div>
          <span>0积分</span>
        </div>
        我的积分
      </div>
    </div>
</template>

<script>
    //import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Presonprice",
      components:{
          //NavBar
      }
    }
</script>

<style scoped>
.navbar{
  display: flex;

}
.left ,.center {
   padding-top: 10px;
   width: 33.4%;
  height: 60px;

  text-align: center;
  border-right: solid 1px #cccccc;
}
  .right{
    height: 60px;
    padding-top: 10px;
    flex: 1;
    text-align: center;
  }
  .left span, .right span, .center span{
    color: var(--color-tint);
  }
</style>
