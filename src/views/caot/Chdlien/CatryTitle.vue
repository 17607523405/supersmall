<template>
  <div class="catrytitle" >

    <Scroll class="content" ref="scroll">
     <div>
       <div v-for="(item,index) in cartytitle" :key="index" class="catrytitle-item"
            @click="titleclick(index)" :class="{active:index===count}">
         <span>{{item.title}}</span>
       </div>

     </div>
    </Scroll>

  </div>


</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "CatryTitle",
      data(){
        return{
          count:0
        }
      },
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
     methods:{
       titleclick(index){
         this.count=index
         this.$emit('titleclick',index)
       }
     },
      activated() {
        this.$refs.scroll.refresh()
      },


    }
</script>

<style scoped>
  .catrytitle{
    height: calc(100% - 44px - 49px );
    width: 20%;

  }

.content{
  height: 100%;
  overflow: hidden;
}
  .catrytitle-item{
    margin-bottom: 20px;
    text-align: center;
  }
  .active{
    color: var(--color-hight-text);
  }
  .active span{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);

  }
</style>
