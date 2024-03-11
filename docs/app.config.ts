export default defineAppConfig({
  docus: {
    title: 'BEEER Ethiopia',
    description: 'Contribution Guide',
    image: 'https://res.cloudinary.com/doifglnsi/image/upload/f_webp,q_20/v1698927533/logo_dxqwyh',
    socials: {
      twitter: 'nuxt_js',
      github: 'eyopa21/BEEER',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    }
  }
})
