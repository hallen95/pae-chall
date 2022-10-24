import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Mew - profile',
    title: 'Mew Fullstack Profile',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: "facebook:title",
        name: "facebook:title",
        content: '# 151 Mew profile!',
      },
      {
        hid: "facebook:description",
        name: "facebook:description",
        content: "Fullstack app with Vue/Nuxt + Express/MongoDB",
      },
      {
        hid: "facebook:image",
        name: "facebook:image",
        content: "https://mew-profile.vercel.app/mew.jpg",
      },
      {
        hid: "facebook:image:alt",
        name: "facebook:image:alt",
        content: 'Fullstack app with Vue/Nuxt + Express/MongoDB',
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Fullstack app with Vue/Nuxt + Express/MongoDB",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Fullstack app with Vue/Nuxt + Express/MongoDB",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://mew-profile.vercel.app/mew.jpg",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Fullstack app with Vue/Nuxt + Express/MongoDB",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: 'Fullstack app with Vue/Nuxt + Express/MongoDB',
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Fullstack app with Vue/Nuxt + Express/MongoDB",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://mew-profile.vercel.app/mew.jpg",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://mew-profile.vercel.app/mew.jpg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: 'Fullstack app with Vue/Nuxt + Express/MongoDB',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/api.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://pokeapi.co/api/v2/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
