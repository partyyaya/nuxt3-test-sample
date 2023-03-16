<template>
  <div>
    <h1>欢迎来到列表页面</h1>
    <!-- 對應到 components/ListItem.vue -->
    <ListItem />
    <!-- 對應到 components/test/Input.vue -->
    <TestInput />
    <!-- 對應到 components/form/table/TableInput.vue -->
    <FormTableInput />
    <form-table-input />
    <p>---------------------動態元件------------------------</p>
    點擊開關切換<input v-model="show" type="checkbox" />
    <component :is="show ? TestInput : FormTableInput" />
    <p>---------------------動態引入元件------------------------</p>
    點擊開關引入<input v-model="importComp" type="checkbox" />
    <LazyDynamicImport v-if="importComp" />
    <p>
      ---------------------clientonly、.clent、.server元件------------------------
    </p>
    <!--
        頁面上會顯示 client 端
        開發者工具 > 網路預覽，會發現是server端
    -->
    <div>A 區塊是由 {{ renderSide() }} 渲染</div>
    <ClientOnly>
      <ClientOnlyTest />
      <!-- 客戶端載入完成 ClientOnlyTest 元件時，才替換掉 #fallback 的內容-->
      <template #fallback>
        該區塊是由 {{ renderSide() }} 渲染，ClientOnlyTest 元件載入中...
      </template>
    </ClientOnly>
    <!-- 會自動切換 .clent、.server元件 -->
    <client-and-server />
  </div>
</template>

<script setup>
const show = ref(false)
const TestInput = resolveComponent('TestInput')
const FormTableInput = resolveComponent('FormTableInput')

const importComp = ref(false)

function renderSide() {
  if (process.server) {
    return 'Server 端'
  } else if (process.client) {
    return 'Client 端'
  } else {
    return 'error'
  }
}
</script>
