import {debounce} from "./until";
import Backtop from "components/context/BackTop/Backtop";
export const mixin={
  data(){
    return{
      itemlisten:null
    }
  },
  mounted(){
    //3.监听item图片加载完成,并且使用debounce函数解决多次刷新问题
    const refresh=debounce( this.$refs.scroll.refresh,50);
    this.itemlisten=()=>{
      refresh()
      // console.log('图片加载完成')
    };
    this.$bus.$on('itemimgload',this.itemlisten)
  }
}
export const backtopmix={
  components:{
    Backtop
  },
  data() {
    return {
      isshow:false
    }
  },
  methods:{
    //返回顶部的事件，组件如果需要监听原生态事件必须使用native属性
    backtop(){
      this.$refs.scroll.scrollto(0,0)
    }
  }
}
