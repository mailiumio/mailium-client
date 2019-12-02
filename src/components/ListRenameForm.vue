<template>
    <form @submit.prevent="() => submit(form)" class="md:flex md:items-end">
        <Field
            placeholder="Pre-launch"
            label="Name"
            v-model="form.name"
            :errors="errors.name"
            required
            class="mb-4 md:flex-1 md:mr-4 md:mb-0"
        />
        <Button variant="secondary" type="submit" class="w-full md:w-auto">Rename</Button>
    </form>
</template>

<script>
    import Field from '@/components/Field'
    import Button from '@/components/Button'

    export default {
        components: {
            Field,
            Button,
        },

        props: {
            list: Object,
            submit: Function,
            loading: Boolean,
            errors: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                form: {
                    id: this.list.id,
                    name: this.list.name,
                },
            }
        },

        watch: {
            list(newList) {
                if (newList.id) {
                    this.form.id = newList.id
                }
                if (newList.name) {
                    this.form.name = newList.name
                }
            },
        },
    }
</script>