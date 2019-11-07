<template>
    <Header v-if="user" :user="user" :navItems="navItems" :userNavItems="userNavItems" />
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import Header from '@/components/Header'
    import { mainNavigationItems } from '@/config/navigation'

    export default {
        components: {
            Header,
        },

        computed: {
            ...mapGetters({
                token: 'auth/token',
                user: 'auth/user',
                team: 'teams/team',
            }),
            navItems() {
                return mainNavigationItems
            },
            userNavItems() {
                return [
                    {
                        title: 'Profile',
                        subTitle: this.user.email,
                        link: '#',
                    },
                    ...(this.team
                        ? [
                              {
                                  title: 'Change Team',
                                  subTitle: this.team.name,
                                  link: '#',
                              },
                          ]
                        : []),
                    { title: 'Log out', link: '/logout' },
                ]
            },
        },

        methods: {
            ...mapActions({
                getUser: 'auth/getUser',
                getTeams: 'teams/getTeams',
            }),
        },

        mounted() {
            this.getUser(this.token)
            this.getTeams()
        },
    }
</script>