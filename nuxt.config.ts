// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,
  modules: ["@pinia/nuxt"],
  plugins: [{ src: "~/plugins/toast.js", mode: "client" }],
});
