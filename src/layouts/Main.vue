<template>
    <div class="font-sans min-h-screen bg-gray-100">
        <HeaderContainer />
        <slot />
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