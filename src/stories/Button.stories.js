import StoryWrapper from '@/components/StoryWrapper'

import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import LinkAddButton from '@/components/LinkAddButton'

export default { title: 'General/Button' }

export const Primary = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button>
                Button
            </Button>
        </StoryWrapper>
    `,
})

export const Secondary = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button variant="secondary">
                Button
            </Button>
        </StoryWrapper>
    `,
})

export const Danger = () => ({
    components: { StoryWrapper, Button },
    template: `
        <StoryWrapper center>
            <Button variant="danger">
                Button
            </Button>
        </StoryWrapper>
    `,
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
    `,
})

export const Link = () => ({
    components: { StoryWrapper, LinkButton },
    template: `
        <StoryWrapper center>
            <LinkButton to="#">
                LinkButton
            </LinkButton>
        </StoryWrapper>
    `,
})

export const LinkAdd = () => ({
    components: { StoryWrapper, LinkAddButton },
    template: `
        <StoryWrapper center>
            <LinkAddButton to="#">
                Create new list
            </LinkAddButton>
        </StoryWrapper>
    `,
})
