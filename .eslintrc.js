module.exports = {
  root: true,
  globals: {
    uni: true,
    wx: true,
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    // "@vue/airbnb"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-tabs": "off",
    "vue/no-v-model-argument": "off",
  },
};
