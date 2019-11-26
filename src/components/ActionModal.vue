<template>
    <Modal>
        <header class="flex items-center justify-between mb-6">
            <h2 class="text-xl md:text-2xl">
                <slot name="headline" />
            </h2>

            <button>
                <Icon icon="close" class="w-4 h-4 fill-current text-gray-500" />
            </button>
        </header>

        <p class="text-gray-700 leading-relaxed">
            <slot name="content" />
        </p>

        <template #footer>
            <footer class="flex justify-between">
                <slot name="actions" />
            </footer>
        </template>
    </Modal>
</template>

<script>
    import Modal from '@/components/Modal'

    export default {
        components: {
            Modal,
        },
    }
</script>