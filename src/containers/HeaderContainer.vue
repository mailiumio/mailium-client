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
                    {
                        title: 'Change Team',
                        subTitle: 'XXX',
                        link: '#',
                    },
                    { title: 'Sign out', link: '#' },
                ]
            },
        },

        methods: {
            ...mapActions({
                getUser: 'auth/getUser',
            }),
        },

        mounted() {
            this.getUser(this.token)
        },
    }
</script>