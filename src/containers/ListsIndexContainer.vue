<template>
    <Query resource="lists" @fetch="handler" #default="{ entities, loading, pagination }">
        <Fragment>
            <div class="flex justify-between mb-4">
                <Headline>Lists</Headline>
                <LinkAddButton to="/lists/new">Create new list</LinkAddButton>
            </div>
            <Panel v-if="entities.length" :loading="loading">
                <PanelItemLink v-for="list in entities" :key="list.id" :item="list" />
            </Panel>
            <Panel v-else :loading="loading">
                <PanelEmpty text="You don't have any lists yet">
                    <template #action>
                        <LinkButton to="lists/new">Get Started</LinkButton>
                    </template>
                </PanelEmpty>
            </Panel>
            <div class="flex justify-center mt-4" v-if="pagination.last > 1">
                <Pagination url="/lists" :current="pagination.current" :last="pagination.last" />
            </div>
        </Fragment>
    </Query>
</template>

<script>
    import { mapActions } from 'vuex'

    import { Fragment } from 'vue-fragment'

    import Query from '@/components/Query'
    import Panel from '@/components/Panel'
    import Headline from '@/components/Headline'
    import LinkButton from '@/components/LinkButton'
    import PanelEmpty from '@/components/PanelEmpty'
    import Pagination from '@/components/Pagination'
    import LinkAddButton from '@/components/LinkAddButton'
    import PanelItemLink from '@/components/PanelItemLink'

    export default {
        components: {
            Query,
            Panel,
            Fragment,
            Headline,
            LinkButton,
            PanelEmpty,
            Pagination,
            LinkAddButton,
            PanelItemLink,
        },

        methods: {
            ...mapActions({
                getListsFromTeam: 'lists/getListsFromTeam',
            }),

            handler(props) {
                this.getListsFromTeam(props.team?.id)
            },
        },
    }
</script>