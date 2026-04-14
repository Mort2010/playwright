# Config Notes

## Introduction
Notes about changes to configuration and why are stored here.

## Playwright.config.js

If you want your tests to always start on a set place you can se the below. Suitable for test environments where you always go to 1 or override.

Add this. I have left it in the before all block as will vary per test as I am using stuff from round the internet not a actual test server.
```
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.BASE_URL || '<>default URL here>',



    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```

Will set the default to the URL we want or allow override by ennvironmental variable.

In my case switched back to a before each block as each test suit goes somewhere different potentially and I don't want to hurt 1 demo server. They are nice enough to put demo servers up be gentle on them.

## ESlint

Reason for use enforce basic rules and standards. Helps improve code quality easily and setup early means less cleanup later.

Install commands
```
npm install eslint --save-dev
npx eslint --init
```

Install the VS code browser extension ```dbaeumer.vscode-eslint```

Config File - Used as recommended tool.

```
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
```
Restart VS code

To confirm its working add this to a .js file and it should flag no var.
```
var x = 1
console.log(x)
```