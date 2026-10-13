const title = 'Peechbuilder Technologies — From ideas to impact'
const description = 'Peechbuilder Technologies designs, builds and runs digital products: mobile apps, web platforms and the cloud systems behind them.'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Server-only. Set via NUXT_RESEND_API_KEY.
    resendApiKey: '',
    contactFrom: 'Peechbuilder Website <no-reply@peechbuilder.com>',
    contactTo: 'admin@peechbuilder.com,bhullarji621@gmail.com',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#14233A' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.peechbuilder.com' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [600, 700, 800] },
    ],
  },
})
