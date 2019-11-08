import StoryWrapper from '@/components/StoryWrapper'

import Panel from '@/components/Panel'
import Button from '@/components/Button'
import PanelEmpty from '@/components/PanelEmpty'

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
