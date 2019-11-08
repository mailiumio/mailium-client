import StoryWrapper from '@/components/StoryWrapper'

import Button from '@/components/Button'

export default { title: 'General/Button' }

export const Primary = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button>
                Button
            </Button>
        </StoryWrapper>
    `
})

export const Secondary = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button variant="secondary">
                Button
            </Button>
        </StoryWrapper>
    `
})

export const Disabled = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button disabled>
                Button
            </Button>
            <Button variant="secondary" disabled>
                Button
            </Button>
        </StoryWrapper>
    `
})
