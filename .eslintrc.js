module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // Nuxt 官方提供用於 Nuxt 的 ESLint 規則配置
    '@nuxtjs/eslint-config-typescript',
    // 由 Vue.js 官方提供的 ESLint 插件，包含配合 Vue SFC 語法及特性的規則
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off'
  },
  /**
    因 @nuxtjs/eslint-config 包含 Vue 2 的 ESLint 設定
    需額外安裝 eslint-plugin-vue 來擴展 Vue 3 規則配置
    並覆寫 vue/multi-word-component-names 規則。
  */
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
