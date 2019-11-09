import StoryWrapper from '@/components/StoryWrapper'

import Panel from '@/components/Panel'
import Button from '@/components/Button'
import PanelItem from '@/components/PanelItem'
import PanelEmpty from '@/components/PanelEmpty'
import PanelItemLink from '@/components/PanelItemLink'
import HalfContainer from '@/components/HalfContainer'

export default { title: 'General/Panel' }

export const Empty = () => ({
    components: { StoryWrapper, Panel, PanelEmpty, HalfContainer },
    template: `
        <StoryWrapper center container>
            <HalfContainer>
                <Panel>
                    <PanelEmpty text="You don't have any lists yet" />
                </Panel>
            </HalfContainer>
        </StoryWrapper>
    `
})

export const EmptyWithAction = () => ({
    components: { StoryWrapper, Panel, PanelEmpty, Button, HalfContainer },
    template: `
        <StoryWrapper center container>
            <HalfContainer>
                <Panel>
                    <PanelEmpty text="You don't have any lists yet">
                        <template #action>
                            <Button>
                                Get Started
                            </Button>
                        </template>
                    </PanelEmpty>
                </Panel>
            </HalfContainer>
        </StoryWrapper>
    `
})

export const WithItems = () => ({
    components: { StoryWrapper, Panel, PanelItem, HalfContainer },
    data() {
        return {
            items: [
                { name: 'Personal' },
                { name: 'Conference HQ' },
                { name: 'Mailium Pre-Launch' }
            ]
        }
    },
    template: `
        <StoryWrapper center container>
            <HalfContainer>
                <Panel>
                    <PanelItem v-for="(item, i) in items" :key="i" :item="item" />
                </Panel>
            </HalfContainer>
        </StoryWrapper>
    `
})

export const WithLinkItems = () => ({
    components: { StoryWrapper, Panel, PanelItemLink, HalfContainer },
    data() {
        return {
            items: [
                { name: 'Personal', link: '#' },
                { name: 'Conference HQ', link: '#' },
                { name: 'Mailium Pre-Launch', link: '#' }
            ]
        }
    },
    template: `
        <StoryWrapper center container>
            <HalfContainer>
                <Panel>
                    <PanelItemLink v-for="(item, i) in items" :key="i" :item="item" />
                </Panel>
            </HalfContainer>
        </StoryWrapper>
    `
})
