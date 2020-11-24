<template>
  <div class="recommnds" >
    <div class="recommnds-item" v-for="(item,index) in recommnds" :key="index">
      <a :href="item.link"> <img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HomeRemmoved",
      props:{
        recommnds:{
            type:Array,
            default (){
              return[]
            }
          }
      }
    }
</script>

<style scoped>
.recommnds{
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom: 5px solid #eee;
  padding: 10px 0 15px;
}
  .recommnds-item{
    flex: 1;

  }
  .recommnds-item img{
    width: 65px;
    height: 65px;
  }
</style>
