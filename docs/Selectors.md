# Playwright Selectors

## Introduction
Selectors are always a hot topic and nobody can give you 100% guide for the right and wrong. But playwright gives you some additional options.

## Traditional Selenium

If you used selenium you know the routine methods.

* ID - First stop as should be unique.
* CSS - Selectors are often build chaining these.
* Xpath - Last resort

Now none are perfect but they can be combined with other stuff to search down without pulling the whole code apart.

## Playwright

So using the locator command you can continue using the traditional style. Why am I thinking this as tools matter they give options which one is best depends on allot of stuff.

* Advantage if you used to it.

[Browser Stack Information](https://www.browserstack.com/guide/playwright-selectors-best-practices)

The above article mentions using locators by role these are normally less brittle its an advantage of playwright another way to do things.

* Use Role-Based Selectors
```await page.getByRole(‘textbox’, { name: ‘role_name_here’ });```

* Test IDs 
While not exclusive to Playwright you could lock by ID or CSS in selenium but playwright does have a built in feature.

```await page.getByTestId(‘order-me’);```

Now for those who want to stick to CSS styles you could do the same with.

```By.CSS_SELECTOR, "[data-testid='submit-button']")```

## Playwrights Selectors

* page.getByRole() to locate by explicit and implicit accessibility attributes.
* page.getByText() to locate by text content.
* page.getByLabel() to locate a form control by associated label's text.
* page.getByPlaceholder() to locate an input by placeholder.
* page.getByAltText() to locate an element, usually image, by its text alternative.
* page.getByTitle() to locate an element by its title attribute.
* page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

[Taken From](https://playwright.dev/docs/locators#quick-guide)

## Why This Matters

Using the right selectors to do the correct thing will make tests more robust. Remember classes change when people adjust CSS on a page or rework it. IDS / the role and text often don't.

## Chaining

Playwright like many tools allows you to chain selectors / lock methods so you can do it in one line. Useful but careful not to create massive chains that end up brittle.
