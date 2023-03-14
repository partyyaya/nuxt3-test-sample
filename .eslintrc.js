module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // Nuxt 官方提供用於 Nuxt 的 ESLint 規則配置
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
