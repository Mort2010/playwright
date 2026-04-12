// pages/LoginPage.js
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.homeButton = page.getByRole('link', { name: 'Home' })
    this.catalogButton = page.getByRole('link', { name: 'Catalog' })

  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { HomePage };
