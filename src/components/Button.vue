<template>
    <button :class="variant">
        <slot />
    </button>
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
    button {
        @apply uppercase font-medium tracking-wide text-xs shadow;
        transition: transform 150ms ease-out;
    }

    button.primary,
    button.secondary,
    button.danger {
        @apply px-6 py-3 rounded;
    }

    button.primary {
        @apply bg-gray-900 text-white;
    }

    button[disabled].primary {
        @apply bg-gray-700 text-gray-300;
    }

    button.secondary {
        @apply bg-white text-black;
    }

    button[disabled].secondary {
        @apply text-gray-500;
    }

    button.danger {
        @apply bg-red-500 text-white;
    }

    button[disabled].danger {
        @apply bg-red-300;
    }

    button[disabled] {
        @apply cursor-not-allowed;
    }

    button:not([disabled]):hover {
        transform: translateY(-2px);
    }
</style>