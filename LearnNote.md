## Nuxt3 筆記
- 主要紀錄使用 `Nuxt3` 的重點整理，搭配程式碼一起觀看
- 主要程式碼皆放在 `src` 目錄下，後續內容都以該資料夾為核心主軸

### 動態路由使用
- 在 pages 資料夾內新增 `[xxx].vue` 檔案，可自定義動態路由，範例：
  - 設定 `pages\users\[id].vue`，則連上 `localhost:xxx/users/test`，則 `id` 為 test
- 在 pages 資料夾內新增 `[...xxx].vue` 檔案，可新增所有層級的路由，範例：
  - 設定 `pages\[...slug].vue` 並填入404資訊，則連上不存在的頁面時，呈現 404 頁面
- 巢狀路由可參考 `pages\nest` 配置

### 布局模板使用
- 1.可查看 `app.vue` 的對應關係
- 2.可查看 `pages` 裡面的 `custom.vue`、`index.vue` 配置

### 元件使用
- 以下元件使用可參考 `pages\component.vue` 的引用方式
- 元件集中放在 `components`，並且會自動引入
- 元件的名稱會基於路徑、檔案名稱，並刪除重複的字段
  - `test\input.vue`，則引入的元件名稱為：`<TestInput>`、`test-input`
  - `form\table\TableInput.vue`，則引入的元件名稱為：`<FormTableInput>`、`<form-table-input>`
- 動態元件：若要使用 `<component :is="" />` 進行動態切換，則可使用 `resolveComponent` 引入元件
- 動態引入元件：於元件名稱前面增加 `Lazy` 前綴即可，如：`<DynamicImport>` 更換成 `<LazyDynamicImport>`
- `<ClientOnly>` 元件：用於控制被包裹的元件僅在客戶端進行渲染
  - 也可在元件名稱加上 `.client`、`.server` 後綴來切換，詳細可看裡面程式碼

### 組合式函數
- 以下組合式函數使用可參考 `pages\composables.vue` 的引用方式
- 集中放在 `composables` 目錄底下並會自動引入，有兩種新增方式：
  - 注意：`nuxt` 會自動引入目錄下的第一層檔案，除非第二層檔名為 `index`
  - 1.由檔名命名
  - 2.在檔案中命名函數
- 若想設定 `composables` 目錄底下的都引入，需設定 `nuxt.config`
  ```js
  export default defineNuxtConfig({
    imports: {
      dirs: [
        // 掃描 composables 目錄下所有檔案，** 代表不管檔案路徑多深
        'composables/**'
      ]
    }
  })
  ```

### 插件
- 以下插件使用可參考 `pages\plugins.vue` 的引用方式
- 集中放在 `plugins` 目錄底下並會自動引入
  - 注意：`nuxt` 會自動引入目錄下的第一層檔案，除非第二層檔名為 `index`
  - 可在名稱加上 `.client`、`.server` 後綴來切換伺服器端或客戶端中使用
- 建立插件的基本方式：
  ```ts
  export default defineNuxtPlugin(nuxtApp => {
    // 可以使用 nuxtApp 來做一些事情
  })
  ```
- 若使用 `Providing Helpers` 可參考 `myPlugin\index.ts` 的使用方式
- 若使用 `vue-use` 可參考 `vue-gtag.client.ts` 的使用方式，會自動引用
  - 若要使用則需加入依賴：`yarn add -D vue-gtag-next`
- 若使用 `vue-directives` 可參考 `directives.ts` 的使用方式
