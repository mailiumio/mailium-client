import StoryWrapper from '@/components/StoryWrapper'

import Headline from '@/components/Headline'

export default { title: 'General/Headline' }

export const H1 = () => ({
    components: { StoryWrapper, Headline },
    template: `
        <StoryWrapper center>
            <Headline>
                Heading 1
            </Headline>
        </StoryWrapper>
    `
})
