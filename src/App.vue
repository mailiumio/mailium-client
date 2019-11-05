<template>
    <div id="app" class="font-sans min-h-screen bg-gray-100">
        <HeaderContainer />
        <router-view />
    </div>
</template>

<script>
    import HeaderContainer from '@/containers/HeaderContainer'

    export default {
        components: {
            HeaderContainer,
        },
    }
</script>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>