<template>
    <div
        class="fixed inset-0 bg-dark-faded flex items-end md:items-center md:justify-center"
        @click.self="$emit('close')"
    >
        <div class="rounded-t-lg overflow-hidden md:rounded-lg md:w-120 md:translate-y-50">
            <div class="bg-white p-10 md:p-12">
                <slot />
            </div>

            <div v-if="$scopedSlots.footer" class="bg-gray-200 px-10 py-6 md:px-12">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    @responsive {
        .translate-y-50 {
            transform: translateY(-50%);
        }
    }
</style>