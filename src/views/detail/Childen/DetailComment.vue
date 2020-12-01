<template>
    <div class="detailcomment" v-if="Object.keys(commentinfo).length !==0">
      <div class="info-head">
        <div class="head-title">用户评价</div>
        <div class="head-more">更多</div>
      </div>
      <div class="info-user">
        <img :src="commentinfo.user.avatar" alt="">
        <span>{{commentinfo.user.uname}}</span>
      </div>
      <div class="comment-other">
      <div class="comment-word">{{commentinfo.content}}</div>
        <div>
          <span class="other-date">{{commentinfo.created |showDate}}</span>
          <span class="other-style">{{commentinfo.style}}</span>
        </div>
        <div class="other-img">
          <img  v-for="(item , index) in commentinfo.images"   :src="item" alt="" :key="index">
        </div>
      </div>
    </div>
</template>

<script>
  import {formatDate} from "common/until";

  export default {
        name: "DetailComment",
      props:{
        commentinfo:{
          type:Object,
          default(){
            return{}
          }
        }
      },
    filters:{
      showDate(value){
        //1.先将时间转成Date对象
      const date=new Date(value*1000)
        //2.将date格式化
        return formatDate(date,'yyyy-MM-dd ')
      }
    }
    }
</script>

<style scoped>
  .detailcomment{
    border-bottom: 3px solid rgba(0,0,0,0.1);
    padding-bottom: 15px;
    margin-bottom: 10px;
  }
 .info-head{
   display: flex;
   /*justify-content: space-around;*/
   padding-bottom: 20px;
   padding-top: 20px;
   border-top: 3px solid rgba(0,0,0,0.1);
   border-bottom: 3px solid rgba(0,0,0,0.1);
 }
  .head-title{
    width: 50%;
    text-align: left;
    font-size: 14px;
    margin-left: 10px;
  }
  .head-more{
    width: 50%;
    text-align: right;
    font-size: 14px;
    margin-right: 10px;
  }
  .info-user{
    display: flex;
    margin-left: 10px;
  }
  .info-user img{
    width: 20%;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 5px;

  }
  .info-user span{
    margin-left: 15px;
    font-size: 13px;
   margin-top: 30px;
  }
 .other-img img{
   width: 30%;
   height: 120px;
   overflow: hidden;
 }
  .comment-word{
    font-size: 13px;
    margin-left: 3px;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }
  .other-date{
    font-size: 14px;
    margin-right: 10px;
  }
</style>
