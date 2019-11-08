<template>
    <a :href="item.link" class="block border-t first:border-t-0 border-gray-200 hover:bg-gray-100">
        <PanelItem :item="item" icon="cheveron-right" />
    </a>
</template>

<script>
    import PanelItem from '@/components/PanelItem'

    export default {
        components: {
            PanelItem,
        },

        props: {
            item: Object,
        },
    }
</script>