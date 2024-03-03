<script setup>
import { BlogValidationSchema } from '../../../zod/BlogSchema'
import { update_blogs_query } from '../../../queries/blogs/update.gql'
import { upload_image_query } from '../../../queries/others.gql'

import { get_single_blog_query } from '../../../queries/blogs/get.gql'
const UID = useCookie('UID')
const route = useRoute();
const { onResult, onError, loading, refetch } = useQuery(get_single_blog_query, { author_id: UID.value, id: route.params.id })
const { mutate: UpdateBlog, onDone: onUpdateDone, onError: onUpdateError, loading: updateLoading } = useMutation(update_blogs_query)
const { mutate: UploadImage, onDone: onUploadDone, onError: onUploadError, loading: uploadLoading } = useMutation(upload_image_query)

const test = ref('')
const layout = useLayout();
onResult(res => {
    State.value = { ...res.data?.blogs[0] }
    test.value = res.data.blogs
})
onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})
const State = ref({
    base64: '',
    title: '',
    subtitle: '',
    description: '',
    category: '',
    tags: []
})

const POST = () => {
    if (State.value.base64) {
        UploadImage({ base64: State.value.base64?.base64?.split(",")[1] })
        onUploadDone(res => [
            UpdateBlog({ author_id: UID.value, image: res.data.UploadImage?.url, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, category: State.value.category, tags: State.value.tags })
        ])
        onUploadError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })
        onUpdateDone(res => {
            refetch();
            layout.value.showAlert = { error: true, message: 'Update successfull' }
        })
        onUpdateError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })
    } else {
        UpdateBlog({ id: State.value.id, image: State.value.image, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, category: State.value.category, tags: State.value.tags })

        onUpdateDone(res => {
            refetch();
            layout.value.showAlert = { error: true, message: 'Update successfull' }
        })
        onUpdateError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })
    }
}

</script>


<template>
    <div class="p-8 mb-64 pb-64">
        <div v-if="loading">
            <VUEInnerLoading />
        </div>
        <div v-else class="w-full h-screen  bg-white dark:bg-black rounded-lg">
            <div class="p-4 text-zinc-700 text-xl font-medium  leading-loose">
                Blog post form</div>
            <div class="pl-16 w-full">
                <VUEImage @onbase64="(n) => State.image = n" :image="State.image" />
            </div>
            <UForm :schema="BlogValidationSchema" :state="State" class="px-16" @submit="POST">
                <div class="grid grid-cols-2 p-8  gap-4">
                    <div class="flex flex-col pl-4 pt-4 w-full pr-2 space-y-4 ">
                        <UFormGroup name="title" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="title" class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Title
                                </label>
                                <UInput v-model="State.title" size="xl" id="title" placeholder="Blog title" type="text"
                                    class="  w-full " />

                            </div>
                        </UFormGroup>
                        <UFormGroup name="subtitle" :eager-validation="true">

                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="subtitle"
                                    class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Subtitle
                                </label>
                                <UInput v-model="State.subtitle" size="xl" id="subtitle" placeholder="Blog subtitle"
                                    type="text" class=" w-full " />

                            </div>
                        </UFormGroup>



                    </div>
                    <div class="flex flex-col pl-4 pt-4 w-full pr-2 space-y-4">
                        <UFormGroup name="category" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="category"
                                    class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Category
                                </label>
                                <UInput v-model="State.category" size="xl" id="category" placeholder="Blog category"
                                    type="text" class=" w-full " />

                            </div>
                        </UFormGroup>
                        <UFormGroup name="tags" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="tags" class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Tags
                                </label>
                                <USelectMenu v-model="State.tags" name="category" :multiple="true"
                                    selected-icon="i-heroicons-hand-thumb-up-solid" class="w-full" placeholder="Select tags"
                                    :options="['Structural', 'Finishing']" />
                            </div>
                        </UFormGroup>


                    </div>
                    <div class="col-span-full mt-4">
                        <UFormGroup name="description" :eager-validation="true">
                            <label class="w-1/3 text-lg p-2 text-blue-500 underline  font-medium  leading-normal">
                                The Blog
                            </label>
                            <VUEWYSIWYG @change="(n) => State.description = n" :data="State.description" />
                        </UFormGroup>
                    </div>
                </div>
                <div class="flex justify-end gap-4">
                    <UButton to="/account/blogs" size="lg" color="primary" variant="outline">Discard</UButton>
                    <UButton :loading="uploadLoading || updateLoading" type="submit" size="lg" color="primary">Update blog
                    </UButton>

                </div>
            </UForm>
        </div>

    </div>
</template>