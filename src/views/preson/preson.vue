<template>
 <div class="pert">
 <NavBar class="preson-navbr">
   <div slot="center">个人信息</div>
 </NavBar>
   <Presonnavbar class="p-navbr"/>
   <Presonprice/>
   <Presoncenter />
  </div>
</template>

<script>
  import Presonprice from "./Chdilen/Presonprice";
  import Presonnavbar from "./Chdilen/Presonnavbar";
  import Presoncenter from "./Chdilen/Presoncenter";


  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "preson",
      components:{
        NavBar,
        Presonnavbar,
        Presonprice,
        Presoncenter
      }
    }
</script>

<style scoped>
 .preson-navbr{
   background-color: var(--color-tint);
   color: #f6f6f6;
 }
  .p-navbr{
    background-color: var(--color-tint);
    height: 70px;

  }

</style>
