<template>
    <div class="itempage">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ItemPage"
    }
</script>

<style scoped lang="scss">
    .itempage{
        height: 4.8rem ;
        border: 1px solid blue;
        margin: 0.2rem;
        background-color: rgba(12, 100, 255, 0.87);
    }

</style>