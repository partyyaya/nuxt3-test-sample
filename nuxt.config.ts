// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  typescript: {
    // vue-tsc：若類型檢查有錯會在終端機顯示
    typeCheck: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 註冊為全局樣式
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  },
  imports: {
    dirs: [
      // 掃描 composables 目錄頂層
      // 'composables',
      // 掃描深度一層的特定檔案
      // 'composables/*/index.{ts,js,mjs,mts}',
      // 掃描整個 composables 目錄下的檔案
      'composables/**'
    ]
  }
})
