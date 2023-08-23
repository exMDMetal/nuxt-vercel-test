// https://nuxt.com/docs/api/configuration/nuxt-config
const isProduction = process.env.NODE_ENV === 'production'
export default defineNuxtConfig({
  devtools: { enabled: !isProduction },
  nitro: {
    preset: 'vercel',
    storage: {
      default: isProduction ? {
        driver: 'vercelKV'
      } : {
        driver: 'fs',
        base: '/tmp/nitro'
      }
    }
  },
})
