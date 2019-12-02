<template>
    <div class="text-xs bg-gray-800 rounded shadow text-white font-medium px-2 py-1">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            duration: {
                type: Number,
                default: 3000,
            },
        },

        mounted() {
            setTimeout(() => {
                this.$emit('expired')
            }, this.duration)
        },
    }
</script>