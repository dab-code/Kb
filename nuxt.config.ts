// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    static: true
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  css: [
    '~/scss/_reset.scss',
    '~/scss/global.scss',
  ],
  googleFonts: {
    families: {
      'Roboto+Mono': '400..600',
    }
  },
})