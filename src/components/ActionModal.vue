<template>
    <Modal @close="$emit('close')">
        <header class="flex items-center justify-between mb-6">
            <h2 class="text-xl md:text-2xl">{{ title }}</h2>

            <button @click="$emit('close')">
                <Icon icon="close" class="w-4 h-4 fill-current text-gray-500" />
            </button>
        </header>

        <p class="text-gray-700 leading-relaxed">
            <slot />
        </p>

        <template #footer>
            <footer class="flex justify-between">
                <Button variant="secondary" @click="$emit('close')">Cancel</Button>
                <Button variant="danger" @click="$emit('confirm')">Delete</Button>
            </footer>
        </template>
    </Modal>
</template>

<script>
    import Modal from '@/components/Modal'
    import Button from '@/components/Button'

    export default {
        components: {
            Modal,
            Button,
        },

        props: {
            title: String,
        },
    }
</script>