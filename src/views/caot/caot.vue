<template>
  <div class="catry">
    <NavBar class="navbar">
      <div slot="center">商品分类</div>
    </NavBar>


     <CatryTitle :cartytitle="catrytitle" class="cartytitle"/>


  </div>
</template>

<script>
   import {getCategory} from 'network/category'


   import NavBar from "components/common/navbar/NavBar";

   import CatryTitle from "./Chdlien/CatryTitle";

    export default {
        name: "caot",

        components:{
          NavBar,

          CatryTitle
        },
      data(){
          return{
          catrytitle:[]
          }

      },

      created() {

        getCategory().then( res =>{
          //1.获取左侧标题的数据
          this.catrytitle=res.data.category.list
          console.log(this.catrytitle)
        })
      }
    }
</script>

<style scoped>
  .catry{
    height: 100vh;

  }
.navbar{
  background-color: var(--color-tint);
  z-index: 10;
}

  .cartytitle{
   background-color: #666666;

  }
</style>
