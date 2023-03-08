<template>
  <div>
    <h1>欢迎来到第一个页面</h1>
    <!-- 對應 pages/list.vue -->
    <NuxtLayout name="header"/>
    <NuxtLink to="/list">进入列表页</NuxtLink>
    <!-- 使用 composables 內的 hook -->
    {{ foo }}
    <!-- 使用 stores -->
    {{ JSON.stringify(userInfo) }}
    <!-- 
        頁面上會顯示 client 端
        開發者工具 > 網路預覽，會發現是server端
    -->
    <div>
        A 區塊是由 {{renderSide()}} 渲染
    </div>
    <client-only>
        B 區塊是由 {{renderSide()}} 渲染
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores'
export default defineComponent({
    name: 'index',
    setup() {
        function renderSide () {
             if (process.server) {
                return 'Server 端';
            } else if (process.client) {
                return 'Client 端';
            } else {
                return 'error'
            }
        }
        const foo = useFoo()
        const userInfo = useUserStore().userInfo
        return {
            renderSide,
            foo,
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