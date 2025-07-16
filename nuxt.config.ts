// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: [
    '~/scss/_reset.scss',
    '~/scss/global.scss',
  ],
  googleFonts: {
    families: {
      'Funnel+Sans': [400, 700, 900],
    }
  },

})
