<template>
    <div>
        <label v-if="label" class="block text-xs text-gray-500 font-medium mb-1">{{ label }}</label>
        <input
            :type="type"
            :placeholder="placeholder"
            class="block w-full px-5 py-3 rounded border text-sm focus:outline-none focus:border-gray-400"
            :class="{ 'border-gray-200': errors.lenght === 0, 'border-red-500': errors.length > 0 }"
            :required="required"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <ul v-if="errors.length">
            <li v-for="(error, i) in errors" :key="i" class="text-sm text-red-500 mt-1">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'text',
            },
            placeholder: String,
            label: String,
            errors: {
                type: Array,
                default: () => [],
            },
            required: {
                type: Boolean,
                default: false,
            },
            value: {},
        },
    }
</script>