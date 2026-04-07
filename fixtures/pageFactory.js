const { test: base } = require('@playwright/test');

exports.test = base.extend({
  createPO: async ({ page }, use) => {
    const factory = (POClass) => new POClass(page);
    await use(factory);
  },

  start: async ({ createPO }, use) => {
    const starter = async (POClass, path = '/') => {
      const po = createPO(POClass);
      await po.goto(path);
      return po;
    };

    await use(starter);
  }
});