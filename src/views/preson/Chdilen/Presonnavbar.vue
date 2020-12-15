<template>
    <NavBar class="navbar">
      <div slot="left" class="left">
        <img src="~assets/img/preson/user.png" alt="">
      </div>
      <div slot="center" class="center" >
        <div class="text">
          <span>登录/注册</span>
        </div>
        <div class="phone">
          <img src="~assets/img/preson/phone.png" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div slot="right" class="right">
        <img src="~assets/img/preson/next.png" alt="">
      </div>
    </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Presonnavbar",
      components:{
          NavBar
      }
    }
</script>

<style scoped>
  .navbar{
    box-shadow: unset;
  }
  .left{
    align-items: center;
    padding-top: 6px;
    padding-left: 18px;
  }
 .left img{
   width: 60px;
   height: 60px;
 }
  .center{
    margin-left: 20px;
  }
  .phone img{
    width: 20px;
    height: 20px;

  }
  .text{
    height: 30px;
    color: #f6f6f6;
  }
  .phone{
    font-size: 12px;
    color: #f6f6f6;

  }
  .phone span{
  padding-top: 1px;
  }
  .right{
    height: 80px;
    line-height: 80px;
  }
 .right img{
   width: 30px;
   height: 30px;
 }
</style>
