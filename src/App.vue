<template>
  <div>
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <Maintabbar class="maintabr"></Maintabbar>

  </div>

</template>

<script>
import Maintabbar from "components/context/maintabbar/Maintabbar";

export default {
  name: 'App',
  components: {
   Maintabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
  .maintabr{
    z-index: 10;
  }
</style>
