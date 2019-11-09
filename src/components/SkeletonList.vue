<template>
    <div class="p-8">
        <div v-for="i in length" :key="i" class="skeleton"></div>
    </div>
</template>

<script>
    export default {
        props: {
            length: {
                type: Number,
                default: 1,
            },
        },
    }
</script>

<style>
    .skeleton {
        @apply bg-gray-300 h-8 mb-6 rounded w-3/4 relative overflow-hidden;
    }

    .skeleton:last-of-type {
        @apply mb-0;
    }

    .skeleton:after {
        content: '';
        @apply block h-24 w-24 absolute;
        top: 50%;
        left: -30%;
        transform: translateY(-50%);
        animation: loading 1.5s infinite;

        background: radial-gradient(
            circle,
            theme('colors.gray.400') 0%,
            theme('colors.gray.300') 80%
        );
    }

    @keyframes loading {
        to {
            left: 100%;
        }
    }
</style>