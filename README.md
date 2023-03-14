# Nuxt 3 實驗專案
- 因為安裝時無選擇，已自帶 `vite`、`vue3`、`TypeScript`
- 本專案已安裝：
  - `pinia`
  - `sass`
  - `vueuse`
  - `vue-tsc`：檢查 `vue` 文件上的 `ts` 錯誤
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

## 正式版發布
- 打包正式版：`yarn run build`
- 預覽正式版：`yarn run preview`

## 創建nuxt專案步驟
- 用來記錄創建 `nuxt` 專案的步驟
- 1.使用 `nvm` 安裝 `node 16.11.0`：`nvm install 16.11.0`
- 2.切換到該版本後，安裝 `yarn`：`npm install --global yarn`
- 3.`npx nuxi init 專案名`
- 4.會確認幫你安裝 `nuxi` 並幫你建立 `nuxt 專案`
- 5.進入專案後，安裝依賴 `yarn install` 即初始化完成
