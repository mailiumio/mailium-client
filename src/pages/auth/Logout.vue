<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                logout: 'auth/logout',
            }),
        },
        mounted() {
            this.logout()

            this.$router.push('login')
        },
        render() {
            return null
        },
    }
</script>