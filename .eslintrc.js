module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    // 'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'no-console': 'off',
    // 'vue/no-v-html': 'off'
  },
};
