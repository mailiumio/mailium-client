<template>
    <Main>
        <Query resource="lists" type="show" @fetch="handler" #default="{ entity = {} }">
            <Headline class="mb-4">{{ entity.name }}</Headline>
        </Query>
    </Main>
</template>

<script>
    import { mapActions } from 'vuex'

    import Query from '@/components/Query'
    import Headline from '@/components/Headline'

    export default {
        components: {
            Query,
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