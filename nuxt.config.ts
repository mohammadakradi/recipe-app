// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',

  future: {
    compatibilityVersion: 4
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      Montserrat: true
    }
  }
})