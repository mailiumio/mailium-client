import StoryWrapper from '@/components/StoryWrapper'

import Card from '@/components/Card'

export default { title: 'General/Card' }

export const Default = () => ({
    components: { StoryWrapper, Card },
    template: `
        <StoryWrapper center>
            <Card class="p-8">
                Card Content
            </Card>
        </StoryWrapper>
    `
})
