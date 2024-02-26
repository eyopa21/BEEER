<template>
    <div>


        <button v-if="props.variation == 'edit'" :type="props.type" :class="props.className" :disabled="props.loading"
            class="inline-flex items-center disabled:opacity-50 py-2 px-3 text-sm font-medium text-center text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover-text-gray-100 hover:scale-[1.02] transition-all">
            <span v-if="!props.loading" class="inline-flex">

                <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                    </path>
                    <path fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"></path>
                </svg>
                <span>

                    {{ props.name }}
                </span>
            </span>
            <span v-else>
                <Icon name="la:circle-notch" class="animate-spin w-6 h-6 text-white" />Loading...
            </span>
        </button>
        <button v-if="props.variation == 'delete'" :type="props.type" :disabled="props.loading"
            class="inline-flex items-center disabled:opacity-50 py-2 px-3 text-sm font-medium text-center text-white dark:text-gray-300 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md dark:shadow-sm shadow-gray-300 dark:shadow-gray-600 hover:scale-[1.02] transition-transform">
            <span v-if="loading">
                <Icon name="la:circle-notch" class="animate-spin w-6 h-6 text-white" />Loading...
            </span>
            <span v-else class="inline-flex">

                <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                {{ props.name }}
            </span>
        </button>
        <button v-if="props.variation == 'normal'" :disabled="props.loading" :type="props.type" :class="props.className"
            class="inline-flex items-center disabled:opacity-50 py-2.5 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 sm:ml-auto shadow-md shadow-gray-300 dark:shadow-none hover:scale-[1.02] transition-transform">
            <svg v-if="props.icon == 'plus' && !props.loading" class="mr-2 -ml-1 w-6 h-6" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"></path>
            </svg>
            <svg v-if="props.icon == 'profile-pic' && !props.loading" class="mr-2 -ml-1 w-4 h-4" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z">
                </path>
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
            </svg>
            <span v-if="props.loading">
                <Icon name="la:circle-notch" class="animate-spin w-6 h-6 text-white" />Loading...
            </span>
            <span v-else>

                {{ props.name }}
            </span>
            <svg v-if="props.icon == 'send'" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                </path>
            </svg>

        </button>

    </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    variation: {

        type: String,
        required: true
    },
    className: {
        type: String,
        required: false
    },
    loading: {
        type: Boolean,
        required: false
    }
})


</script>