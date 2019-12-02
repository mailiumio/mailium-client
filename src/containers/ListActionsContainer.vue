<template>
    <div>
        <div class="md:flex md:justify-between md:items-end">
            <div class="mb-4 md:mb-0">
                <h3 class="font-bold">Delete List</h3>
                <p class="text-gray-800">This will permanently delete all subscribers and blasts</p>
            </div>
            <Button variant="danger" class="w-full md:w-auto md:ml-4" @click="open">Delete</Button>
            <ActionModal
                v-if="showModal"
                :title="`Delete ${list.name}`"
                @close="close"
                @confirm="confirm"
            >Deleting this list will permanently delete all subscribers and emails.</ActionModal>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import Button from '@/components/Button'
    import ActionModal from '@/components/ActionModal'

    export default {
        components: {
            Button,
            ActionModal,
        },

        props: {
            list: Object,
        },

        data() {
            return {
                showModal: false,
            }
        },

        methods: {
            ...mapActions({
                deleteList: 'lists/deleteList',
            }),

            open() {
                this.showModal = true
            },

            close() {
                this.showModal = false
            },

            confirm() {
                this.deleteList(this.list.id)
            },
        },
    }
</script>