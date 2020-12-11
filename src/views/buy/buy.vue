<template>
    <div class="buy">
      <navbar class="buy-nav">
        <div slot="center" >购物车({{cartlength}})</div>
      </navbar>
    <Scroll class="content" ref="scroll">
      <Buylist></Buylist>
    </Scroll>
      <Buybottom />
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import Buybottom from "./Chidern/Buybottom";
  import Buylist from "./Chidern/Buylist";

  import Scroll from "components/common/scroll/Scroll";
  import navbar from "components/common/navbar/NavBar"

    export default {
      name: "buy",
      components:{
        navbar,
        Buylist,
        Buybottom,
        Scroll

      },
      computed:{
        ...mapGetters(['cartlength'])
      },
      activated() {
        this.$refs.scroll.refresh()
      }


    }
</script>

<style scoped>
  .buy{
    height: 100vh;
  }
.buy-nav{
  background-color: var(--color-tint);
  color: #fff;
}
  .content{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }

</style>
