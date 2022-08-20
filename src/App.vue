<template>
  <router-view ></router-view>
</template>

<script>
  import * as echarts from 'echarts'
  import axios from 'axios'
  import {provide } from 'vue'

  // 设置基本路径
  axios.defaults.baseURL='http://localhost:8888'
  export default {
    name: 'App',
    setup(){
      provide('echarts',echarts)
      provide('axios',axios)
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
