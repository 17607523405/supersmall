<template>
  <div class="catry">
    <NavBar class="navbar">
      <div slot="center">商品分类</div>
    </NavBar>
    <CatryTitle :cartytitle="catrytitle" class="cartytitle" @titleclick="titleclick"/>
    <scroll class="scroll" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"   @pullup="loadmore" @scroll="backscroll">
      <Goods :goods="showgoods"/>

    </scroll>
    <Backtop v-show="isshow" @click.native="backtop"/>
  </div>
</template>

<script>
   import {getCategory} from 'network/category'
   import {homedata} from "network/home";


   import Goods from "components/context/goods/Goods";
   import Scroll from "components/common/scroll/Scroll";
   import NavBar from "components/common/navbar/NavBar";

   import CatryTitle from "./Chdlien/CatryTitle";
   import {backtopmix} from "common/mixin";

   export default {
        name: "caot",
        mixins:[backtopmix],
        components:{
          NavBar,
          Scroll,
          CatryTitle,
          Goods,

        },
      data(){
          return{
          catrytitle:[],
            goods:{
              pop:{page:0,list:[]},
              new:{page:0,list:[]},
              sell:{page:0,list:[]},
            },
            currenttype:'pop'
          }

      },
      methods:{
        titleclick(index){
          console.log(index)
        },
        //上拉加载更多
        loadmore(){
          this.gethomedata(this.currenttype);
          //解决图片没有加载出来无法向下滚动问题
          this.$refs.scroll.refresh();
        },
        //获取每一页的数据
        gethomedata(type){
          const page=this.goods[type].page+1
          homedata(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page +=1;
            this.$refs.scroll.finishpullup()
             // console.log(res.data.list);
          })
        },
        //判断是否显示返回按妞
        backscroll(position){
          //1判断是否显示backtop组件,isshow是在mixin里面的变量进行混入
          this.isshow=-(position.y)>2000
        },

      },

      computed:{
        showgoods(){
          return this.goods[this.currenttype].list
        }
      },

      created() {

        getCategory().then( res =>{
          //1.获取左侧标题的数据
          this.catrytitle=res.data.category.list
          // console.log(this.catrytitle)
        })
        //获取每一项的数据
        this.gethomedata('pop');
      }
    }
</script>

<style scoped>
  .catry{
    height: 100vh;

  }
.navbar{
  background-color: var(--color-tint);
  z-index: 100;
  /*position: absolute;*/
  /*left: 0;*/
  /*right: 0;*/
}

  .cartytitle{
   background-color: #f6f6f6;
  }
  .scroll{
    position: absolute;
    left: 20%;
    top: 44px;
    height: calc(100% - 44px - 46px );
    width: 80%;
    overflow:hidden ;
    background-color: #ffffff;

  }
</style>
