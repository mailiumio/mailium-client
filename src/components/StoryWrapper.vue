<template>
    <div
        class="min-h-screen bg-gray-100 font-sans"
        :class="{'flex justify-center items-center': center}"
    >
        <div class="w-full" :class="{ 'p-4 lg:w-256': container }">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            center: {
                type: Boolean,
                default: false,
            },
            container: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>