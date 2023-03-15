<template>
  <div>
    <h1>這邊是自訂預設布局</h1>
    <p>test</p>
  </div>
</template>

<script setup>
// 若有預設布局模板，則原本的布局會失效(layouts/default.vue)
// definePageMeta 方法提供可設定特定的布局模板，layout 參數所對應的名稱，即為 layouts 目錄下的布局模板
// 布局模板的命名規範使用 Kebab Case 命名法，若檔案名稱為 customLayout.vue，將會以 custom-layout 作為 name 屬性傳遞
// definePageMeta({
//   layout: 'custom'
// })

// 可以動態切換布局模版
setTimeout(() => setPageLayout('custom'), 1000)
</script>
