// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    static: true
  },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: [
    '~/scss/_reset.scss',
    '~/scss/global.scss',
  ],
  googleFonts: {
    families: {
      'Tinos': true,
    }
  },

})
