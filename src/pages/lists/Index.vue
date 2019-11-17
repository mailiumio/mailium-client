<template>
    <Main>
        <HalfContainer>
            <Headline class="mb-4">Lists</Headline>
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
        </HalfContainer>
    </Main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import Panel from '@/components/Panel'
    import Headline from '@/components/Headline'
    import LinkButton from '@/components/LinkButton'
    import PanelEmpty from '@/components/PanelEmpty'
    import HalfContainer from '@/components/HalfContainer'
    import PanelItemLink from '@/components/PanelItemLink'

    export default {
        components: {
            Panel,
            Headline,
            LinkButton,
            PanelEmpty,
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
                entities: 'lists/entities',
                loading: 'lists/loading',
            }),

            lists() {
                return this.entities.map(entity => ({
                    id: entity.id,
                    name: entity.name,
                    link: `/link/${entity.id}`,
                }))
            },
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