<template>
    <div class="grid" :class="classes" :style="{ 'grid-gap': `${gap}rem` }">
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
            gap: {
                type: Number,
                default: 2,
            },
        },

        computed: {
            classes() {
                return {
                    [`grid-columns-minmax-${this.xs}`]: this.xs,
                    [`sm:grid-columns-minmax-${this.sm}`]: this.sm,
                    [`md:grid-columns-minmax-${this.md}`]: this.md,
                    [`lg:grid-columns-minmax-${this.lg}`]: this.lg,
                    [`xl:grid-columns-minmax-${this.xl}`]: this.xl,
                }
            },
        },
    }
</script>

<style>
    @responsive {
        .grid-columns-minmax-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .grid-columns-minmax-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .grid-columns-minmax-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .grid-columns-minmax-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .grid-columns-minmax-6 {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
    }
</style>