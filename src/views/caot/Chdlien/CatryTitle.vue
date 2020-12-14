<template>
  <div class="catrytitle" >

    <Scroll class="content" ref="scroll">
     <div>
       <div v-for="(item,index) in cartytitle" :key="index" class="catrytitle-item">
         {{item.title}}
       </div>

     </div>
    </Scroll>

  </div>


</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "CatryTitle",
        props:{
          cartytitle:{
            type:Array,
            default(){
              return []
            }
          }
        },
      components:{

          Scroll
      },
      activated() {
        this.$refs.scroll.refresh()
      },


    }
</script>

<style scoped>
  .catrytitle{
    height: calc(100% - 44px - 49px );
  }

.content{
  height: 100%;
  overflow: hidden;
}
  .catrytitle-item{
    margin-bottom: 30px;
  }
</style>
