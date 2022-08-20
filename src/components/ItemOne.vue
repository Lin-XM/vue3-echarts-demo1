<template>
    <div>
        <h2>销售总量</h2>
        <div id="oneContent">
            图标内容
        </div>
    </div>
</template>

<script>
    import {inject,onMounted } from 'vue'
    import axios from'axios'

    export default {
        name: "Item1",
        setup(){
            let $echarts = inject('echarts')
            async function getState(){
                let dataItem1 =  await axios({url:"http://localhost:8888/one/data"})
                console.log(dataItem1);
            }
            onMounted(()=>{
                getState()
               let myChart =  $echarts.init(document.getElementById("oneContent"))
                myChart.setOption({
                    xAixs:{
                        type:"value"
                    },
                    yAixs:{
                        type:"category"
                    },
                    series:[
                        {
                            type:'bar'
                        }
                    ]
                })
            })
            return {getState}
        }
    }
</script>

<style scoped lang="scss">

</style>