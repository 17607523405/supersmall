<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" >
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item >
    <tab-bar-item path="/caot" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/tabbar.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/tabbar-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/buy" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/buy.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/buy-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/preson" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/preson.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/preson-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

    export default {
        name: "Maintabbar",
      components:{
          TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
