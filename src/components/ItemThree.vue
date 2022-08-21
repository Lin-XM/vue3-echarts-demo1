<template>
    <div class="Item3">
        <h2>库存统计</h2>
        <div class="content" id="threeContent">
        </div>
    </div>
</template>

<script>
    import {inject, onMounted, reactive} from 'vue'

    export default {
        name: "ItemThree",
        setup() {
            let $echarts = inject('echarts')
            let $http = inject('axios')
            let data = reactive({})

            async function getState() {
                data = await $http({url: '/three/data'})

            }

            onMounted(() => {
                getState().then(() => {
                    let myChart = $echarts.init(document.getElementById('threeContent'))
                    myChart.setOption({
                        legend:{
                            top:'20'
                        },
                        tooltip:{
                            show:true,

                        },
                        series: [
                            {
                                type: 'pie',
                                data: data.data.chartData.chartData,
                                radius: [10, 100],
                                center: ["50%", "45%"],
                                roseType:'area',
                                itemStyle:{
                                    borderRadius:10
                                }
                            }
                        ]
                    })
                })
            })

            return {
                getState, data
            }
        }

    }
</script>

<style scoped lang="scss">
    .Item3{
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