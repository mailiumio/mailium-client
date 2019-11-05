import StoryWrapper from '@/components/StoryWrapper'

import Header from '@/components/Header'

export default { title: 'Header' }

export const Default = () => ({
    components: { StoryWrapper, Header },
    data() {
        return {
            navItems: [
                { title: 'Lists', link: '#', active: false },
                { title: 'People', link: '#', active: false }
            ],
            userNavItems: [
                {
                    title: 'Profile',
                    subTitle: 'bjorn@example.com',
                    link: '#',
                    active: false
                },
                {
                    title: 'Change Team',
                    subTitle: 'Personal Team',
                    link: '#',
                    active: false
                },
                { title: 'Sign out', link: '#', active: false }
            ],
            user: {
                name: 'Bjørn Lindholm',
                email: 'bjorn@example.com',
                avatar: 'https://picsum.photos/200'
            },
            team: {
                id: 1,
                name: 'Personal Team'
            }
        }
    },
    template: `
        <StoryWrapper>
            <Header :navItems="navItems" :userNavItems="userNavItems" :user="user" :team="team" />
        </StoryWrapper>
    `
})
