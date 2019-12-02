<template>
    <div class="px-8 py-6 border-t first:border-t-0 border-gray-200 flex justify-between">
        <div class="text-sm font-medium">{{ item.name }}</div>
        <Icon v-if="icon" :icon="icon" class="w-4 fill-current text-gray-900" />
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
            icon: String,
        },
    }
</script>