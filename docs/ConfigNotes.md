# Config Notes

## Introduction
Notes about changes to configuration and why are stored here.

## Playwright.config.js

If you want your tests to always start on a set place you can se the below. Suitable for test environments where you always go to 1 or override.

Added
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

