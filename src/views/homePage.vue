<template>
    <div class="homepage">
        <header>
            <h1>地区温度大数据可视化</h1>
        </header>
        <section class="container">
            <section class="itemLeft">
                <itemPage>
                    <ItemOne/>
                </itemPage>
                <itemPage>
                    <ItemTwo/>
                </itemPage>
            </section>
            <section class="itemCenter">
                <MapPage />
            </section>
            <section class="itemRight">
                <itemPage>
                    <ItemThree/>
                </itemPage>
                <itemPage>
                    <ItemFour/>
                </itemPage>
            </section>
        </section>
    </div>
</template>

<script>

    import itemPage from '../components/ItemPage.vue'
    import ItemOne from '../components/ItemOne.vue'
    import ItemTwo from '../components/ItemTwo.vue'
    import ItemThree from '../components/ItemThree.vue'
    import ItemFour from '../components/ItemFour.vue'
    import MapPage from '../components/MapPage'


    export default {
        name: "homePage",
        components: {
            itemPage, ItemOne, ItemTwo, ItemThree, ItemFour,MapPage
        },
        setup(){


        }
    }
</script>

<style scoped lang="scss">
    .homepage {
        .container {
            min-width: 1200px;
            max-width: 1960px;
            margin: 0 auto;
            padding: 0.1rem .1rem;
            display: flex;

            .itemLeft, .itemRight {
                border: 1px solid black;
                flex: 3;
                color: white;
            }

            .itemCenter {
                flex: 5;
                color: white;
                height: 9.8rem;
                border:1px solid green;
                padding: 0.1rem;
                margin: 0.2rem;
            }
        }

        header {

            top: 0;
            height: 0.8rem;
            width: 100%;
            background-color: rgba(0, 0, 255, .2);

            h1 {
                font-size: 40px;
                color: white;
                text-align: center;
                line-height: 0.8rem;
            }

        }
    }

</style>