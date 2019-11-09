<template>
    <div class="bg-white rounded shadow">
        <SkeletonList v-if="loading" :length="3" />
        <slot v-else></slot>
    </div>
</template>

<script>
    import SkeletonList from '@/components/SkeletonList'

    export default {
        components: {
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