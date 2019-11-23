<template>
    <Fragment>
        <div class="flex justify-between mb-4">
            <Headline>Lists</Headline>
            <LinkAddButton to="/lists/new">Create new list</LinkAddButton>
        </div>
        <Panel v-if="lists.length" :loading="loading">
            <PanelItemLink v-for="list in lists" :key="list.id" :item="list" />
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
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Fragment } from 'vue-fragment'

    import Panel from '@/components/Panel'
    import Headline from '@/components/Headline'
    import LinkButton from '@/components/LinkButton'
    import PanelEmpty from '@/components/PanelEmpty'
    import Pagination from '@/components/Pagination'
    import LinkAddButton from '@/components/LinkAddButton'
    import PanelItemLink from '@/components/PanelItemLink'

    export default {
        components: {
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
        },

        computed: {
            ...mapGetters({
                team: 'teams/team',
                lists: 'lists/entities',
                loading: 'lists/loading',
                pagination: 'lists/pagination',
            }),
        },

        watch: {
            team: {
                handler: function(newTeam) {
                    if (newTeam) {
                        this.getListsFromTeam(newTeam.id)
                    }
                },
                immediate: true,
            },
            $route(to, from) {
                if (to.name === from.name) {
                    this.getListsFromTeam(this.team.id)
                }
            },
        },
    }
</script>