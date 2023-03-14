<template>
  <div>
    <!-- 設置loading -->
    <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500">test loading</div>
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
