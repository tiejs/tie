"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["prettier/@typescript-eslint", "plugin:prettier/recommended"],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
};
