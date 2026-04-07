// components/Header.js
class Header {
  constructor(page) {
    this.page = page;

    this.profileMenu = page.locator('#profile');
    this.logoutButton = page.locator('#logout');
  }

  async logout() {
    await this.profileMenu.click();
    await this.logoutButton.click();
  }
}

module.exports = { Header };
