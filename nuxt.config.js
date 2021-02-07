import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {

    title: 'Bryan Chua',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Website Portfolio'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.bryancsh.space'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Bryan Chua'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Website Portfolio'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.bryancsh.space/IMG_20200926_175017-01.jpg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Bryan Chua' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.bryancsh.space'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Bryan Chua'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Website Portfolio'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.bryancsh.space/IMG_20200926_175017-01.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.bryancsh.space/IMG_20200926_175017-01.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Bryan Chua'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon3.png' },
      {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      },
      { href: "https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500&family=Lato:wght@300;400&display=swap:", rel: "stylesheet" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
