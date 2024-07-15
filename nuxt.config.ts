// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  mode: 'universal', // or 'spa'
  router: {
    base: '/'
  },
  generate: {
    fallback: true // for static hosting
  }
})
