# Nuxt 3 實驗專案
- 因為安裝時無選擇，已自帶 `vite`、`vue3`、`TypeScript`
- 本專案已安裝：
  - `pinia`
  - `sass`
  - `vueuse`
  - `vue-tsc`：用來檢查 `vue` 文件上的 `ts` 錯誤
  - 安裝 `eslint`：`eslint`、`@nuxtjs/eslint-config-typescript`
    - 關於 `nuxt3` 整合 `eslint`：[eslint-config](https://github.com/nuxt/eslint-config)
  - 安裝 `prettier`：`prettier`、`eslint-config-prettier`、`eslint-plugin-prettier`
    - 關於整合 `eslint`：[Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)

## 環境設定
- Node 版本：16.11.0 以上，建議使用 [NVM](https://github.com/nvm-sh/nvm)
- `eslint` 設定：
  - 1.至 `VSCode` 左側安裝模組 `eslint`
  - 2.會自動觸發(或需重新啟動) `.vscode/settings.json` 裡的設定 `source.fixAll.eslint` 存檔時自動修正

## Nuxt 3 文件
- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [deployment documentation](https://nuxt.com/docs/getting-started/deployment)
- [參考文章](https://juejin.cn/post/7170746000112353293)

## 使用本專案步驟
- 1.使用 `nvm` 安裝 `node 16.11.0`：`nvm install 16.11.0`
- 2.切換到該版本後，安裝 `yarn`：`npm install --global yarn`
- 3.安裝依賴：`yarn install`
- 4.開發環境：`yarn run dev`

## Nuxt 指令
- 開啟開發環境 `npx nuxi dev [--open, -o] [--port, -p]`
  - `-o`：自動開啟瀏覽器
  - `-p`：指定 port 號
- 清除緩存 `npx nuxi clean|cleanup [rootDir]`
  - `.nuxt`
  - `.output`
  - `node_modules/.vite`
  - `node_modules/.cache`
- 版本升級 `npx nuxi upgrade [--force|-f]`
  - 升級前建議看官方的 log

## 正式版發布
- 打包正式版：`yarn run build`
- 預覽正式版：`yarn run preview`

## 動態路由使用
- 在 pages 資料夾內設定 `[xxx].vue` 檔案可以自定義路由參數，範例：
  - 設定 `pages\users\[id].vue`，則連上 `localhost:xxx/users/test`，則 `id` 為 test
- 在 pages 資料夾內設定 `[...xxx].vue` 檔案可以所有層級的路由，範例：
  - 設定 `pages\[...slug].vue` 並填入404資訊，則連上不存在的頁面時呈現 404
- 巢狀路由可參考 `pages\nest` 配置