<template>
    <nav>
        <ul>
            <li v-for="item in items" :key="item.path" class="mb-2">
                <router-link :to="item.to" class="text-sm">{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            items: Array,
        },
    }
</script>

<style>
    .router-link-exact-active {
        @apply font-bold;
    }
</style>