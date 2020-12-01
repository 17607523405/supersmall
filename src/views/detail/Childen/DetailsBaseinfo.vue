<template>
    <div v-if="Object.keys(goods).length !== 0 " class="base-info">
         <div class="info-title">{{goods.title}}</div>
         <div class="info-price">
           <span class="n-price">{{goods.newprice}}</span>
           <span class="o-price">{{goods.oldprice}}</span>
           <span v-if="goods.discount" class="info-discount">{{goods.discount}}</span>
         </div>
         <div class="info-other">
           <span>{{goods.colums[0]}}</span>
           <span>{{goods.colums[1]}}</span>
           <span>{{goods.servies[goods.servies.length-1].name}}</span>
         </div>
      <div class="info-service">
               <span class="info-service-item" v-for="index in goods.servies.length-1" :key="index" >
                <img :src="goods.servies[index-1].icon">
                 <span>{{goods.servies[index-1].name}}</span>
               </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsBaseinfo",
        props:{
          goods:{
            type:Object,
            default(){
              return{}
            }
          }
      }
    }
</script>

<style scoped>
.info-title{
 font-size: 15px;
  margin-top: 10px;
  margin-left: 8px;
}
.info-price{
  margin-top: 8px;
  margin-left: 20px;
}
.n-price{
  font-size: 16px;
  color: var(--color-hight-text);
}
  .o-price{
    font-size: 6px;
    color: #666666;
    text-decoration: line-through;
    margin-left: 10px;

  }
  .info-discount{
    margin-left: 24px;
    /*background-color: #ff5777;*/
    font-size: 16px;
    color: var(--color-hight-text);
  }
.info-other{
  font-size: 12px;
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
  color: #666666;

}
  .info-other span{
    flex: 1;
    text-align: center;
    justify-content: space-around;
    padding-right: 5px;

  }
  .info-service{
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    line-height: 80px;
    height: 80px;
    border-top: solid 1px darkgray;
    border-bottom: solid 3px darkgray;

  }
  .info-service-item{
    /*padding-top: 8px;*/
    text-align: center;
    flex: 1;
    padding-bottom: 8px;

  }
  .info-service-item img{
    width: 12px;
    height: 12px;
  }
</style>
