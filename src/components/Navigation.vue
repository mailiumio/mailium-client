<template>
    <nav class="md:flex md:items-center">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            class="block px-4 py-3 border-t border-gray-200 md:p-0 md:border-0 md:ml-4"
        >
            <span class="block text-sm font-medium md:text-base">{{ item.title }}</span>
            <span v-if="item.subTitle" class="text-xs text-gray-600">{{ item.subTitle }}</span>
        </router-link>
    </nav>
</template>

<script>
    export default {
        props: {
            items: Array,
        },
    }
</script>