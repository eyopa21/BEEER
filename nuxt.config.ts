// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/tailwind.css"],
  modules: ['@nuxt/ui', 'nuxt-swiper', "@nuxt/content", "@nuxt/image", "@nuxtjs/apollo", 'nuxt-icon', "@vueuse/nuxt"],
  content: {
    highlight: {
      theme: 'nord',
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://beeer.hasura.app/v1/graphql'
      }
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