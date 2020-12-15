<template>
    <div class="p-center">
      <div class="top">
      </div>

      <div class="myxx">
        <div><img src="~assets/img/preson/laungth.png" alt=""></div>
        <div class="text">我的消息</div>
      </div>
      <div class="smpall">
        <div><img src="~assets/img/preson/counte.png"></div>
        <div class="smpall-text">积分商城</div>
      </div>
      <div class="vip">
        <div><img src="~assets/img/preson/vip.png" alt=""></div>
        <div class="vip-item">会员卡</div>
      </div>
      <div class="bottom">
      </div>
      <div class="caot">
        <div><img src="~assets/img/preson/caot.png" alt=""></div>
        <div class="caot-item">我的购物车</div>
      </div>
      <div class="app">
        <div><img src="~assets/img/preson/app.png" alt=""></div>
        <div class="app-item">下载购物APP</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Presoncenter"
    }
</script>

<style scoped>

  .top{
    background:  #f6f6f6;
   height: 18px;
  }
  .bottom{
    background: #f6f6f6;
    height: 18px;
  }

  .vip, .myxx,.smpall,.caot,.app{
    background: #ffffff;
    height: 40px;
    border-bottom: 2px solid #f6f6f6;
    display: flex;
    align-items: center;
    font-size: 14px;

  }
  .myxx img ,.smpall img ,.vip img ,.caot img, .app img{
    width: 25px;
    height: 25px;
    margin-left: 8px;
    margin-right: 10px;

  }


</style>
