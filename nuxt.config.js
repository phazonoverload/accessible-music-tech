// TODO: SEO & META

import copyContentMedia from './utils/copy-content-media.js'
copyContentMedia()

export default {
  target: 'static',

  head: {
    title: 'Accessible Music Tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=fredoka-one:400|inter:400,800' }
    ]
  },

  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {},
  build: {},
  tailwindcss: {
    cssPath: '~/assets/style.css'
  },
  moment: {
    timezone: true,
  },
}
