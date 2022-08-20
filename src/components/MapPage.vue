<template>
    <div class="map" id="map">

    </div>
</template>

<script>
    import axios from 'axios'
    import {onMounted,reactive,inject} from 'vue'
    export default {
        name: "MapPage",
        setup(){
            let mapData = reactive({})
            let $echarts = inject('echarts')
            async function getState(){
                mapData = await axios.get('http://localhost:8080/map/china.json')
            }
            onMounted(()=>{
                getState().then(()=>{
                    console.log('map',mapData);
                    $echarts.registerMap('map',mapData.data)
                    let mapChart = $echarts.init(document.getElementById('map'))
                    mapChart.setOption({
                        geo:{
                            map:"map"
                        }
                    })
                })
            })

            return {
                getState,mapData
            }
        }

    }
</script>

<style scoped lang="scss">
.map{
    height: 100%;
    width: 100%;
}
</style>