<template>
    <nav class="md:flex md:items-center">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            class="block px-4 py-3 border-t border-gray-200 text-sm font-medium md:p-0 md:border-0 md:ml-4"
        >{{ item.label }}</router-link>
    </nav>
</template>

<script>
    export default {
        props: {
            items: Array,
        },
    }
</script>