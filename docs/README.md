# Introduction

## Setup
This is a guide for windows using MS VS-Code. I used CMD in the terminal

### Install node
Link [Install node from here](https://nodejs.org/en/download/)

### Install Playwright
Command to install latest verions ```npm init playwright@latest```

Select JS and leave everything else at defaults.

Once complete will output these messages.

```
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```

Not sure why it assumes testers are hacking but hey it is what it is.

## Run Example
This is to test the basic install. ```cd``` to the tests directory and run the command ```npx playwright test```.

The tests should pass as they are pretty basic giving 2 green ticks in the terminal and a test-results folder should be created with a json file inside. On opening you should find the results are passed. Congrats the basic install works.

## Make VS Code Work With Playwright Better
Lets go get the extension mentioned here as it would make life allot easier. [Link](https://playwright.dev/docs/getting-started-vscode)

Once installed and enabled you can run tests at a click of the button.


## Stop By The Best Practices
This might seem limited but have a read. It shows you things that are important to know if you want to make the most of the framework.

While it has the typical advice of keep tests isolated it also contains information like soft assertions that enable a test to pass over a expect without stopping the test. [Link to best practices](https://playwright.dev/docs/best-practices). This is super important for deciding what is actually critical to a test. AKA if it was wrong I could continue to test the rest of the flow potentially grabbing more issues first time.

