<template>
    <navbar>
      <div slot="left" class="backitem" @click="backitem">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="navbar">
        <div class="navbar-item" v-for="(item,index) in titles"
             :key="index"
             :class="{active:index===countindex}" @click="itemclick(index)">{{item}}</div>
      </div>
    </navbar>
</template>

<script>
  import navbar from "components/common/navbar/NavBar"
    export default {
        name: "Detailnavbar",
      components:{
          navbar
      },
      data(){
          return{
            titles: ['商品','参数','评论','推荐'],
            countindex:0
          }
      },
      methods:{
        itemclick(index){
          this.countindex=index
          this.$emit('itemclick',index)
        },
        backitem(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
 .navbar{
   display: flex;
   font-size: 13px;

 }
  .navbar-item{
    flex: 1;
  }
  .active{
    color: var(--color-hight-text);
  }
  .backitem img{
    width: 22px;
    height: 22px;
    margin-top: 12px;
  }
</style>
