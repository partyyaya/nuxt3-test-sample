<template>
  <div>
    <!-- 使用 composables 內的 hook -->
    {{ foo }}
    <p>--------------------------</p>
    點擊次數：{{ count }} <br />
    <button @click="increment">click</button>
    <p>--------------------------</p>
    切換boolean：{{ isTrue }} <br />
    <button @click="switchBoolean">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Index',
  setup() {
    // 會自動引入 composables 目錄下的 hooks
    // 自動引入檔名 useFoo 檔案裡的 hook
    const foo = useFoo()
    // 自動引入檔名 test 檔案裡名為 useCount 的 hook
    const { count, increment } = useCount()
    /**
     * nuxt3 只會默認引入 composables 目錄第一層的 hook
     * 不會引入第二層以後的 hooks(除了 xxx/index.js 以外)
     * 除非有設定 nuxt.config
     */
    const { isTrue, switchBoolean } = useSwBool()
    return {
      foo,
      count,
      increment,
      isTrue,
      switchBoolean
    }
  }
})
</script>
