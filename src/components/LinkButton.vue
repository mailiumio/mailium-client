<template>
    <router-link v-bind="$attrs" :class="variant">
        <slot />
    </router-link>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: 'primary',
            },
        },
    }
</script>

<style scoped>
    a {
        @apply block uppercase font-medium tracking-wide text-xs shadow;
        transition: transform 150ms ease-out;
    }

    a.primary,
    a.secondary {
        @apply px-6 py-3 rounded;
    }

    a.primary {
        @apply bg-gray-900 text-white;
    }

    a.secondary {
        @apply bg-white text-black;
    }

    a:hover {
        transform: translateY(-2px);
    }
</style>