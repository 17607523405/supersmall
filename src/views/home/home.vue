<template>
  <div id="home" >
    <navbar class="home-nave">
      <div slot="center">购物街</div>
    </navbar>
    <TabConrol :titles="['流行','新款','精选']"  @tabconclick="tabconclick" ref="tabconrol1" v-show="tabshow" class="tabconrol" />
    <scroll class="scroll" ref="scroll"
            :probe-type="3" @scroll="contentscroll"
             :pull-up-load="true"   @pullup="loadmore"     >
      <swiper :swipe="banners" @swipeImageLoad="swipeImageLoad" ref="swiper"/>
      <HomeRemmoved :recommnds="recommnds"></HomeRemmoved>
      <Featureview/>
      <TabConrol :titles="['流行','新款','精选']"  @tabconclick="tabconclick" ref="tabconrol"/>
      <Goods :goods=showgoods></Goods>
    </scroll>
    <backtop @click.native="backtop" v-show="isshow"></backtop>
  </div>
</template>
<script>
  import Backtop from "components/context/BackTop/Backtop";
  import Scroll from "components/common/scroll/Scroll";
  import Goods from "components/context/goods/Goods";
  import TabConrol from "components/context/tabconrol/TabConrol";
  import navbar from "components/common/navbar/NavBar"
  import swiper from "components/common/swiper/swiper"

  import Featureview from "./chidenhome/Featureview";
  import HomeRemmoved from "./chidenhome/HomeRemmoved";

  import {homedata} from "network/home";
  import {gethomerequest} from 'network/home'
  import {debounce} from "common/until";

  export default {
    name: "home",
    components: {
      navbar,
      swiper,
      HomeRemmoved,
      Featureview,
      TabConrol,
      Goods,
      Scroll,
      Backtop


    },
    data() {
      return {
        banners: [],
        recommnds: [],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]},
        },
        currenttype:'pop',
        isshow:false,
        TabConrolheight:0,
        tabshow:false,
        scrolly:0//记录离开home时的位置
      }
    },
    created() {
      //1.请求首页导航的数据
      this.gethometabbar()
      //2.请求展示的数据
      this.gethomedata('new');
      this.gethomedata('pop');
      this.gethomedata('sell')

    },
    mounted() {
      //3.监听item图片加载完成,并且使用debounce函数解决多次刷新问题
      const refresh=debounce( this.$refs.scroll.refresh,50)
      this.$bus.$on('itemimgload',()=>{
        refresh()
        // console.log('图片加载完成')
      })
    },
    methods: {
     //获取轮播图加载完成，得到offsettop的长度有利于TabConrol的固定位置
      swipeImageLoad(){
        console.log(this.$refs.tabconrol.$el.offsetTop)
        this.TabConrolheight=this.$refs.tabconrol.$el.offsetTop
      },

      //获取子组件传递过来的滚动位置
      contentscroll(position){
        // console.log(position);
        //1判断是否显示backtop组件
        this.isshow=-(position.y)>1000
        //2.判断是否显示tabconrol
        this.tabshow=-(position.y)>this.TabConrolheight
      },


      //返回顶部的事件，组件如果需要监听原生态事件必须使用native属性
      backtop(){
        this.$refs.scroll.scrollto(0,0)
      },
      loadmore(){
        this.gethomedata(this.currenttype);
        //解决图片没有加载出来无法向下滚动问题
        this.$refs.scroll.refresh();
      },



      //事件监听相关方法
      tabconclick(index){
        switch (index) {
           case 0:this.currenttype='pop'
                  break
           case 1:this.currenttype='new'
                break
           case 2:this.currenttype='sell'
        }
        //使得两个tabconrol点击事件一样
        this.$refs.tabconrol.count=index
        this.$refs.tabconrol1.count=index
      },

      //网络请求的相关方法
      gethometabbar () {
        gethomerequest().then(res => {
          this.banners = res.data.banner.list
          this.recommnds = res.data.recommend.list
        })
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
      }

    },
    computed:{
      showgoods(){
        return this.goods[this.currenttype].list
      }
    },
    activated() {
      this.$refs.scroll.scrollto(0,this.scrollY,0)
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.scrollY=this.$refs.scroll.getscrolly()

    }
  }
</script>

<style scoped>
  .home-nave {
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    z-index: 9;
  }
  #home{
   /*padding-top: 44px;*/
    height: 100vh;
    /*position: relative;*/
  }

  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
  .tabconrol{
    position: relative;
    z-index: 9;
  }
</style>
