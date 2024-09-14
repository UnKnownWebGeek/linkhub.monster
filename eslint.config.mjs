import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";

const compat = new FlatCompat();

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": "@typescript-eslint/eslint-plugin",
      prettier: "eslint-plugin-prettier",
    },
    extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "error",
      "no-var": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
  ...compat.extends("plugin:react/recommended", {
    settings: {
      react: {
        version: "detect",
      },
    },
  }),
];
