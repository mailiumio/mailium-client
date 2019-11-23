<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        props: {
            resource: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                default: 'index',
            },
        },

        computed: {
            entity() {
                if (this.type !== 'show') {
                    return null
                }

                return this.$store.getters[`${this.resource}/entity`](
                    this.$route.params?.id
                )
            },

            entities() {
                if (this.type !== 'index') {
                    return null
                }

                return this.$store.getters[`${this.resource}/entities`]
            },

            ...mapState({
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
                    loading: this.loading,
                    ...(this.type === 'show'
                        ? {
                              entity: this.entity,
                          }
                        : {}),
                    ...(this.type === 'index'
                        ? {
                              entities: this.entities,
                              pagination: this.pagination,
                          }
                        : {}),
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