<template>
  <div>
    <h1>欢迎来到第一个页面</h1>
    <!-- 對應 layout/header.vue -->
    <NuxtLayout name="header">
      <template #header>
        <p>這段會放置在 header 插槽</p>
      </template>
      <template #default>
        <p>被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 中</p>
      </template>
      <template #footer>
        <p>這段會放置在 footer 插槽</p>
      </template>
    </NuxtLayout>
    ------------------------------<br />
    <!-- 對應 pages/component.vue -->
    <NuxtLink to="/component"> 进入元件使用頁 </NuxtLink><br />
    <!-- 對應 pages/composables.vue -->
    <NuxtLink to="/composables"> 进入組合函數使用頁 </NuxtLink><br />
    <!-- 對應 pages/plugins.vue -->
    <NuxtLink to="/plugins"> 进入插件使用頁 </NuxtLink><br />
    <!-- 使用 stores -->
    {{ JSON.stringify(userInfo) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores'
export default defineComponent({
  name: 'Index',
  setup() {
    const userInfo = useUserStore().userInfo
    return {
      userInfo
    }
  }
})
</script>
<style lang="scss" scoped>
/* 因為有引入全局樣式，可以直接引用 scss 變數 */
div {
  background-color: $bgColor;
}
</style>
