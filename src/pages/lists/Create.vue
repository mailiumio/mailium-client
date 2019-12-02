<template>
    <Main>
        <HalfContainer>
            <Headline class="mb-4">New List</Headline>
            <form @submit.prevent="submit">
                <Card class="p-6 md:px-10 py-8">
                    <p class="mb-6">A list contains subscribers and emails sent to the subscribers.</p>
                    <Field
                        label="Name"
                        placeholder="Pre-launch"
                        class="mb-6"
                        :errors="errors.name"
                        v-model="form.name"
                        required
                    />
                    <div class="flex justify-end">
                        <Button type="submit" class="w-full md:w-auto" :disabled="loading">Create</Button>
                    </div>
                </Card>
            </form>
        </HalfContainer>
    </Main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    import Card from '@/components/Card'
    import Field from '@/components/Field'
    import Button from '@/components/Button'
    import Headline from '@/components/Headline'
    import HalfContainer from '@/components/HalfContainer'

    export default {
        components: {
            Card,
            Field,
            Button,
            Headline,
            HalfContainer,
        },

        mounted() {
            this.setLoading(false)
        },

        data() {
            return {
                form: {
                    name: '',
                },
            }
        },

        computed: {
            ...mapGetters({
                loading: 'lists/loading',
                errors: 'lists/errors',
            }),
        },

        methods: {
            ...mapActions({
                createList: 'lists/createList',
                setLoading: 'lists/setLoading',
            }),
            submit() {
                this.createList(this.form)
            },
        },
    }
</script>