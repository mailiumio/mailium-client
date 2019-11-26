<template>
    <FeedbackMessageList :messages="messages" :onRemove="removeMessage" />
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import FeedbackMessageList from '@/components/FeedbackMessageList'

    export default {
        components: {
            FeedbackMessageList,
        },

        computed: {
            ...mapGetters({
                messages: 'feedback/entities',
            }),
        },

        methods: {
            ...mapActions({
                removeMessage: 'feedback/removeMessage',
            }),
        },
    }
</script>
