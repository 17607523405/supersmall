<template>
    <div class="check">
      <img src="~assets/img/common/check.png" alt="" :class="{active:checkshow}">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
          checkshow: {
            type: Boolean,
            default(){
              return false
            }
          }
        }
    }
</script>

<style scoped>

  .check img{
    border: 1px solid #cccccc;

    width: 18px;
    height: 18px;
    border-radius: 40%;
  }
  .active{
    background-color: red;
    border-color: red;
  }

</style>
