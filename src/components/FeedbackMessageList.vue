<template>
    <transition-group tag="ul" name="list" class="fixed bottom-0 pin-x mb-4">
        <li v-for="message in messages" :key="message.id">
            <FeedbackMessage
                class="mt-2"
                :duration="message.duration"
                @expired="() => onRemove(message.id)"
            >{{ message.text }}</FeedbackMessage>
        </li>
    </transition-group>
</template>

<script>
    import FeedbackMessage from '@/components/FeedbackMessage'

    export default {
        components: {
            FeedbackMessage,
        },

        props: {
            messages: Array,
            onRemove: Function,
        },
    }
</script>


<style scoped>
    @responsive {
        .pin-x {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 100ms ease-out;
    }
    .list-enter,
    .list-leave-to {
        opacity: 0;
        transform: translateY(2rem);
    }
</style>