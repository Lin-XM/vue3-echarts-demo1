<template>
    <div class="Item4">
        <h2>库存统计图</h2>
        <div class="content" id="fourContent">
        </div>
    </div>
</template>

<script>
    import {inject, reactive, onMounted} from 'vue'

    export default {
        name: "ItemFour",
        setup() {
            let $echarts = inject('echarts')
            let $http = inject('axios')
            let data = reactive({})

            async function getState() {
                data = await $http({url: "/four/data"})
            }

            onMounted(() => {
                getState().then(() => {
                    let myChart = $echarts.init(document.getElementById('fourContent'))
                    myChart.setOption({
                        xAxis: {
                            type: 'category',
                            data: data.data.chartData.chartData.day,
                            axisLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            }
                        },
                        yAxis: {
                            type: "value",
                            axisLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend:{
                            top:"20"
                        },
                        grid:{
                            left:"3%",
                            right:"4%",
                            bottom:"10%",
                            containLabel:true
                        },
                        series: [
                            {
                                name: '服饰',
                                type: "bar",
                                data: data.data.chartData.chartData.num.Clothes,
                                stack: "total",
                                label:{
                                    show:true
                                },
                                emphasis:{
                                    focus:'series'
                                }
                            },
                            {
                                name: '数码',
                                type: "bar",
                                data: data.data.chartData.chartData.num.Chemicals,
                                stack: "total",
                                label:{
                                    show:true
                                },
                                emphasis:{
                                    focus:'series'
                                }
                            },
                            {
                                name: '家电',
                                type: "bar",
                                data: data.data.chartData.chartData.num.Electrical,
                                stack: "total",
                                label:{
                                    show:true
                                },
                                emphasis:{
                                    focus:'series'
                                }
                            },
                            {
                                name: '家具',
                                type: "bar",
                                data: data.data.chartData.chartData.num.digit,
                                stack: "total",
                                label:{
                                    show:true
                                },
                                emphasis:{
                                    focus:'series'
                                }
                            },
                            {
                                name: '日化',
                                type: "bar",
                                data: data.data.chartData.chartData.num.Gear,
                                stack: "total",
                                label:{
                                    show:true
                                },
                                emphasis:{
                                    focus:'series'
                                }
                            },
                        ]
                    })
                })
            })

            return {
                data, getState
            }
        }

    }
</script>

<style scoped lang="scss">
    .Item4 {
        h2 {
            height: 0.6rem;
            color: white;
            line-height: 0.6rem;
            font-size: 0.25rem;
            text-align: center;
        }

        .content {
            height: 4.5rem;
        }
    }

</style>