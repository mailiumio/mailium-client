<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            xs: {
                type: Number,
                default: 1,
            },
            sm: {
                type: Number,
                default: null,
            },
            md: {
                type: Number,
                default: null,
            },
            lg: {
                type: Number,
                default: null,
            },
            xl: {
                type: Number,
                default: null,
            },
        },

        computed: {
            classes() {
                return {
                    [`col-span-${this.xs}`]: this.xs,
                    [`sm:col-span-${this.sm}`]: this.sm,
                    [`md:col-span-${this.md}`]: this.md,
                    [`lg:col-span-${this.lg}`]: this.lg,
                    [`xl:col-span-${this.xl}`]: this.xl,
                }
            },
        },
    }
</script>