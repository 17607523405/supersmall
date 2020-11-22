<template>
    <div class="TabConrol">
      <div class="tabconrol-item" v-for="(item,index) in titles"
           :key="index"  :class="{active:index===count}" @click="itemcolor(index)">
        <span>{{item}}</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "TabConrol",
      props:{
          titles:{
            type:Array,
            default() {
              return [];
            }
          }
      },
      methods:{
        itemcolor(index){
          this.count=index
          this.$emit('tabconclick',index)
        }
      },
      data(){
          return{
            count:0
          }
      }
    }
</script>

<style scoped>
  .TabConrol{
    display: flex;
    background-color: #ffffff;
  }
.tabconrol-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding: 5px 0 40px;
  height: 40px;
  line-height: 40px;

}
.tabconrol-item span{
  padding: 5px;
}
  .active{
    color: var(--color-hight-text);
  }
  .active span{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
