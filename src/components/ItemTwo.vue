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
                                boundaryGap:false
                            },
                            yAxis: {
                                type: "value",

                            },
                            series: [
                                {
                                    name: '服饰',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Clothes
                                },
                                {
                                    name: '数码',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Chemicals
                                },
                                {
                                    name: '家电',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.Electrical
                                },
                                {
                                    name: '家具',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.digit
                                },
                                {
                                    name: '日化',
                                    type: "line",
                                    data: data.data.chartData.chartData.num.gear
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
    .Item2{
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