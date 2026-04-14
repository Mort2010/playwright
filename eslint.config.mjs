// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {},
    extends: [
      js.configs.recommended       // base recommended rules
    ],
    rules: {
      // --- Style rules you probably expect ESLint to catch ---
      "no-var": "error",
      "prefer-const": "error",
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "off",          // change to "warn" if you want
      "eqeqeq": "error",
      "curly": "error",
      "no-trailing-spaces": "error",
      "comma-dangle": ["error", "never"]
    }
  }
]);
