module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],
    "no-unused-vars": "error"
  },
  settings: {
    react: {
      version: "latest"
    }
  }
};
