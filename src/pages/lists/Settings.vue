<template>
    <div>
        <Headline class="mb-8">{{ list.name }} - Settings</Headline>
        <Grid :md="4" :lg="6">
            <GridColumn :md="1" :lg="1">
                <ListSidebarContainer :list="list" />
            </GridColumn>
            <GridColumn :md="3" :lg="4">
                <Card class="p-8 md:p-12">
                    <div class="mb-12">
                        <Headline :level="2" class="mb-4 pb-1">Settings</Headline>
                        <ListSettingsContainer :list="list" />
                    </div>

                    <div>
                        <Headline :level="2" class="pb-1">Actions</Headline>
                    </div>
                </Card>
            </GridColumn>
        </Grid>
    </div>
</template>

<script>
    import ListSidebarContainer from '@/containers/ListSidebarContainer'
    import ListSettingsContainer from '@/containers/ListSettingsContainer'

    import Grid from '@/components/Grid'
    import Card from '@/components/Card'
    import Headline from '@/components/Headline'
    import GridColumn from '@/components/GridColumn'

    export default {
        components: {
            Grid,
            Card,
            Headline,
            GridColumn,
            ListSidebarContainer,
            ListSettingsContainer,
        },

        props: {
            list: Object,
        },
    }
</script>