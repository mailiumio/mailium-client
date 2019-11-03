<template>
    <p>You are now being logged in</p>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        mounted() {
            const { status, token } = this.$route.query
            if (!status === 'success') {
                this.$router.replace('/login')
            }

            this.saveToken(token)
            this.getUser(token)
            this.$router.replace('/dashboard')
        },

        methods: {
            ...mapActions({
                saveToken: 'auth/saveToken',
                getUser: 'auth/getUser',
            }),
        },
    }
</script>