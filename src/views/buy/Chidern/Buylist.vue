<template>
  <div class="buylist">
<!--    //可以将scroll封装在buylist里面或者buy里面-->
<!--    <Scroll class="content" ref="scroll">-->
      <Buylistitem  v-for="(item ,index ) in cartlists" :key="index" :cartlists="item"/>
<!--    </Scroll>-->

  </div>
</template>

<script>
  //import Scroll from "components/common/scroll/Scroll";
  import Buylistitem from "./Buylistitem";

  import {mapGetters} from 'vuex'
    export default {
        name: "Buylist",
      components:{
        Buylistitem,
        // Scroll
      },
      computed:{
          ...mapGetters(['cartlists'])
      },
      // deactivated() {
      //     this.$refs.scroll.refresh()
      // }
      // activated() {
      //     this.$refs.scroll.refresh()
      // }
    }
</script>

<style scoped>
  /*.buylist{*/
  /*  height: calc(100% - 49px - 44px);*/
  /*}*/
  /*.content{*/
  /*  height:100%;*/
  /*  overflow: hidden;*/
  /*}*/
</style>
