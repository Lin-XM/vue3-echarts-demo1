<template>
  <router-view ></router-view>
</template>

<script>
  import * as echarts from 'echarts'

  import {provide } from 'vue'
  export default {
    name: 'App',
    setup(){
      provide('echarts',echarts)
    }
  }
</script>
<style lang="scss" >
  body{
    background:url("./assets/bg3.jpeg") top center no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
