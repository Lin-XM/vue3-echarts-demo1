<template>
    <div class="map" id="map">

    </div>
</template>

<script>
    import axios from 'axios'
    import {onMounted, reactive, inject} from 'vue'

    export default {
        name: "MapPage",
        setup() {
            let mapData = reactive({})
            let $echarts = inject('echarts')

            async function getState() {
                mapData = await axios.get('http://localhost:8080/map/china.json')
            }

            onMounted(() => {
                getState().then(() => {
                    $echarts.registerMap('map', mapData.data)
                    let mapChart = $echarts.init(document.getElementById('map'))
                    mapChart.setOption({
                        geo: {
                            map: "map",
                            itemStyle: {
                                areaColor: "#0099ff",
                                borderColor: "#fff",
                                shadowColor: 'rgba(230,130,70,0.5)',
                                shadowBlur: 30,

                            },
                            emphasis: {
                                focus: 'self',
                            }
                        },
                        tooltip: {
                            trigger: "item"
                        },
                        title: {
                            text: '城市销量',
                            left: "45%",
                            textStyle: {
                                color: "#FFF",
                                fontSize: 20,
                                textShadowBlur: 10,
                                textShadowColor: '#33ffff',

                            }
                        },
                        visualMap: {
                            type: 'continuous',
                            min: 100,
                            max: 5000,
                            calculable: true,
                            inRange: {
                                color: ['#50a3ba', '#eac736', '#d94e5d']
                            },
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        series: [
                            {
                                type: "scatter",
                                itemStyle: {
                                    color: 'black'
                                },

                                coordinateSystem: 'geo',
                                data: [
                                    {name: '北京', value: [116.405285,39.904989,16]},
                                    {name: '上海', value: [121.48, 31.22, 8675]},
                                    {name: '广州', value: [113.23, 23.16, 187]},
                                    {name: '深圳', value: [114.07, 22.62, 2461]},
                                    {name: '西安', value: [108.45, 34, 3421]},
                                ]
                            },
                        ]
                    })
                })
            })

            return {
                getState, mapData
            }
        }

    }
</script>

<style scoped lang="scss">
    .map {
        height: 100%;
        width: 100%;
    }
</style>