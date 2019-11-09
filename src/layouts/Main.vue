<template>
    <div class="font-sans min-h-screen bg-gray-100">
        <HeaderContainer />
        <div class="py-12 px-4 lg:max-w-5xl lg:mx-auto lg:px-0">
            <slot />
        </div>
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