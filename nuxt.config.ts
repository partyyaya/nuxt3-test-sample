// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // 註冊為全局樣式
                    additionalData: '@import "@/assets/styles/default.scss";'	
                }
            }
        }
    }
})
