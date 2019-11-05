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
            <div class="md:flex md:items-center md:relative">
                <Navigation :class="{'hidden': !navOpen}" class="md:block" :items="navItems" />
                <Navigation :class="{'hidden': !navOpen}" class="md:hidden" :items="userNavItems" />

                <button
                    class="hidden md:w-6 md:h-6 md:block md:ml-6 focus:outline-none"
                    @click="toggleUserNav"
                >
                    <img :src="user.avatar" class="md:rounded" />
                </button>

                <ContextMenu
                    :items="userNavItems"
                    class="hidden"
                    :class="{ 'md:block': userNavOpen }"
                />
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from '@/components/Logo'
    import Navigation from '@/components/Navigation'
    import ContextMenu from '@/components/ContextMenu'

    export default {
        components: {
            Logo,
            Navigation,
            ContextMenu,
        },

        props: {
            navItems: Array,
            userNavItems: Array,
            user: Object,
        },

        data() {
            return {
                navOpen: false,
                userNavOpen: false,
            }
        },

        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen
            },

            toggleUserNav() {
                this.userNavOpen = !this.userNavOpen
            },
        },
    }
</script>
