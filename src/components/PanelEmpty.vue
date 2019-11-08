<template>
    <div class="flex justify-center items-center h-24">
        <p class="text-gray-700 text-sm">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
        },
    }
</script>