module.exports = {
  root:true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    "no-unneeded-ternary":"off",
    "consistent-return":"off",
    "no-case-declarations":"off",
    "no-else-return":"off",
    "prefer-destructuring":"off",
    "no-use-before-define":"off",
    "default-param-last":"off",
    "no-param-reassign":"off",
    "array-callback-return":"off",
    "import/first":"off",
    "one-var":"off",
    "import/no-extraneous-dependencies":"off",
    "prefer-default-export":"off",
  },
};
