<template>
  <div>
    <!-- 設置loading -->
    <div v-if="loading">test loading</div>
    <!-- 
      路由出口，NuxtLayout 預設使用 layout\default.vue
      裡面的 slot 由 NuxtPage(pages資料夾下的內容填充)
      等價於 <NuxtLayout name="default">
    -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const test: String = 'okok'
const nuxtApp = useNuxtApp()
const todos: String[] = ['1', '2', '3']
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
  console.log('test1')
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
  console.log('test2')
})
</script>
