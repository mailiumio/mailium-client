import StoryWrapper from '@/components/StoryWrapper'

import Panel from '@/components/Panel'
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
