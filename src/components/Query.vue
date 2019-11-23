<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        props: {
            resource: {
                type: String,
                required: true,
            },
        },

        computed: {
            ...mapState({
                entities(state, getters) {
                    return getters[`${this.resource}/entities`]
                },
                loading(state, getters) {
                    return getters[`${this.resource}/loading`]
                },
                pagination(state, getters) {
                    return getters[`${this.resource}/pagination`]
                },
            }),

            ...mapGetters({
                team: 'teams/team',
            }),

            queryProps() {
                return {
                    team: this.team,
                    entities: this.entities,
                    loading: this.loading,
                    pagination: this.pagination,
                }
            },
        },

        methods: {
            fetch() {
                return this.$emit('fetch', this.queryProps)
            },
        },

        watch: {
            team: {
                handler: function(newTeam) {
                    if (newTeam) {
                        this.fetch()
                    }
                },
                immediate: true,
            },
            $route(to, from) {
                if (to.name === from.name) {
                    this.fetch()
                }
            },
        },

        render() {
            return this.$scopedSlots.default(this.queryProps)
        },
    }
</script>