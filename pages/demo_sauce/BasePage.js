// pages/BasePage.js
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path) {
    await this.page.goto(path);
  }

  async waitForPageTitle(title) {
    await this.page.waitForFunction(
      expected => document.title.includes(expected),
      title
    );
  }
}

module.exports = { BasePage };
