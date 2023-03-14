<template>
  <div>
    這是 catch/... 下的頁面
    <p>匹配到的 Params:</p>
    <!-- 
    其中 slug(可改檔案名) 為路徑取得的參數
    若路徑為 http://localhost:3000/catch/aaa/bbb
    則輸出 [ "aaa", "bbb" ]
  -->
    <p>{{ $route.params.slug }}</p>
    <span>每個陣列元素對應一個層級</span>
  </div>
</template>
