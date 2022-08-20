<template>
    <div class="Item1">
        <h2>销售总量</h2>
        <div id="oneContent" class="chart">
            图标内容
        </div>
    </div>
</template>

<script>
    import {inject, onMounted, reactive} from 'vue'

    export default {
        name: "ItemOne",
        setup() {
            let $echarts = inject('echarts')
            let $http = inject('axios')
            let data = reactive({})
            let xData = reactive([])
            let yData = reactive([])

            async function getState() {
                data = await $http({url: "/one/data"})

            }

            function setData() {
                xData = data.data.chartData.chartData.map(v => v.title)
                yData = data.data.chartData.chartData.map(v => v.num)
            }

            onMounted(() => {
                let myChart = $echarts.init(document.getElementById("oneContent"))

                getState().then(() => {
                    setData()
                    // 处理数据
                    myChart.setOption({
                        grid:{
                            top:"3%",
                            bottom:"10%",
                            left:"1%",
                            right:"6%",
                            containLabel:true
                        },
                        xAxis: {
                            type: "value",
                            axisLine:{
                                lineStyle:{
                                    color:"#fff"
                                }
                            }
                        },
                        yAxis: {
                            type: "category",
                            data: xData,
                            axisLine:{
                                lineStyle:{
                                    color:"#fff"
                                }
                            }

                        },
                        series: [
                            {
                                type: 'bar',
                                data: yData,
                                itemStyle:{
                                    normal:{
                                        borderRadius:[0,20,20,0],

                                        color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                                            {
                                                offset:0,
                                                color:"#005eaa"
                                            },
                                            {
                                                offset:0.5,
                                                color:"#339ca8"
                                            },
                                            {
                                                offset:1,
                                                color:"#cda819"
                                            }
                                        ])
                                    }
                                }
                            }
                        ]
                    })
                })


            })
            return {getState, setData, xData, yData, data}
        }
    }
</script>

<style scoped lang="scss">
    .Item1 {
        h2 {
            height: 0.6rem;
            color: white;
            line-height: 0.6rem;
            font-size: 0.25rem;
            text-align: center;
        }

        .chart {
            height: 4.5rem;
        }
    }

</style>