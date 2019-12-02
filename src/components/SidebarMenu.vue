<template>
    <nav>
        <ul class="flex overflow-x-scroll md:block">
            <li v-for="item in items" :key="item.path" class="mr-4 md:mb-2 md:mr-0">
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