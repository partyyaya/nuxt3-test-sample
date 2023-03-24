<template>
  <div>
    <h1>這邊是插件</h1>
    <p>{{ sayhi }}</p>
    <p>{{ $output('test123') }}</p>
  </div>
</template>

<script setup>
const { $output } = useNuxtApp()
const sayhi = $output('gary')
</script>
