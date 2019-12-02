<template>
    <aside>
        <SidebarMenu :items="items" />
    </aside>
</template>

<script>
    import SidebarMenu from '@/components/SidebarMenu'

    export default {
        components: {
            SidebarMenu,
        },

        props: {
            list: Object,
        },

        computed: {
            items() {
                return [
                    {
                        name: 'Overview',
                        to: { name: 'list.overview', params: { id: this.list.id } },
                    },
                    {
                        name: 'Settings',
                        to: { name: 'list.settings', params: { id: this.list.id } },
                    },
                ]
            },
        },
    }
</script>