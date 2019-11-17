<template>
    <router-link
        v-bind="$attrs"
        class="text-gray-700 text-sm font-semibold inline-flex items-center"
    >
        <slot />
        <Icon icon="add-outline" class="inline-block w-4 h-4 ml-2 fill-current text-gray-600" />
    </router-link>
</template>
