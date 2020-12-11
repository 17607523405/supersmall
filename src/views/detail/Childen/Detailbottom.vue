<template>
    <div class="bottom-bar">
      <div class="bottom-item left">
        <div>
          <i class="icon serve"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon star"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bottom-item right">
        <div class="cart" @click="cartlick" >加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Detailbottom",
      methods:{
        cartlick() {
          this.$emit('cartlick')
        }
      }
    }
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  position: fixed;
  background: #fff;
  display: flex;

  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
}
  .bottom-item{
    display: flex;
    flex: 1;
  }
  .bottom-item>div{
    flex: 1;
  }
  .left{
    font-size: 13px;
  }
  .left .icon{
    display: block;
    width: 22px;
    height: 20px;
    margin: 8px auto 2px;

    background:url("../../../assets/img/detail/detail_bottom.png") 0 0/100% ;
  }
  .left .serve{
    background-position: 0 -54px;
  }
  .left .shop{
    background-position: 0 -98px;
  }
  .right{
    text-align: center;
    line-height: 49px;
    font-size: 14px;
  }
  .cart{
    background: yellow;
  }
  .buy{
    background: #ff5777;
  }
</style>
