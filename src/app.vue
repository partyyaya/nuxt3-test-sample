<template>
  <div>
    <!-- 設置loading -->
    <div v-if="loading">test loading</div>
    <!-- 路由出口 -->
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
