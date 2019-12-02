<template>
    <div class="flex flex-col justify-center items-center py-10">
        <p class="text-gray-700 text-sm">{{ text }}</p>

        <div v-if="$scopedSlots.action" class="mt-6">
            <slot name="action" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
        },
    }
</script>