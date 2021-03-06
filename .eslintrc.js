module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import", "node", "prettier", "promise", "simple-import-sort"],
  rules: { "prettier/prettier": "error" },
};
