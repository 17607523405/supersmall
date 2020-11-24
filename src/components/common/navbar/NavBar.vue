<template>
    <div class="navbar">
      <div id="left"><slot name="left"></slot></div>
      <div id="center"><slot name="center"></slot></div>
      <div id="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.navbar{
  height: 44px;
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
}
  #right,#left{
    width: 60px;

  }
  #center{
    flex: 1;

  }
</style>
