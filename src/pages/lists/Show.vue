<template>
    <Main>
        <Query resource="lists" type="show" @fetch="handler" #default="{ entity = {} }">
            <router-view :list="entity"></router-view>
        </Query>
    </Main>
</template>

<script>
    import { mapActions } from 'vuex'

    import Query from '@/components/Query'

    export default {
        components: {
            Query,
        },

        methods: {
            ...mapActions({
                getList: 'lists/getList',
            }),

            handler() {
                this.getList(this.$route.params?.id)
            },
        },
    }
</script>