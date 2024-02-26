// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/tailwind.css"],
  modules: ['@nuxt/ui', 'nuxt-swiper', "@nuxt/content", "@nuxt/image"],
  content: {
    highlight: {
      theme: 'nord',
    }
  },


  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["hyvor-talk-comments"].includes(tag),
    },
  },
  app: {
    pageTransition: { name: 'slide-fade' },
    head: {
      meta: [
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }

      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
})