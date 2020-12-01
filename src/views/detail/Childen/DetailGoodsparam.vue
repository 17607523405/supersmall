<template>
    <div v-if="Object.keys(goodsparam).length !==0" class="goodsparam">
      <table v-for="(table,index) in goodsparam.sizes" class="info-size" :key="index"  cellpadding="15px" >
        <tr v-for="(tr,indey) in  table" :key="indey" class="info-size-tr">
          <td v-for="(td,indez) in tr" :key="indez" class="info-size-td">{{td}}</td>
        </tr>
      </table>
      <table  class="info-others">
        <tr v-for="(info,index) in goodsparam.infos" :key="index" class="info-others-tr">
          <td class="info-others-key">{{info.key}}:</td>
          <td class="info-others-value">{{info.value}}</td>
        </tr>
      </table>
      <div class="info-img">
        <img :src="goodsparam.image" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsparam",
        props:{
          goodsparam:{
            type:Object,
            default(){
              return{}
            }
          }
        }
    }
</script>

<style scoped>
  .goodsparam{
    padding: 20px 15px;
    border-top: 4px solid silver;
  }
  .goodsparam table{
    width: 100%;
    border-collapse: collapse;
  }
  .goodsparam table tr{
    height: 42px;
  }
  .goodsparam table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1) ;
  }


  .info-size{
   width: 100%;
   margin-top: 10px;
    text-align: center;
  }

.info-others{
  width: 100%;
  margin-top: 10px;


  border-bottom: 1px solid rgba(0,0,0,0.1);
}
  info-others-key{

    font-size: 10px;
  }
  .info-others-value{
    color: var(--color-hight-text);
    width:85%;
    font-size: 13px;
    letter-spacing: 1px;

  }
</style>
