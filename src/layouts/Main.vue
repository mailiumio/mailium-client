<template>
    <div class="font-sans min-h-screen bg-gray-100">
        <HeaderContainer />
        <div class="py-12 px-4 md:px-6 lg:max-w-5xl lg:mx-auto lg:px-0">
            <slot />
        </div>
        <FeedbackContainer />
    </div>
</template>

<script>
    import HeaderContainer from '@/containers/HeaderContainer'
    import FeedbackContainer from '@/containers/FeedbackContainer'

    export default {
        components: {
            HeaderContainer,
            FeedbackContainer,
        },
    }
</script>