<template>
    <div v-if="props.type === 'select'">
        <label for="settings-language" class="block mb-2 text-sm font-medium text-gray-900">{{ props.label }}</label>
        <select @input="$emit('emit-input', value)" v-model="value" id="settings-language" name="countries"
            class="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5">
            <option>education</option>
            <option>experience</option>

        </select>
        <span v-if="errorMessage" class="text-red-500 animate-zoom">

            {{ errorMessage }}
        </span>
    </div>
    <div v-else>


        <div v-if="props.name == 'searchAll'" class="relative mt-1 lg:w-80">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input @input="$emit('emit-input', value)" :type="props.type" v-model="value" :name="props.name"
                class="bg-gray-50 dark:bg-gray-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 dark:border-gray-600 dark:text-white dark:focus:ring-fuchsia-700 dark:focus:border-fuchsia-600 block w-full pl-10 p-2.5"
                :placeholder="props.placeholder">
        </div>
        <div v-else>

            <label :for="props.name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">{{ props.label
            }}</label>
            <textarea @input="$emit('emit-input', value)" v-if="props.textarea" v-model="value" :id="props.id"
                :rows="$route.name.slice(0, -5) == 'blogs' ? '4' : $route.name.slice(0, -5) == 'messages-reply-id' ? '10' : '3'"
                :name="props.name"
                class="block p-4 w-full text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-200  focus:border-fuchsia-300  dark:focus:ring-fuchsia-700  dark:focus:border-fuchsia-600"
                :placeholder="props.placeholder"></textarea>

            <input v-else @input="$emit('emit-input', value)" :class="props.className" :type="props.type" :name="props.name"
                :id="props.id" v-model="value"
                class="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-800 sm:text-sm rounded-lg focus:ring-2  focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 focus:border-fuchsia-300 dark:focus:border-fuchsia-600 block w-full p-2.5"
                :placeholder="props.placeholder">
            <span v-if="errorMessage" class="text-red-500 animate-zoom">

                {{ errorMessage }}
            </span>

        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['emit-input'])

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        required: true,
        type: String
    },
    placeholder: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false
    },
    rule: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    textarea: {
        type: Boolean,
        required: false
    },
    value: {
        required: false
    },
    className: {
        type: String,
        required: false
    },
})

const value = ref('')
</script>

<style>
.animate-zoom {

    animation-name: animate-fadeIn;
    animation-duration: .5s
}
</style>