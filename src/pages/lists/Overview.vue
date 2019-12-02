<template>
    <div>
        <Headline class="mb-8">{{ list.name }}</Headline>
        <Grid>
            <GridColumn>
                <ListSidebarContainer :list="list" />
            </GridColumn>
        </Grid>
    </div>
</template>

<script>
    import ListSidebarContainer from '@/containers/ListSidebarContainer'

    import Grid from '@/components/Grid'
    import Headline from '@/components/Headline'
    import GridColumn from '@/components/GridColumn'

    export default {
        components: {
            Grid,
            Headline,
            GridColumn,
            ListSidebarContainer,
        },

        props: {
            list: Object,
        },
    }
</script>