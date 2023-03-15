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
  </div>
</template>

<script setup>
const show = ref(false)
const TestInput = resolveComponent('TestInput')
const FormTableInput = resolveComponent('FormTableInput')

const importComp = ref(false)
</script>
