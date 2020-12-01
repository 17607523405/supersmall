<template>
    <div v-if="Object.keys(detailInfo).length !==0" class="goods-info" >
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-keys">
       <span>{{detailInfo.detailImage[0].key}}</span>
      </div>
      <div class="info-img" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="detailimage">
      </div>

    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
      props:{
        detailInfo:{
          type:Object,
          default(){
            return{}
          }
        }
      },
      data(){
        return{
          count:0,
          imagelength:0
        }
      },
      methods:{
        detailimage(){
          //判断所有图片加载完成，进行回调子传父事件
             if (++this.count===this.imagelength){
                  this.$emit('imageload')
             }
        }
      },
      watch:{
        detailInfo(){
          //获取所有的图片
          this.imagelength=this.detailInfo.detailImage[0].list.length
        }
      }
    }
</script>

<style scoped>

  .start{
    position: absolute;
    left: 0;
    width: 30%;
    height: 1px;
    background-color: #666666;

  }
  .desc{
    font-size: 15px;

    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    text-align: center;

  }

  .end{

    position: absolute;
    right: 0px;
    width: 30%;
    height: 2px;
    background-color: #666666;
    margin-top: 8px;
  }
  .info-desc .start::before, .info-desc .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-keys{
    margin-top: 15px;
    margin-left: 5px;
  }
  .info-img img{
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }
</style>
