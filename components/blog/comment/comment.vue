<script setup>
import { z } from 'zod'
import { InsertComments } from '../../../queries/blogs/comments.gql'
const UID = useCookie('UID')
const route = useRoute();
const layout = useLayout();
const {
    formatDate
} = useHelpers();
const props = defineProps(['comment'])
const emit = defineEmits(['refetch'])

const {
    mutate: AddComment,
    onDone: onAddDone,
    onError: onAddError,
    loading: addLoading
} = useMutation(InsertComments)
const commentInputRef = ref(null)
const items = (type, row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => {
            if (type === 'comment') {

                console.log("comment", commentInputRef.value)
                commentInputRef.value?.focus();
            } else if (type === 'reply') {
                console.log("reply", row)
            }
        }
    }, {
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
    }]
]

const CommentState = ref({
    comment: ''
})
const CommentSchema = z.object({
    comment: z.string().min(1, 'Please, write your comment'),
})

const ADD = () => {
    AddComment({ blog_id: route.params.id, commentor_id: UID.value, comment: CommentState.value.comment })
    onAddDone(res => {
        emit('refetch')
        CommentState.value = {}
    })
    onAddError(err => {
        layout.value.showAlert = { error: true, message: err.message }
    })
}

const totalComments = computed(() => {
    let count = props.comment?.length;
    props.comment?.map(comm => {
        count += comm.replies_aggregate.aggregate.count
    })
    return count
})

</script>

<template>

    <section class="bg-white dark:bg-gray-950 py-8 lg:py-16 antialiased">
        <div class="w-full px-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion {{
                        totalComments }}</h2>


            </div>
            <UForm :schema="CommentSchema" :state="CommentState" class="mb-6" @submit="ADD">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg ">
                    <UFormGroup name="comment">

                        <label for="comment" class="sr-only">Your comment</label>
                        <UTextarea v-model="CommentState.comment" id="comment" rows="6" ref="commentInputRef"
                            tabindex="0"
                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."></UTextarea>
                    </UFormGroup>
                </div>
                <UButton :loading="addLoading" type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Post comment
                </UButton>
            </UForm>
            <div v-for="i in props.comment" :key="i">

                <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-950">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p
                                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                <img class="mr-2 w-6 h-6 rounded-full" :src="i.author.profile_detail[0].profile_picture"
                                    :alt="i.author?.beeer_name">{{
                        i.author.profile_detail[0].first_name + " " +
                        i.author.profile_detail[0].last_name }} | {{
                        i.author.beeer_name }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                <time> {{ formatDate(i.created_at) }} {{ i.updated_at
                        !== i.created_at ? '(edited)' :
                        ''
                                    }}</time>
                            </p>
                        </div>
                        <UDropdown v-if="i.author.id === UID" :items="items('comment', i)"
                            :popper="{ placement: 'bottom-start' }">
                            <button
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 3">
                                    <path
                                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                        </UDropdown>



                    </footer>
                    <p class="text-gray-500 dark:text-gray-400 pl-8">{{ i.comment }}</p>
                    <div class="flex items-center mt-4 space-x-4">
                        <button type="button"
                            class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                            <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
                <article v-for="reply in i.replies" :key="reply"
                    class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-950">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p
                                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                <img class="mr-2 w-6 h-6 rounded-full"
                                    :src="reply.author.profile_detail[0].profile_picture"
                                    :alt="reply.author.beeer_name" />
                                {{
                        reply.author.profile_detail[0].first_name + " " +
                        reply.author.profile_detail[0].last_name }} | {{
                        reply.author.beeer_name }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                <time> {{ formatDate(reply.created_at) }} {{
                        reply.updated_at !== reply.created_at ? '(edited)' :
                            ''
                    }}</time>
                            </p>
                        </div>
                        <UDropdown v-if="reply.author.id === UID" :items="items('reply', reply)"
                            :popper="{ placement: 'bottom-start' }">

                            <button
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 3">
                                    <path
                                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                        </UDropdown>

                    </footer>
                    <p class="text-gray-500 dark:text-gray-400">{{ reply.reply }}</p>

                </article>
            </div>

        </div>
    </section>

</template>