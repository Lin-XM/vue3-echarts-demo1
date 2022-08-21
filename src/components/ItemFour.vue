<template>
    <div class="Item4">
        <h2>销售总量</h2>
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
                    console.log("柱状图", data);
                    let myChart = $echarts.init(document.getElementById('fourContent'))
                    myChart.setOption({
                        xAxis: {
                            type: 'category',
                            data: data.data.chartData.chartData.day
                        },
                        yAxis: {
                            type: "value"
                        },
                        series: [
                            {
                                name: '服饰',
                                type: "bar",
                                data: data.data.chartData.chartData.num.Clothes
                            }
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