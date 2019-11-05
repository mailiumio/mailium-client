import StoryWrapper from '@/components/StoryWrapper'

import Header from '@/components/Header'

export default { title: 'Header' }

export const Default = () => ({
    components: { StoryWrapper, Header },
    data() {
        return {
            navItems: [
                { label: 'Lists', link: '#', active: false },
                { label: 'People', link: '#', active: false }
            ]
        }
    },
    template: `
        <StoryWrapper>
            <Header :navItems="navItems" />
        </StoryWrapper>
    `
})
