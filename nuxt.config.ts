// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@pinia/nuxt', 'nuxt-icon'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/variables.scss"',
        },
      },
    },
  },
});
