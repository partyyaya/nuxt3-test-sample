module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  extends: [
    // Nuxt 官方提供用於 Nuxt 的 ESLint 規則配置
    '@nuxtjs/eslint-config-typescript',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 避免 CRLF、LF 問題
        endOfLine: 'auto',
        // 避免結尾不使用分號而報錯
        semi: false
      }
    ],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
