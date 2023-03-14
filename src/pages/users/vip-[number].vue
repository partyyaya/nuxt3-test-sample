<template>
  <!-- 用於動態路徑 -->
  <div>
    匹配到的 vip number: <span>{{ number }}</span>
  </div>
</template>

<script setup>
const route = useRoute()
// 若路由是 /users/test1234，則id為test1234
const { number } = route.params
</script>
