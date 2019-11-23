<template>
    <Main>
        <HalfContainer>
            <ListsIndexContainer />
        </HalfContainer>
    </Main>
</template>

<script>
    import ListsIndexContainer from '@/containers/ListsIndexContainer'

    import HalfContainer from '@/components/HalfContainer'

    export default {
        components: {
            HalfContainer,
            ListsIndexContainer,
        },
    }
</script>