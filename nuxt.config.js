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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#e9194a' },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#e9194a' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=fredoka-one:400|inter:400,800' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png' , href: '/icons/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png' , href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/site.webmanifest' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#e9194a' },
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
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content') // eslint-disable-line
      const items = await $content('events', { deep: true }).fetch()
      return items.map(i => i.dir)
    }
  },
  tailwindcss: {
    cssPath: '~/assets/style.css'
  },
  moment: {
    timezone: true,
  },
}
