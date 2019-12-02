<template>
    <Fragment>
        <ListRenameForm :list="list" :submit="updateList" :loading="loading" :errors="errors" />
    </Fragment>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Fragment } from 'vue-fragment'

    import ListRenameForm from '@/components/ListRenameForm'

    export default {
        components: {
            Fragment,
            ListRenameForm,
        },

        props: {
            list: Object,
        },

        computed: {
            ...mapGetters({
                loading: 'lists/loading',
                errors: 'lists/errors',
            }),
        },

        methods: {
            ...mapActions({
                updateList: 'lists/updateList',
            }),
        },
    }
</script>