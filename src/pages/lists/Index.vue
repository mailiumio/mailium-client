<template>
    <Main>
        <HalfContainer>
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
            <div class="flex justify-center mt-4"></div>
        </HalfContainer>
    </Main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import Panel from '@/components/Panel'
    import Headline from '@/components/Headline'
    import LinkButton from '@/components/LinkButton'
    import PanelEmpty from '@/components/PanelEmpty'
    import LinkAddButton from '@/components/LinkAddButton'
    import HalfContainer from '@/components/HalfContainer'
    import PanelItemLink from '@/components/PanelItemLink'

    export default {
        components: {
            Panel,
            Headline,
            LinkButton,
            PanelEmpty,
            LinkAddButton,
            HalfContainer,
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
        },
    }
</script>