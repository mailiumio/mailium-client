<template>
    <div>
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
    import GridColumn from '@/components/GridColumn'

    export default {
        components: {
            Grid,
            GridColumn,
            ListSidebarContainer,
        },

        props: {
            list: Object,
        },
    }
</script>