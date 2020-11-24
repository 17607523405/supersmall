<template>
    <div class="wraper" ref="wraper">
      <div class="context">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "Scroll",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type: Boolean,
          default: false

        }
      },
        data(){
          return{
            scroll:null
          }
                   },
      mounted() {
          // console.log(this.$refs.wraper)
        //创建scroll对象
          this.scroll=new Bscroll(this.$refs.wraper,{
            pullUpLoad:this.pullUpLoad,
            click:true,
            probeType:this.probeType

          })
        //监听滚动位置
        this.scroll.on('scroll',(position)=>{
          //子传父事件
          this.$emit('scroll',position)
          // console.log(position)
        })
        //上拉加载事件
        this.scroll.on('pullingUp',()=>{
          // console.log('上拉加载完成')

          this.$emit('pullup')
        })

      },
      methods:{
          //创建回到顶部的方法
           scrollto(x,y, time=500){
             //解决当scroll未加载完成无法调用内部方法的问题
            this.scroll && this.scroll.scrollTo(x,y,time)
           },
          finishpullup(){
            this.scroll && this.scroll.finishPullUp()
          },
        refresh(){
          console.log('-----')
          this.scroll && this.scroll.refresh()
        },
        getscrolly(){
         return  this.scroll ?this.scroll.y:0
        }

      }

    }
</script>

<style scoped>
.wraper{

}
</style>
