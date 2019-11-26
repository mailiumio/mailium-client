<template>
    <div>
        <div class="md:flex md:justify-between md:items-end">
            <div class="mb-4 md:mb-0">
                <h3 class="font-bold">Delete List</h3>
                <p class="text-gray-800">This will permanently delete all subscribers and blasts</p>
            </div>
            <Button variant="danger" class="w-full md:w-auto md:ml-4">Delete</Button>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Button'

    export default {
        components: {
            Button,
        },
    }
</script>