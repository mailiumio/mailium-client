<template>
    <div
        class="fixed inset-0 bg-dark-faded flex items-end md:items-center md:justify-center"
        @click.self="$emit('close')"
    >
        <div class="bg-white rounded-t-lg p-12 md:rounded-lg md:max-w-md md:translate-y-50">
            <slot />
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