import StoryWrapper from '@/components/StoryWrapper'

import Header from '@/components/Header'

export default { title: 'Header' }

export const Default = () => ({
    components: { StoryWrapper, Header },
    data() {
        return {
            navItems: [
                { title: 'Lists', link: '#' },
                { title: 'People', link: '#' }
            ],
            userNavItems: [
                {
                    title: 'Profile',
                    subTitle: 'bjorn@example.com',
                    link: '#'
                },
                {
                    title: 'Change Team',
                    subTitle: 'Personal Team',
                    link: '#'
                },
                { title: 'Sign out', link: '#' }
            ],
            user: {
                name: 'Bjørn Lindholm',
                email: 'bjorn@example.com',
                avatar: 'https://picsum.photos/200'
            }
        }
    },
    template: `
        <StoryWrapper>
            <Header :navItems="navItems" :userNavItems="userNavItems" :user="user" />
        </StoryWrapper>
    `
})
