// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-03',
})
