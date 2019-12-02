<template>
    <Card>
        <SkeletonList v-if="loading" :length="3" />
        <slot v-else></slot>
    </Card>
</template>

<script>
    import Card from '@/components/Card'
    import SkeletonList from '@/components/SkeletonList'

    export default {
        components: {
            Card,
            SkeletonList,
        },

        props: {
            loading: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>