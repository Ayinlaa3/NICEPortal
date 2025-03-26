import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.config(js.configs.recommended),
  ...compat.config(react.configs.recommended),
  ...compat.config(reactHooks.configs.recommended),
  prettierConfig,
  {
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    ignores: ["node_modules", "dist", "build"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Disable prop-types if you're using TypeScript
      "react/jsx-uses-react": "off", // Not needed in React 17+
      "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
    },
    settings: {
      react: {
        version: "18.0", // Explicitly specify the React version
      },
    },
    languageOptions: {
      globals: {
        document: "readonly", // Add document as a global variable
        window: "readonly", // Add window as a global variable
      },
    },
  },
];
