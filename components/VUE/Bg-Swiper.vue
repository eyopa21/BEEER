<script setup>
const testimonials = ref([
    {
        content:
            "Eyob is a smart, reliable and skilled software developer.His coding abilities and problem- solving skills have positively impacted our projects.He consistently produce efficient code and adapt well to changing requirements. Thank you",
        name: "Samuel Ashagrre",
        role: "Teacher and Department head @BDU",
        image:
            "https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?w=740&t=st=1700686316~exp=1700686916~hmac=99e472c005c62f5bf6b8c8c41bdae4bf7d5d9c31a1bef2ee6147b0eb4287341d",
        gradient:
            "bg-gradient-to-l from-primary-500 to-teal-500 dark:from-primary-500 dark:to-teal-800",
    },
    {
        content:
            "Eyob understands the requirements quite well, and implementation is praiseworthy. He puts in his mind and gives real good practical suggestions. Would surely work on more projects with him in future. Recommend that one should try out his work. I believe you would like his work",
        name: "Amanuel Teshayu",
        role: "Intership mentor",
        image:
            "https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?w=740&t=st=1700686316~exp=1700686916~hmac=99e472c005c62f5bf6b8c8c41bdae4bf7d5d9c31a1bef2ee6147b0eb4287341d",
        gradient:
            "bg-gradient-to-r from-primary-500 to-teal-500 dark:from-primary-500 dark:to-teal-800",
    },
    {
        content:
            "Eyob is a smart, reliable and skilled software developer.His coding abilities and problem- solving skills have positively impacted our projects.He consistently produce efficient code and adapt well to changing requirements. Thank you",
        name: "Samuel Ashagrre",
        role: "Teacher and Department head @BDU",
        image:
            "https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?w=740&t=st=1700686316~exp=1700686916~hmac=99e472c005c62f5bf6b8c8c41bdae4bf7d5d9c31a1bef2ee6147b0eb4287341d",
        gradient:
            "bg-gradient-to-l from-primary-500 to-teal-500 dark:from-primary-500 dark:to-teal-800",
    },
    {
        content:
            "Eyob understands the requirements quite well, and implementation is praiseworthy. He puts in his mind and gives real good practical suggestions. Would surely work on more projects with him in future. Recommend that one should try out his work. I believe you would like his work",
        name: "Amanuel Teshayu",
        role: "Intership mentor",
        image:
            "https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?w=740&t=st=1700686316~exp=1700686916~hmac=99e472c005c62f5bf6b8c8c41bdae4bf7d5d9c31a1bef2ee6147b0eb4287341d",
        gradient:
            "bg-gradient-to-r from-primary-500 to-teal-500 dark:from-primary-500 dark:to-teal-800",
    },
]);
</script>

<template>
    <div class="">
        <ClientOnly>
            <Swiper :modules="[SwiperAutoplay, SwiperEffectCoverflow]" :slides-per-view="3" :loop="true"
                :effect="'coverflow'" :pagination="{
                    clickable: true,
                }" :autoplay="{
    delay: 2000,
    loop: true,
}" class="w-full">
                <SwiperSlide v-for="(testimonial, key) in testimonials" :key="key">
                    <div>
                        <div class="w-full h-full">
                            <div :class="testimonial.gradient" class="p-10 rounded-3xl">
                                <div class="h-screen lg:py-5 cursor-grab focus:cursor-grabbing">
                                    <p class="text-gray-100 lg:text-xl">
                                        "{{ testimonial.content }}"
                                    </p>
                                    <div class="flex items-center mt-8">
                                        <img src="https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?w=740&t=st=1700686316~exp=1700686916~hmac=99e472c005c62f5bf6b8c8c41bdae4bf7d5d9c31a1bef2ee6147b0eb4287341d"
                                            class="rounded-full w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
                                        <div class="ml-4">
                                            <h4 class="text-lg font-semibold">
                                                {{ testimonial.name }}
                                            </h4>
                                            <p class="text-sm opacity-90 leading-tight">
                                                {{ testimonial.role }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </ClientOnly>
    </div>
</template>
