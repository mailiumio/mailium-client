<template>
    <div
        class="grid"
        :style="{ 'grid-template-columns': `repeat(${columns}, 1fr)`, 'grid-gap': `${gap}rem` }"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Number,
                default: 6,
            },
            gap: {
                type: Number,
                default: 2,
            },
        },
    }
</script>

<style scoped>
    .grid {
        display: grid;
    }
</style>