<template>
    <Main>
        <Query resource="lists" type="show" @fetch="handler" #default="{ entity = {} }">
            <Fragment>
                <Headline class="mb-8">{{ entity.name }}</Headline>
                <router-view :list="entity"></router-view>
            </Fragment>
        </Query>
    </Main>
</template>

<script>
    import { mapActions } from 'vuex'

    import { Fragment } from 'vue-fragment'

    import Query from '@/components/Query'
    import Headline from '@/components/Headline'

    export default {
        components: {
            Query,
            Fragment,
            Headline,
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