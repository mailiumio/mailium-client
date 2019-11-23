<template>
    <ul class="flex">
        <li v-for="i in last" :key="i">
            <router-link
                :to="{ path: url, query: { page: i } }"
                class="px-1 text-gray-600 font-medium"
                :class="{ 'text-gray-900': i === current }"
            >{{ i }}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                required: true,
            },
            current: {
                type: Number,
                required: true,
            },
            last: {
                type: Number,
                required: true,
            },
        },
    }
</script>