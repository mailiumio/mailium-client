<template>
    <div :style="{ 'grid-column': `span ${span}` }">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: Number,
                default: 1,
            },
        },
    }
</script>