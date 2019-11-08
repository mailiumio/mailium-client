import StoryWrapper from '@/components/StoryWrapper'

import Panel from '@/components/Panel'
import Button from '@/components/Button'
import PanelItem from '@/components/PanelItem'
import PanelEmpty from '@/components/PanelEmpty'
import PanelItemLink from '@/components/PanelItemLink'

export default { title: 'General/Panel' }

export const Empty = () => ({
    components: { StoryWrapper, Panel, PanelEmpty },
    template: `
        <StoryWrapper center container>
            <Panel>
                <PanelEmpty text="You don't have any lists yet" />
            </Panel>
        </StoryWrapper>
    `
})

export const EmptyWithAction = () => ({
    components: { StoryWrapper, Panel, PanelEmpty, Button },
    template: `
        <StoryWrapper center container>
            <Panel>
                <PanelEmpty text="You don't have any lists yet">
                    <template #action>
                        <Button>
                            Get Started
                        </Button>
                    </template>
                </PanelEmpty>
            </Panel>
        </StoryWrapper>
    `
})

export const WithItems = () => ({
    components: { StoryWrapper, Panel, PanelItem },
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
            <Panel>
                <PanelItem v-for="(item, i) in items" :key="i" :item="item" />
            </Panel>
        </StoryWrapper>
    `
})

export const WithLinkItems = () => ({
    components: { StoryWrapper, Panel, PanelItemLink },
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
            <Panel>
                <PanelItemLink v-for="(item, i) in items" :key="i" :item="item" />
            </Panel>
        </StoryWrapper>
    `
})
