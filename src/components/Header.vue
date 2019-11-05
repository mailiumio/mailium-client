<template>
    <header class="bg-white shadow">
        <div class="md:flex md:justify-between md:px-6 md:py-4 lg:max-w-5xl lg:mx-auto lg:px-0">
            <div class="flex items-center justify-between px-4 py-2 md:p-0">
                <Logo class="h-8" />

                <button
                    class="text-black focus:outline-none focus:text-gray-600 md:hidden"
                    @click="toggleNav"
                >
                    <Icon icon="menu" class="w-6 h-6 fill-current" />
                </button>
            </div>
            <Navigation :class="{'hidden': !navOpen}" class="md:block" :items="navItems" />
        </div>
    </header>
</template>

<script>
    import Logo from '@/components/Logo'
    import Navigation from '@/components/Navigation'

    export default {
        components: {
            Logo,
            Navigation,
        },

        props: {
            navItems: Array,
        },

        data() {
            return {
                navOpen: false,
            }
        },

        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen
            },
        },
    }
</script>
