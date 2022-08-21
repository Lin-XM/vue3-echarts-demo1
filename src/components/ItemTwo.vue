<template>
    <div class="Item2">
        <h2>月售销量</h2>
        <div class="content" id="twoContent">
            图标内容
        </div>
    </div>
</template>

<script>
    import {inject, reactive, onMounted} from 'vue'

    export default {
        name: "ItemTwo",
        setup() {
            let $http = inject('axios')
            let $ehcarts = inject('echarts')
            let data = reactive({})

            async function getState() {
                data = await $http({url: '/two/data'})
            }

            onMounted(() => {
                    getState().then(() => {
                        console.log('折线图表', data);
                        let myChart = $ehcarts.init(document.getElementById('twoContent'))
                        myChart.setOption({
                            xAxis: {
                                type: 'category',
                                data: data.data.chartData.chartData.day,
                                boundaryGap: false
                            },
                            yAxis: {
                                type: "value",

                            },
                            series: [
                                {
                                    name: '服饰',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Clothes,
                                    smooth: true,                    // 平滑曲线
                                    showSymbol: false,               // 隐藏 symbol 点位
                                    stack: 'Total',                  // 数据堆叠
                                    lineStyle:{
                                        width:0
                                    },
                                    emphasis:{
                                        focus:'series'                //选中隐藏其他数据线段
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new $ehcarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                {
                                                    offset: 0,
                                                    color: "rgb(128,255,165)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgb(1,191,236)"
                                                }
                                            ]
                                        )
                                    }
                                },
                                {
                                    name: '数码',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Chemicals,
                                    smooth: true,
                                    showSymbol: false,               // 隐藏 symbol 点位
                                    stack: 'Total',                  // 数据堆叠
                                    lineStyle:{
                                        width:0
                                    },
                                    emphasis:{
                                        focus:'series'                //选中隐藏其他数据线段
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new $ehcarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                {
                                                    offset: 0,
                                                    color: "rgb(0,221,255)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgb(77,119,255)"
                                                }
                                            ]
                                        )
                                    }


                                },
                                {
                                    name: '家电',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Electrical,
                                    smooth: true,
                                    showSymbol: false,               // 隐藏 symbol 点位
                                    stack: 'Total',                  // 数据堆叠
                                    lineStyle:{
                                        width:0
                                    },
                                    emphasis:{
                                        focus:'series'                //选中隐藏其他数据线段
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new $ehcarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                {
                                                    offset: 0,
                                                    color: "rgb(55,165,255)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgb(116,21,219)"
                                                }
                                            ]
                                        )
                                    }


                                },
                                {
                                    name: '家具',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.digit,
                                    smooth: true,
                                    showSymbol: false,               // 隐藏 symbol 点位
                                    stack: 'Total',                  // 数据堆叠
                                    lineStyle:{
                                        width:0
                                    },
                                    emphasis:{
                                        focus:'series'                //选中隐藏其他数据线段
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new $ehcarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                {
                                                    offset: 0,
                                                    color: "rgb(255,0,135)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgb(135,0,157)"
                                                }
                                            ]
                                        )
                                    }



                                },
                                {
                                    name: '日化',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Gear,
                                    smooth: true,
                                    showSymbol: false,               // 隐藏 symbol 点位
                                    stack: 'Total',                  // 数据堆叠
                                    lineStyle:{
                                        width:0
                                    },
                                    emphasis:{
                                        focus:'series'                //选中隐藏其他数据线段
                                    },
                                    areaStyle: {
                                        opacity: 0.8,
                                        color: new $ehcarts.graphic.LinearGradient(0, 0, 0, 1,
                                            [
                                                {
                                                    offset: 0,
                                                    color: "rgb(255,191,0)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgb(224,62,76)"
                                                }
                                            ]
                                        )
                                    }


                                },

                            ]
                        })
                    })
                }
            )


            return {
                data, getState
            }
        }
    }
</script>

<style scoped lang="scss">
    .Item2 {
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