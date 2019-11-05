<template>
    <nav>
        <ContextMenuItem v-for="(item, i) in items" :key="i" :item="item" />
    </nav>
</template>

<script>
    import ContextMenuItem from '@/components/ContextMenuItem'

    export default {
        components: {
            ContextMenuItem,
        },

        props: {
            items: Array,
        },
    }
</script>

<style scoped>
    nav {
        @apply absolute bg-white shadow right-0;
        top: 100%;
    }
</style>