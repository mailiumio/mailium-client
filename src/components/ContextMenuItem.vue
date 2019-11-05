<template>
    <router-link :to="item.link" class="block px-4 py-3 border-t border-gray-200 hover:bg-gray-100">
        <span class="block text-sm font-medium">{{ item.title }}</span>
        <span v-if="item.subTitle" class="text-xs text-gray-600">{{ item.subTitle }}</span>
    </router-link>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
    }
</script>