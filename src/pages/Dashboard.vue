<template>
    <div>
        <p>This is a protected route</p>
        <button @click="handleLogout">Logout</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                logout: 'auth/logout',
            }),
            handleLogout() {
                this.logout()

                this.$router.push('login')
            },
        },
    }
</script>